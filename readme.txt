IndianOS

I built this for the Hack Club **WebOS 1** mission. The idea was simple: could I make a small desktop operating system that runs completely in a browser using only HTML, CSS and JavaScript?
Turns out... yes. 😄
Instead of trying to copy Windows or macOS exactly, I wanted to give it its own identity, so I went with an Indian-inspired desktop and called it **IndianOS**.

What can it do?
- 🚀 Shows a boot screen before loading
- 🖥️ Desktop with app iconsxs
- 📋 Start Menu
- 🪟 Multiple draggable windows
- 📁 Files app
- 📝 Notes app
- 🧮 Calculator
- 🕒 Live IST clock
- 🔔 Notification toasts
- 🪟 Double-click a title bar to maximize or restore a window
- ℹ️ About window

Screenshots

Desktop

![Desktop](Screenshots/Devlog IndianOS 3.2.png)

Boot Screen

![Boot Screen](Screenshots/Devlog IndianOS 3.1.png)

Multiple Windows

![Windows](Screenshots/Devlog 2 IndianOS.png)    

Calculator

![Calculator](Screenshots/Devlog IndianOS 3.3.png)


The hardest part
The calculator was actually one of the easiest parts.
Getting the windows to behave like real desktop windows was much harder.
At first the windows jumped around when I dragged them because I wasn't calculating the mouse offset correctly. After fixing that, I had another issue where new windows appeared behind older ones. Learning how `z-index` works solved that problem.

Once dragging finally worked smoothly, the project started feeling like an actual desktop instead of just a webpage.


My favourite feature

The boot screen.
It's a small detail, but it makes the project feel like an operating system from the moment you open it instead of immediately showing the desktop.
I also enjoyed adding the maximize feature by double-clicking the title bar because it makes the windows feel much more natural to use.

How to try it

Open the website.
Wait a couple of seconds for the boot screen to finish.

Then try:
- opening multiple apps
- dragging windows around
- double-clicking a title bar
- checking the live clock
- opening the About window

Everything works directly in the browser.


Thanks for checking out IndianOS! 🇮🇳
