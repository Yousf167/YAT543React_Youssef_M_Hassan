CSS selector **specificity** determines which styles are applied when multiple rules target the same element. It’s calculated based on the types of selectors used and follows a **hierarchical scoring system**.

---

### 🔢 Specificity Breakdown

Specificity is usually represented as a 4-part value: **(a, b, c, d)**

| Selector Type                                                                                    | Specificity Level | Counted As                                            |
| ------------------------------------------------------------------------------------------------ | ----------------- | ----------------------------------------------------- |
| Inline styles                                                                                    | a                 | 1, 0, 0, 0                                            |
| ID selectors (`#id`)                                                                             | b                 | 0, 1, 0, 0                                            |
| Classes, attributes, pseudo-classes (`.class`, `[type]`, `:hover`)                               | c                 | 0, 0, 1, 0                                            |
| Type selectors (`div`, `h1`, etc.) and pseudo-elements (`::before`)                              | d                 | 0, 0, 0, 1                                            |
| Universal selector (`*`), combinators (`+`, `>`, `~`, space), and negation pseudo-class `:not()` | —                 | 0, 0, 0, 0 *(but the content inside `:not()` counts)* |

---

### 🧮 Examples and Their Specificities

| Selector              | Specificity  |
| --------------------- | ------------ |
| `div`                 | (0, 0, 0, 1) |
| `.box`                | (0, 0, 1, 0) |
| `#main`               | (0, 1, 0, 0) |
| `section .card:hover` | (0, 0, 2, 1) |
| `#header .nav li a`   | (0, 1, 1, 3) |
| `style="color: red"`  | (1, 0, 0, 0) |

---

### ⚠️ Important Notes

* Higher values override lower ones.
* If two rules have the **same specificity**, the **later one** in the CSS wins (due to the **cascade**).
* Inline styles always win over CSS rules in `<style>` or external files (except `!important`, which is a separate mechanism).

---

### 💣 `!important` Exception

* Overrides **everything** except another `!important` with higher specificity.
* Use sparingly, as it breaks the natural cascade.

---

### 🧠 Quick Trick to Compare Specificity

Use this as a decimal number: **(a,b,c,d) → abcd**

Example:

* `#main` → 0100
* `.nav a` → 0011
  So, `#main` wins.

---


# To **calculate CSS specificity**, follow these exact steps:


### ✅ 1. **Break the selector into components**

Separate the selector into:

* **Inline styles** → `a`
* **ID selectors** → `b`
* **Classes, attributes, pseudo-classes** → `c`
* **Element names & pseudo-elements** → `d`

---

### ✅ 2. **Count how many of each you have**

| Selector Part                           | Counted in | Examples                  |
| --------------------------------------- | ---------- | ------------------------- |
| Inline styles                           | `a`        | `style="color:red"`       |
| ID selectors (`#id`)                    | `b`        | `#main`, `#header`        |
| Classes (`.class`)                      | `c`        | `.btn`, `.active`         |
| Attribute selectors (`[type=...]`)      | `c`        | `[type="text"]`           |
| Pseudo-classes (`:hover`, `:nth-child`) | `c`        | `:hover`, `:checked`      |
| Type selectors (`div`, `p`)             | `d`        | `div`, `h1`, `ul`         |
| Pseudo-elements (`::before`)            | `d`        | `::after`, `::first-line` |

> ❗`:not(...)` is **not counted itself**, but its **contents are**.

---

### ✅ 3. **Write specificity as a 4-part number**

Format: **(a, b, c, d)**

---

### 🔍 Examples

#### Example 1:

```css
div#header .nav li a:hover
```

* `#header` → 1 ID → `b = 1`
* `.nav`, `:hover` → 2 class/pseudo-class → `c = 2`
* `div`, `li`, `a` → 3 elements → `d = 3`

➡️ **Specificity = (0, 1, 2, 3)**

---

#### Example 2:

```css
#main .content[data-type="info"] h2::before
```

* `#main` → 1 ID → `b = 1`
* `.content`, `[data-type="info"]` → 2 classes/attrs → `c = 2`
* `h2`, `::before` → 2 elements → `d = 2`

➡️ **Specificity = (0, 1, 2, 2)**

---

#### Example 3:

```html
<p style="color:red;">Hello</p>
```

* Inline style → `a = 1`

➡️ **Specificity = (1, 0, 0, 0)**

---

### 🧮 Comparison Rule

Compare specificity **left to right**:

* `(0,1,0,0)` beats `(0,0,10,0)`
* `(0,0,1,1)` beats `(0,0,1,0)`
* `(1,0,0,0)` beats everything except a higher `!important`
