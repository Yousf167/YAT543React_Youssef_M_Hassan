# CSS Selectors Glossary


### 🔹 **Basic Selectors**

| Selector            | Matches                  |
| ------------------- | ------------------------ |
| `*`                 | Every element            |
| `div`               | All `<div>`s             |
| `.class`            | Elements with class      |
| `#id`               | Element with specific ID |
| `element, element2` | Multiple selectors       |

---

### 🔹 **Attribute Selectors**

| Selector           | Matches                       |
| ------------------ | ----------------------------- |
| `[attr]`           | Elements with that attribute  |
| `[attr="value"]`   | Exact match                   |
| `[attr~="value"]`  | Value as space-separated word |
| `[attr\|="value"]` | Value or starts with `value-` |
| `[attr^="val"]`    | Starts with                   |
| `[attr$="val"]`    | Ends with                     |
| `[attr*="val"]`    | Contains substring            |

---

### 🔹 **Combinators**

| Selector | Meaning                         |
| -------- | ------------------------------- |
| `A B`    | B inside A (descendant)         |
| `A > B`  | B is direct child of A          |
| `A + B`  | B is directly after A (sibling) |
| `A ~ B`  | All B siblings after A          |

---

### 🔹 **Pseudo-classes (state-based)**

| Selector                      | Matches                        |
| ----------------------------- | ------------------------------ |
| `:hover`                      | When hovered                   |
| `:focus`                      | When focused                   |
| `:active`                     | When clicked                   |
| `:checked`                    | Checked inputs                 |
| `:disabled`, `:enabled`       | Form states                    |
| `:first-child`, `:last-child` | Position in parent             |
| `:nth-child(n)`               | Nth element                    |
| `:nth-of-type(n)`             | Nth of same type               |
| `:not(selector)`              | Everything **except** selector |

---

### 🔹 **Pseudo-elements (part of element)**

| Selector         | Targets                    |
| ---------------- | -------------------------- |
| `::before`       | Before content             |
| `::after`        | After content              |
| `::first-line`   | First line of text         |
| `::first-letter` | First letter               |
| `::selection`    | Highlighted text           |
| `::marker`       | List item bullets/numbers  |
| `::placeholder`  | Placeholder text in inputs |

---

### 🧠 Example Cheat Sheet

```css
/* Every input with type="text" */
input[type="text"]

/* All buttons directly inside form */
form > button

/* First paragraph inside an article */
article p:first-child

/* All visible list bullets */
li::marker

/* All links NOT pointing to example.com */
a:not([href*="example.com"])
```