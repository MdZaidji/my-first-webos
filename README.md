# IndianOS

> A desktop operating system that runs entirely in your browser, built from scratch using only HTML, CSS, and JavaScript.

IndianOS is my attempt to understand how desktop operating systems work by building one myself.

Instead of following a tutorial, I challenged myself to recreate the experience of a desktop environment inside the browser—from the boot screen and window manager to built-in applications and desktop interactions.

Everything is built with plain web technologies. No frameworks, no libraries, and no build tools.

---

## 🌐 Live Demo

🚀 **Try it here**

https://mdzaidji.github.io/my-first-webos/

---

## 📸 Preview

### Desktop

![Desktop](Screenshots/Devlog%20IndianOS%203.2.png)

### Boot Screen

![Boot](Screenshots/Devlog%20IndianOS%203.1.png)

### Multiple Windows

![Windows](Screenshots/Devlog%202%20IndianOS.png)

### Calculator

![Calculator](Screenshots/Devlog%20IndianOS%203.3.png)

---

# ✨ Features

### 🪟 Window Manager

- Open multiple applications simultaneously
- Draggable windows
- Active window focus handling
- Automatic z-index management
- Double-click title bar to maximize or restore
- Remember previous window size and position

### 📂 Desktop Applications

- Files
- Notes
- Calculator
- About IndianOS

### 🖥️ Desktop Experience

- Animated boot screen
- Start Menu
- Live Indian Standard Time clock
- Notification toasts
- Desktop shortcuts
- Mouse and touch support

---

# 🚀 Getting Started

Nothing to install.

1. Open the live demo.
2. Wait for the boot animation.
3. Open applications from the desktop or Start Menu.
4. Drag windows around.
5. Open multiple apps at once.

---

# 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/MdZaidji/my-first-webos.git
```

Open the project folder.

Launch:

```
index.html
```

That's it.

No installation.
No dependencies.
No build process.

---

# 💡 Why I Built This

I've always been fascinated by desktop operating systems.

When I wondered how operating systems manage windows and desktop applications, I decided not to watch a tutorial first.

Instead, I started experimenting and built my own browser-based desktop environment from scratch.

The goal wasn't to recreate Windows or Linux perfectly.

The goal was to understand the ideas behind them by building something myself.

This project taught me a lot about JavaScript, DOM manipulation, event handling, UI design, and how desktop interfaces work.

---

# ⚙️ How It Works

IndianOS is built entirely with vanilla HTML, CSS, and JavaScript.

Each application (Files, Notes, Calculator, and About) is its own independent window.

The window manager is responsible for:

- Opening applications
- Tracking the active window
- Updating z-index so the focused window stays on top
- Dragging windows with mouse and touch events
- Saving window position before maximizing
- Restoring previous size and location

Dragging works by storing the pointer's offset from the window, preventing windows from jumping when dragging begins.

Double-clicking the title bar toggles between maximized and restored states, mimicking the behavior of traditional desktop operating systems.

---

# 🧠 What I Learned

Building IndianOS helped me better understand:

- DOM manipulation
- JavaScript event handling
- CSS layouts
- Window management
- z-index stacking
- Drag-and-drop interactions
- UI state management
- Responsive interfaces
- Browser rendering

---

# 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks.
No libraries.
No build tools.

---

# 🚀 Future Plans

- [ ] Resizable windows
- [ ] Terminal application
- [ ] Browser application
- [ ] Better file explorer
- [ ] Themes
- [ ] Wallpapers
- [ ] LocalStorage support
- [ ] Keyboard shortcuts
- [ ] Right-click desktop menu
- [ ] More built-in apps

---

# 🤝 Contributing

Suggestions, bug reports, and pull requests are always welcome.

If you have an idea that could make IndianOS better, feel free to open an issue or submit a PR.

---

# 🙏 Credits

Built for the **Hack Club WebOS Mission**.

Huge thanks to Hack Club for creating challenges that encourage learning by building real projects.

---

# ⭐ Support

If you enjoyed IndianOS or found it interesting, consider giving the repository a ⭐.

It helps others discover the project and motivates me to keep improving it.

Thanks for checking it out!
