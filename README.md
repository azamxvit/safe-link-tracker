# 🛡️ SafeLink Tracker

![Status](https://img.shields.io/badge/status-active-success)
![Tech](https://img.shields.io/badge/stack-Next.js_15_|_TypeScript_|_Tailwind_v4-blue)
![Mobile](https://img.shields.io/badge/mobile-Flutter_Companion_App-02569B)

**SafeLink Tracker** is a comprehensive anti-phishing ecosystem designed to protect users from malicious URLs in real-time. It combines a high-performance **Next.js Web Platform** with a cross-platform **Flutter Mobile App**, using heuristic analysis and domain age verification to calculate a "Trust Score" for any link.

> **Live Demo:** [https://safe-link-tracker.vercel.app](https://safe-link-tracker.vercel.app) (Replace with actual Vercel link if available)

## 🚀 Key Features

* **Heuristic Phishing Detection**: Analyzes URLs for suspicious patterns, keywords (e.g., "secure", "bonus"), and structure.
* **Domain Age Intelligence**: Simulates WHOIS lookups to flag "fresh" domains (less than 14 days old) as high-risk.
* **Trust Score Algorithm**: distinct scoring system (0-100) providing granular risk assessment rather than binary "Safe/Unsafe" results.
* **Modern Design System**: Built with **Tailwind CSS v4** and **Shadcn/ui**, featuring a glassmorphism aesthetic and seamless Dark/Light mode.
* **Cross-Platform Ecosystem**:
    * **Web**: Next.js App Router for instant checks.
    * **Mobile**: Companion Flutter app for checking links on the go (QR scanner & Share intent).

## 🛠 Tech Stack

### Web Platform (This Repository)
* **Framework**: Next.js 15 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4, CSS Variables, `clsx`
* **Components**: Shadcn/ui (Radix Primitives)
* **Icons**: Lucide React
* **Validation**: Zod
* **Testing**: Vitest

### Mobile (Companion App)
* **Framework**: Flutter
* **Language**: Dart
* **Networking**: HTTP (communicates with Next.js API Routes)

## 🏗 Architecture

The project follows a **Feature-Sliced** inspired architecture to ensure scalability:

* **`app/api/check-url`**: Acts as a Serverless Backend. It processes requests from both the Web Frontend and the Mobile App.
* **`features/link-checker`**: Encapsulates all domain logic (API calls, React Query hooks, UI components specific to link checking).
* **`components/ui`**: Reusable "dumb" components (Buttons, Cards, Inputs) based on the Design System.
* **`lib/utils`**: Core utilities including strictly typed error handling and class merging.

## ⚙️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/azamxvit/safe-link-tracker.git](https://github.com/azamxvit/safe-link-tracker.git)
    cd safe-link-tracker
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    # or npm install
    ```

3.  **Start the development server**
    ```bash
    pnpm dev
    ```

4.  **Open the application**
    * Visit `http://localhost:3000` to see the Web Interface.
    * The API endpoint will be available at `http://localhost:3000/api/check-url`.

## 👥 Team Prompt

This project was designed and developed during the Hackathon by **Team Prompt**.

| Contributor | Role | GitHub / Contact |
| :--- | :--- | :--- |
| **Azamat Omirtay** | Frontend Engineer & Architect | [@azamxvit](https://github.com/azamxvit) |
| **Zhaksylyk Bektas** | Mobile Engineer (Flutter) | [bektaszhaksylyk@gmail.com](mailto:bektaszhaksylyk@gmail.com) |
| **Berik Nursultan** | QA Engineer / Backend Developer | [isgdhre@gmail.com](mailto:isgdhre@gmail.com) |
| **Yskakova Bakyt** | Mobile Engineer (Flutter) | [Bakyttiskaak@gmail.com](mailto:Bakyttiskaak@gmail.com) |

---
*Built with ❤️ for a safer internet.*
