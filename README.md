# 🐾 Tiny Companion

**A tiny virtual pet that lives on your website.**

Tiny Companion is an open-source JavaScript library that brings a little life to websites through interactive virtual pets.

Imagine a tiny cat living in a little house at the corner of your website. It occasionally comes out to explore, wanders across the page, jumps between elements, takes naps, watches your cursor, and reacts when you interact with it.

It doesn't serve a business purpose. It doesn't need one.

It's just a little companion that makes browsing more fun. 🐱

---

## ✨ The Idea

Tiny Companion aims to make it easy for developers to add a virtual pet to any website with minimal setup.

The companion should feel like a small living creature rather than a static widget. It should have its own little routines, movements, and personality.

### 🐈 Planned Features

- **A little home:** A tiny pet house where the companion rests when it isn't exploring.
- **Free roaming:** Walk around the website and explore the available space.
- **Element interaction:** Jump onto, sit beside, and interact with website elements.
- **Idle animations:** Sleep, stretch, stare, sit, and occasionally do absolutely nothing.
- **Cursor awareness:** Notice the cursor and occasionally interact with it.
- **Click reactions:** Respond to website interactions and explore where the user clicks.
- **Pet interaction:** Click the companion to trigger reactions, such as a little meow and speech bubble.
- **Autonomous behaviour:** Perform random activities without requiring constant user interaction.

These are the intended behaviours; implementation is currently in progress.

---

## 🎯 Design Philosophy

Tiny Companion is being built around a few principles:

- **Easy integration:** Adding a companion should require minimal configuration.
- **Framework independent:** Work with vanilla JavaScript, React, Vue, Next.js, and other web applications.
- **Lightweight:** Avoid unnecessary dependencies and keep the library efficient.
- **Non-intrusive:** The companion should never interfere with the website's actual functionality.
- **Customizable:** Allow developers to customize the companion's appearance and behaviour.
- **Extensible:** Make it possible to introduce new animals without rebuilding the entire system.

---

## 🛠️ Tech Stack

| Technology | Purpose                                  |
| ---------- | ---------------------------------------- |
| TypeScript | Core library development                 |
| Vite       | Development and production build tooling |
| HTML & CSS | Rendering and styling                    |
| Vitest     | Unit testing (planned)                   |
| Playwright | Browser interaction testing (planned)    |

---

## 🚧 Project Status

<em>Early development — not ready for production use.</em>

The project is currently in its initial setup phase.

| Area                              | Status      |
| --------------------------------- | ----------- |
| Repository and project setup      | In progress |
| TypeScript and Vite configuration | In progress |
| Companion rendering               | Planned     |
| Movement system                   | Planned     |
| Website awareness                 | Planned     |
| Behaviour system                  | Planned     |
| User interactions                 | Planned     |
| Multiple animal support           | Planned     |
| Testing and optimization          | Planned     |
| npm package release               | Planned     |

APIs, installation instructions, and usage examples will be documented as they become available.

---

## 📁 Project Goals

The long-term goal is to create a reusable library with a simple developer experience:

```ts
// Planned API — not implemented yet

import { createCompanion } from "tiny-companion";

const companion = createCompanion({
  animal: "cat",
});

companion.mount();
```

The API shown above is illustrative and may change during development.

---

## 🤝 Contributing

Contributions, ideas, suggestions, and feedback are welcome!

If you have an idea for a behaviour, animation, animal, or interaction, feel free to open an issue and discuss it.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Open a pull request with a clear description.

Please check existing issues before starting work on a major feature.

---

## 📌 Follow the Project

- **GitHub:** [Aman11b/tiny-companion](https://github.com/Aman11b/tiny-companion)
- **Issues:** [Report a bug or suggest an idea](https://github.com/Aman11b/tiny-companion/issues)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

_Sometimes a website just needs a little cat wandering around. 🐾_
