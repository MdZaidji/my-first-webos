# IndianOS 🇮🇳

A small desktop operating system that runs in the browser.

🔗 **Live Demo:** https://mdzaidji.github.io/my-first-webos/

![Desktop](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.2.png)

## Why I made this

I built IndianOS for the Hack Club WebOS 1 mission.

The tutorial showed the basics, but I wanted to keep adding my own ideas. I ended up spending most of my time making the windows feel smoother and adding small details like a boot screen and notification popups.

The part I enjoyed most was seeing it finally feel like a tiny desktop instead of just another webpage.

## What you can do

- Open Files, Notes, Calculator and About
- Drag windows around the desktop
- Open multiple windows at once
- Double-click a title bar to maximize it
- Watch the boot screen when the page loads
- See the live IST clock in the taskbar

## Screenshots

### Boot Screen

![Boot](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.1.png)

### Desktop

![Desktop](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.2.png)

### Calculator

![Calculator](https://github.com/MdZaidji/my-first-webos/blob/main/Screenshots/Devlog%20IndianOS%203.3.png)

## Something I got stuck on

The draggable windows.

At first every window jumped to the mouse cursor as soon as I clicked it. After a lot of trial and error I realized I needed to calculate the cursor offset before moving the window. I also had to learn how `z-index` works so the active window always stays on top.

That was probably the part I learned the most from.

## Run it

Clone the repository:

```bash
git clone https://github.com/MdZaidji/my-first-webos.git
```

Then open `index.html` in your browser.

That's all.
