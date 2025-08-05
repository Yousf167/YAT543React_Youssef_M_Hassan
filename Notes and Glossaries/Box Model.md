The **CSS Box Model** is the fundamental concept that describes how HTML elements are structured and rendered on the page. Every element is considered as a rectangular box composed of **four areas**:

---

### ✅ Box Model Structure

```
+---------------------------+
|      margin (outside)     |
|  +---------------------+  |
|  |    border (edge)    |  |
|  |  +---------------+  |  |
|  |  |    padding    |  |  |
|  |  | +-----------+ |  |  |
|  |  | |  content  | |  |  |  
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

---

### 🔹 1. `content`

* The actual content of the element (text, image, etc.).
* Controlled by: `width` and `height`.

### 🔹 2. `padding`

* Space between content and border.
* Transparent.
* Controlled by: `padding`, `padding-top`, `padding-right`, etc.

### 🔹 3. `border`

* The edge around the padding and content.
* Controlled by: `border`, `border-width`, `border-style`, `border-color`.

### 🔹 4. `margin`

* Space **outside** the border, separating elements.
* Transparent.
* Controlled by: `margin`, `margin-top`, etc.

---

### 📏 Total Element Size (Default `box-sizing: content-box`)

```css
Total Width  = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
Total Height = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
```

---

### 📦 Alternate Model: `box-sizing: border-box`

```css
element {
  box-sizing: border-box;
}
```

* Makes `width` and `height` **include** padding and border.
* Easier for layout control.

---

### 🧠 Tip

Apply universally with a reset:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```
