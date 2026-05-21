# 🧩 Student Grade Tracker

A beginner JavaScript web application that tracks student names and grades, calculates the class average, and dynamically updates the UI — built with vanilla HTML, CSS, and JavaScript.

---

## 📋 Project Overview

This project was built as a JavaScript assessment to demonstrate understanding of core web development concepts including data structures, DOM manipulation, and event handling. No frameworks or libraries were used — just pure HTML, CSS, and JavaScript.

---

## ✨ Features

- ➕ **Add students** with their name and grade
- 📋 **Display student list** dynamically on the page
- 🧮 **Calculate and update** the class average grade automatically
- 🗑️ **Delete students** from the list with instant UI update
- 🟦 **Highlight above-average students** automatically in teal
- ✅ **Input validation** — catches empty names and invalid grades
- 💾 **localStorage support** — data persists after page refresh

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML | Page structure and layout |
| CSS | Styling and visual design |
| JavaScript | Logic, DOM manipulation, event handling |
| localStorage | Client-side data persistence |

---

## 💡 JavaScript Concepts Demonstrated

- **Arrays** — storing a list of student objects
- **Objects** — structuring student data as `{ id, name, grade }`
- **DOM Manipulation** — creating, updating, and removing elements dynamically
- **Event Handling** — responding to button clicks using `addEventListener`
- **Input Validation** — checking for empty fields and out-of-range values
- **Array Methods** — `.push()`, `.forEach()`, `.findIndex()`, `.splice()`
- **localStorage** — saving and loading data using `JSON.stringify` and `JSON.parse`

---

## 🚀 How to Use

1. Clone or download this repository
2. Open `index.html` in your browser
3. Type a student name and grade into the input fields
4. Click **Add Student** to add them to the list
5. Students scoring above the class average will be highlighted in teal
6. Click **Remove** next to any student to delete them
7. The average grade updates automatically with every change

---

## 📁 Project Structure

```
Student-grade-tracker/
│
├── index.html       # Main HTML structure
├── style.css        # All styling and layout
└── script.js        # JavaScript logic
```

---

## 🖥️ Preview

> Add a student name and grade → click Add Student → watch the list and average update instantly!

---

## 📌 Validation Rules

- Student name **must not be empty**
- Grade must be a **number between 0 and 100**
- An error message is displayed for any invalid input

---

## 👩‍💻 Author

**Estrella Dale**
GitHub: [@estrelladale82-cyber](https://github.com/estrelladale82-cyber)

---

## 📄 License

This project is open source and available for learning purposes.
