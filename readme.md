# The Ledger

**Accounting for a Life Well-Spent.**

The Ledger is a minimal, local-first task management system designed as a digital evolution of analog index-card workflows. It was vibe-coded primarily for my personal needs as a professor, seeking to bridge the gap between the tactile clarity of paper and the convenience of a mobile device.

It was also a test drive of using Gemini to design a functional web app. Basically everything in this repo was generated that way as a test and to learn how to do it. Ironically, I do use this every day now to track my tasks, and I've been pleased with the outcome. 

Unlike traditional productivity tools that treat tasks as a never-ending stream, The Ledger treats them as an account of your responsibilities. It is built to encourage stewardship of time rather than just getting things done.

## The Philosophy

The mechanics of The Ledger are intentionally built with productive friction. It reproduces the limitations of physical systems like the [Ugmonk Analog](https://ugmonk.com/pages/analog) and traditional **Dash-Plus** notation. 

By limiting daily space and requiring a manual reconciliation at the end of each day, the app forces you to audit your progress and make intentional decisions about how to spend your most finite capital: time.

## Key Features

* **Non-Binary Progress:** Not every task is a simple checkbox. Deep work often requires multiple sessions. The Ledger utilizes a **stacked tally system (dots)** to track iterative progress visually.
* **Midnight Reconciliation:** The app enforces a "close the books" workflow. At midnight, your day is committed. Finished tasks are archived; unfinished work is carried forward as a liability.
* **Protocol-Based Priority:** The interface is divided into three functional cards:
    * **Today:** Your immediate investment.
    * **Next:** Active priorities waiting in the wings.
    * **Someday:** Future speculation and long-term ideas.

## Data Governance & Portability

The Ledger is designed with absolute data sovereignty in mind. 

* **Local Storage:** All your tasks, tallies, and history are stored directly in your browser's `localStorage`. Your data never touches a server, and there are no accounts to manage.
* **Exporting History:** You can export your entire ledger history at any time. The app provides a one-click export to **JSON** (for backup/importing to other devices) or **Markdown** (for a human-readable archive of your completed work).
* **Portability:** Because it uses standard web formats, you own your data. You can "close your account" simply by clearing your browser cache, but only after you've safely exported your history to your personal files.

## Technical Implementation (PWA)

The Ledger is a **Progressive Web App (PWA)** built with Node.js, HTML, CSS, and JavaScript. 

* **Local-First:** It functions entirely client-side.
* **Offline Capable:** Once loaded, it can be used without an internet connection.
* **Mobile-First:** Designed with a responsive, "stacking card" UI that feels natural on a phone but struggles on larger screens. It was opinionated toward a phone that mimics the size of an index card. You carry your phone everywhere as well. 
* **Zero-Footprint:** No database setup is required. It is designed to be hosted on simple static hosting like GitHub Pages, as is the case here.

## How to Use

1.  **Add Tasks:** Enter your responsibilities into the "Today" or "Next" cards.
2.  **Track Effort:** Click a task to cycle through its status (Incomplete → In Progress → Complete). For tasks requiring multiple sessions, use the tally dots to account for each unit of effort.
3.  **Audit & Move:** Use the protocol menu (three dots) to move tasks between your "Today," "Next," and "Someday" accounts.
4.  **Close the Books:** At the end of your day, click **Commit Day**. This clears the slate and prepares your balance sheet for the next morning.

## Limitations & Intentional Constraints

* **No Reminders/Notifications:** This app does not "ping" you. It requires your active presence and attention.
* **No Syncing:** Because it uses `localStorage`, your tasks are tied to the specific browser and device where you entered them.
* **Finite Space:** The UI is designed to hold a manageable amount of work. If your list is too long to see, you are likely over-leveraged.

## License

This project is released under the **MIT License**. It is free to use and modify for personal purposes.

---
*Created by Keelan Cook. For more information on the philosophy behind this project, visit [keelancook.com](https://keelancook.com/ledger-app/).*
