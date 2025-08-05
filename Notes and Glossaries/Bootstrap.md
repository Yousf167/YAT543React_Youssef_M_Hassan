Here is **the ultimate Bootstrap 5 usage guide and cheat sheet**, tailored for front-end developers who want to efficiently use Bootstrap for responsive and modern web design.

---

## 🚀 Getting Started

### ✅ Add Bootstrap to Your Project

**Option 1: CDN (Quick Start)**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

**Option 2: Via NPM**

```bash
npm install bootstrap
```

Then import in your JS/SCSS:

```js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 🎯 Layout System

### 📐 Containers

```html
<div class="container">Responsive fixed-width</div>
<div class="container-fluid">Full-width always</div>
```

### 📏 Grid System (12 columns)

```html
<div class="row">
  <div class="col-6 col-md-4">...</div>
  <div class="col-6 col-md-8">...</div>
</div>
```

#### Grid Classes

* `col` / `col-{size}`: Auto/fixed
* `row-cols-{n}`: Equal-width columns
* Responsive sizes: `sm`, `md`, `lg`, `xl`, `xxl`

---

## 🎨 Utility Classes (Lifesavers)

### Spacing (margin and padding)

```html
m-3     <!-- margin: 1rem -->
p-2     <!-- padding: 0.5rem -->
mt-4    <!-- margin-top -->
px-5    <!-- padding-left and padding-right -->
```

| Value | Spacing |
| ----- | ------- |
| 0     | 0       |
| 1     | 0.25rem |
| 2     | 0.5rem  |
| 3     | 1rem    |
| 4     | 1.5rem  |
| 5     | 3rem    |

### Display

* `d-none`, `d-block`, `d-flex`, `d-inline`, `d-md-flex`, etc.

### Flexbox

```html
d-flex
justify-content-between / center / end
align-items-center / start / stretch
flex-column / row
```

### Text

```html
text-center / text-start / text-end
text-uppercase / lowercase / capitalize
fw-bold / fw-light / fst-italic
```

### Colors

```html
text-primary / text-danger / bg-success / bg-light
```

### Borders & Radius

```html
border / border-0 / border-start / border-primary
rounded / rounded-circle / rounded-0
```

---

## 🧱 Components

### Buttons

```html
<button class="btn btn-primary">Click me</button>
<a class="btn btn-outline-secondary" href="#">Link</a>
```

Variants: `primary`, `secondary`, `danger`, `success`, `info`, `warning`, `dark`, `light`, `outline-*`

### Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCollapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Cards

```html
<div class="card" style="width: 18rem;">
  <img src="img.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Text</p>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
```

### Forms

```html
<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
```

### Alerts

```html
<div class="alert alert-warning" role="alert">
  This is a warning!
</div>
```

### Modals

```html
<!-- Button -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Launch</button>

<!-- Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Title</h5></div>
      <div class="modal-body">Content</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

### Accordion

```html
<div class="accordion" id="faq">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">Question 1</button>
    </h2>
    <div id="q1" class="accordion-collapse collapse show">
      <div class="accordion-body">Answer 1</div>
    </div>
  </div>
</div>
```

---

## 🧩 Helper & Responsive Classes

| Class                                              | Description                    |
| -------------------------------------------------- | ------------------------------ |
| `w-100`                                            | Full width                     |
| `h-100`                                            | Full height                    |
| `overflow-hidden`                                  | Hide overflow                  |
| `shadow`, `shadow-lg`                              | Apply shadow                   |
| `position-relative`, `absolute`, `fixed`, `sticky` | Positioning                    |
| `z-1`, `z-3`                                       | Z-index                        |
| `visually-hidden`                                  | Accessibility (screen readers) |
| `order-{1-5}`                                      | Flex item order                |

---

## 📱 Responsive Design

Use these **breakpoints**:

| Size        | Prefix           | Width ≥ |
| ----------- | ---------------- | ------- |
| Extra small | `xs` (no prefix) | 0px     |
| Small       | `sm`             | 576px   |
| Medium      | `md`             | 768px   |
| Large       | `lg`             | 992px   |
| Extra large | `xl`             | 1200px  |
| XXL         | `xxl`            | 1400px  |

Example:

```html
col-12 col-md-6 col-lg-4  <!-- Mobile full, tablet half, desktop third -->
```

---

## 🛠️ JavaScript Components (require Bootstrap JS)

* **Collapse** (e.g., sidebar, menu)
* **Dropdown**
* **Modal**
* **Carousel**
* **Tooltip & Popover** (`data-bs-toggle="tooltip"` etc.)
* **Toast notifications**

Enable tooltips:

```js
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map(t => new bootstrap.Tooltip(t))
```

---

## 📚 Resources

* 🔗 [Bootstrap Docs](https://getbootstrap.com)
* 🔗 [Icons](https://icons.getbootstrap.com)
* 🔗 [Layout Examples](https://getbootstrap.com/docs/5.3/examples/)
