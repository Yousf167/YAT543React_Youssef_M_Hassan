const $ = (sel) => document.querySelector(sel);
const editor = $('#code');
const runBtn = $('#runBtn');
const clearBtn = $('#clearBtn');
const resetBtn = $('#resetBtn');
const babelToggle = $('#babelToggle');
const consoleEl = $('#console');

const EXAMPLE = `// Welcome! This sandbox runs your code in a fresh, isolated iframe each time.
// You can use ES modules (import/export) and even import from CDNs like esm.sh or jsdelivr.
// Try editing and hit Ctrl/Cmd+Enter or click Run.

console.log('Hello from the sandbox!');

// You can manipulate the iframe's document:
const el = document.createElement('h2');
el.textContent = 'DOM access works here.';
els = document.body.appendChild(el);

// Importing from a CDN (uncomment to try):
// import _ from 'https://esm.sh/lodash-es';
// console.log('Chunked array:', _.chunk([1,2,3,4,5], 2));

// Throw an error to see error capture:
// throw new Error('Boom!');
`;

// Load initial code from localStorage or example
const LS_KEY = 'mini-js-compiler-code';
editor.value = localStorage.getItem(LS_KEY) || EXAMPLE;

function appendLine(type, parts) {
      const line = document.createElement('div');
      line.className = `line ${type}`;
      line.textContent = parts.map(prettyPrint).join(' ');
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
}

function prettyPrint(v) {
      try {
            if (typeof v === 'string') return v;
            return JSON.stringify(v);
      } catch (_) {
            return String(v);
      }
}

// Single message listener (avoid duplicates on reruns)
window.addEventListener('message', (e) => {
      const data = e.data || {};
      if (!data || !data.type) return;
      if (data.type.startsWith('console:')) {
            appendLine(data.type.split(':')[1], data.args || []);
      } else if (data.type === 'error') {
            appendLine('error', data.args || []);
      }
}, false);

function run() {
      clearConsole();
      localStorage.setItem(LS_KEY, editor.value);

      let userCode = editor.value;

      // Optional: transpile TS/JSX -> JS using Babel standalone
      if (babelToggle.checked && window.Babel) {
            try {
                  userCode = Babel.transform(userCode, {
                        presets: ['env', 'typescript', 'react'],
                        filename: 'user-code.tsx'
                  }).code;
            } catch (err) {
                  appendLine('error', ['Babel transform failed:', err.message]);
                  return;
            }
      }

      const prev = document.getElementById('preview');
      const frame = prev.cloneNode();
      prev.replaceWith(frame);

      const bootstrap = `\n<!doctype html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <script>\n    (function(){\n      const send = (type, args)=>parent.postMessage({type, args}, '*');\n      const wrap = (fn)=>function(){ try{ send('console:'+fn, Array.from(arguments)); }catch(_){}; return Function.prototype.apply.call(console['$'+fn]||console[fn], console, arguments); };\n      ['log','info','warn','error'].forEach(fn=>{ console['$'+fn] = console[fn]; console[fn] = wrap(fn); });\n      window.addEventListener('error', (e)=>{ send('error', [e.message + ' at ' + e.filename + ':' + e.lineno + ':' + e.colno]); });\n      window.addEventListener('unhandledrejection', (e)=>{ let msg = 'Unhandled rejection'; try{ msg += ': ' + (e.reason && (e.reason.stack || e.reason.message || e.reason)); }catch(_){}; send('error', [msg]); });\n    })();\n  <\/script>\n</head>\n<body>\n  <script type=\"module\">\n${userCode.replace(/<\//g, '<\\/')}\n  <\/script>\n</body>\n</html>`;

      frame.setAttribute('sandbox', 'allow-scripts'); // no same-origin => safer
      frame.srcdoc = bootstrap;
}

function clearConsole() { consoleEl.innerHTML = ''; }

runBtn.addEventListener('click', run);
clearBtn.addEventListener('click', clearConsole);
resetBtn.addEventListener('click', () => { editor.value = EXAMPLE; localStorage.removeItem(LS_KEY); clearConsole(); });

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { run(); }
});
