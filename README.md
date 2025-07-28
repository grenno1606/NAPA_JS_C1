# QUIZ_APP_JS

## 🎯 Challenge: Interactive & Accessible Quiz Application

This project is about building a fully interactive quiz application using **HTML**, **CSS**, and **JavaScript**, with full keyboard navigation and dark-mode support.

## 🚀 Technologies Used

- Semantic **HTML5** (`<ul>`, `<li>`, `<button>`, etc.)
- **CSS** with:
  - Clear **hover** and **focus** styles for all interactive elements
  - Dark/light theme support via CSS class toggling
- **JavaScript** for:
  - Dynamic rendering from quiz data in `localStorage`
  - Quiz flow management: question → select → submit → validate → next → result
  - **Keyboard accessibility** using:
    - Roving `tabindex` for arrow navigation
    - `Enter` / `Space` keys to trigger clicks
    - Event handlers for custom keyboard interactions
- Accessibility best practices:
  - `role="button"` with `tabindex`
  - Roving tabindex for option navigation
  - Focus outlines and visual cues

## 🎯 Goal

- Implement full quiz logic dynamically from `localStorage`
- Support **dark/light toggle**
- Ensure **keyboard-only users** can fully navigate and use the app
- Improve UI/UX with hover and focus states
- Apply best practices in JavaScript accessibility

## 📐 Design & Structure Reference

[Frontend Quiz](https://rainsaxfrontend-mentor-projects.github.io/frontend-quiz-app/)

## 📁 Project Structure

```
project-root/
├── assets/
├── scss/
├── pages/
├── css/
├── js/
└── README.md
```
