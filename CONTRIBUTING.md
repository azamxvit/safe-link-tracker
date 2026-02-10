# 🛡️ Contributing to SafeLink Tracker

First off, thanks for taking the time to contribute! 🎉

**SafeLink Tracker** is built by **Team Prompt** to make the internet a safer place. Whether you are fixing a bug in our **Next.js** web platform, optimizing the **Flutter** mobile app, or improving our phishing detection heuristics — we welcome your help!

## ⚡ Tech Stack Quick Look

Before you dive in, make sure you know what we are running under the hood:

* **Web Platform:** Next.js 15 (App Router), Tailwind CSS v4, Shadcn/ui.
* **Mobile App:** Flutter & Dart.
* **Core Logic:** TypeScript, Zod validation, and our custom Trust Score Algorithm.

---

## 🚀 How to Contribute

### 1. Fork & Clone
Fork the repo and clone it to your machine:

```bash
git clone [https://github.com/azamxvit/safe-link-tracker.git](https://github.com/azamxvit/safe-link-tracker.git)
```

### 2. Branching Strategy
We use `feature` branches. Create a branch for your specific task:

```bash
git checkout -b feat/super-secure-scanner
# or
git checkout -b fix/mobile-qr-crash
```

### 3. Development
* **Web:** Run `pnpm dev` to start the Next.js server.
* **Mobile:** Connect your device and run `flutter run`.
* **Testing:** If you touch the logic, please run `vitest` to make sure the **Trust Score** helps users, not scares them.

### 4. Commit Messages
We like clear and descriptive commits (Conventional Commits are preferred):
* `feat: add new heuristic for domain age`
* `fix: resolve layout shift on mobile dark mode`
* `docs: update readme with new team members`

### 5. Pull Request
Open a PR to the `main` branch. Describe what you did and link any relevant issues.

---

## 👥 Meet Team Prompt

This project is designed and maintained by the original hackathon squad. If you have questions about a specific part of the system, ping the right person!

| Role | Member | Contact |
| :--- | :--- | :--- |
| **Frontend & Architect** | **Azamat Omirtay** | [@azamxvit](https://github.com/azamxvit) |
| **Mobile Engineer (Flutter)** | **Zhaksylyk Bektas** | bektaszhaksylyk@gmail.com |
| **QA / Backend** | **Berik Nursultan** | isgdhre@gmail.com |
| **Mobile Engineer (Flutter)** | **Yskakova Bakyt** | Bakyttiskaak@gmail.com |

### Git Credits (Co-authors)
If you are collaborating or rebasing, we respect the hustle. Use these snippets for git credits:

```text
Co-authored-by: Berik Nursultan <isgdhre@gmail.com>
Co-authored-by: Yskakova Bakyt <Bakyttiskaak@gmail.com>
Co-authored-by: Zhaksylyk Bektas <bektaszhaksylyk@gmail.com>
```

---

## 🐛 Found a Bug?
If you found a phishing link that we missed, or a bug in the UI:
1.  Check the [Issues](https://github.com/azamxvit/safe-link-tracker/issues) tab.
2.  Open a new issue with reproduction steps.

**Let's build a safer web together! 🔒**
