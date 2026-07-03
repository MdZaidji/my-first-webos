IndianOS

I built this project for the **Hack Club WebOS 1** mission.

The idea was simple: **Could I build a small desktop operating system that runs completely in a browser using only HTML, CSS, and JavaScript?**

Turns out... yes. 😄

Instead of trying to copy Windows or macOS exactly, I wanted to give it its own identity, so I created an Indian-inspired desktop and named it **IndianOS**.

---

## ✨ What can it do?

- 🚀 Boot Screen
- 🖥️ Desktop with app icons
- 📋 Start Menu
- 🪟 Multiple draggable windows
- 📁 Files app
- 📝 Notes app
- 🧮 Calculator
- 🕒 Live IST Clock
- 🔔 Notification Toasts
- 🪟 Double-click a title bar to maximize or restore a window
- ℹ️ About IndianOS window

---

# 📸 Screenshots

## 🖥️ Desktop

![Desktop](Screenshots/Devlog%20IndianOS%203.2.png)

## 🚀 Boot Screen

![Boot Screen](Screenshots/Devlog%20IndianOS%203.1.png)

## 🪟 Multiple Windows

![Multiple Windows](Screenshots/Devlog%202%20IndianOS.png)

## 🧮 Calculator

![Calculator](Screenshots/Devlog%20IndianOS%203.3.png)

---

# 💻 The hardest part

The calculator was actually one of the easiest parts to build.

Getting the windows to behave like real desktop windows was much harder.

At first, the windows jumped around while dragging because I wasn't calculating the mouse offset correctly. After fixing that, I had another issue where newly opened windows appeared behind older ones. Learning how `z-index` works helped me solve that problem.

Once dragging finally worked smoothly, the project started feeling like an actual desktop instead of just another webpage.

---

# ⭐ My favourite feature

My favourite feature is the **Boot Screen**.

It's a small detail, but it makes the project feel like an operating system from the moment you open it instead of immediately showing the desktop.

I also enjoyed adding the **double-click to maximize** feature because it makes the windows feel much more natural to use.

---

# 🎮 How to try it

1. Open the website.
2. Wait a couple of seconds for the boot screen to finish.
3. Open apps from the desktop or the Start Menu.
4. Drag multiple windows around the desktop.
5. Double-click a window's title bar to maximize or restore it.
6. Check the live IST clock.
7. Open the **About IndianOS** window.

Everything works directly in the browser—no login or installation is required.

---

# 🙌 Thanks

Thanks for checking out **IndianOS**!

I built this project to learn more about JavaScript, DOM manipulation, and how desktop interfaces work. It was a fun challenge, and I learned a lot while building it.

If you have any suggestions or ideas, feel free to open an issue or share your feedback!
