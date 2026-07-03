# IndianOS

A browser-based desktop operating system inspired by India, built with HTML, CSS and JavaScript.

![Desktop](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.2.png)

## 🌐 Live Demo

**Try it here:** https://mdzaidji.github.io/my-first-webos/

---

## 🚀 Quick Start

Nothing to install.

1. Open the live demo.
2. Wait for the boot screen to finish.
3. Click any desktop icon or use the Start Menu.
4. Open multiple apps and drag them around.

---

## ✨ Features

- Multiple draggable windows
- Start Menu
- Files app
- Notes app
- Calculator
- Boot screen animation
- Live IST clock
- Notification toasts
- Double-click title bar to maximize/restore windows
- About IndianOS window

---

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/MdZaidji/my-first-webos.git
```

Open the project folder and launch **index.html** in your browser.

No build tools, frameworks, or dependencies are required.

---

## 🤔 How it Works

I wanted to understand how desktop operating systems manage windows, so instead of watching tutorials on the topic, I tried building one.

Each application (Files, Notes, Calculator, and About) is its own draggable window. When a window is opened, JavaScript updates its `z-index` so it always appears above the others. Dragging works by tracking the mouse position during `mousedown`, `mousemove`, and `mouseup` events.

One feature I'm particularly happy with is maximizing a window by double-clicking its title bar. It makes the desktop feel much closer to a real operating system while still being built entirely with vanilla JavaScript.

---

## 📸 More Screenshots

### Boot Screen

![Boot](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.1.png)

### Multiple Windows

![Windows](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%202%20IndianOS.png)

### Calculator

![Calculator](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.3.png)

---

## 🙏 Credits

- Created for the **Hack Club WebOS 1 Mission**
- Thanks to Hack Club for designing the WebOS missions that inspired me to build this project.
