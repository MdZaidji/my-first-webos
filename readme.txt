💡 Why IndianOS?

Most WebOS projects look similar, so I wanted mine to have its own identity.

Instead of copying an existing operating system, I gave it an Indian-inspired theme and focused on building the core experience of using a desktop inside a web browser.

🛠️ What I built

The desktop currently includes:

🚀 Boot Screen
🖥️ Desktop Interface
📋 Start Menu
🪟 Multiple Draggable Windows
📁 Files
📝 Notes
🧮 Calculator
🕒 Live IST Clock
🔔 Notification Toasts
🪟 Double-click to Maximize Windows
ℹ️ About IndianOS

Everything runs completely in the browser using only HTML, CSS, and JavaScript.

🧠 The hardest part

Getting the draggable windows to feel natural took the most time.

At first, windows would jump around while dragging and sometimes overlap incorrectly. I had to learn how mouse events work (mousedown, mousemove, and mouseup) and use z-index so the active window always stays on top.

That was probably the biggest thing I learned while making this project.

🎮 Try it!

When you open the project:

* Wait for the boot screen.
* Open apps from the desktop or Start Menu.
* Drag multiple windows around.
* Double-click a title bar to maximize a window.
* Open the About window to see project information.

📂 Project Structure

IndianOS/
├── index.html
├── style.css
├── script.js
└── assets/

I intentionally kept everything simple so I could understand every line of code.
