# A Little Letter For You ♡
### An Interactive Digital Apology Experience

> *"I have taken you for granted, but you are one of the most important people who have come into my life. I'm genuinely sorry."*

An interactive digital apology experience designed as a handwritten personal letter and vintage romantic scrapbook. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

---

## ✨ Features & The Experience

- **The Vintage Envelope (Screen 1)**:
  - Ambient warm ivory glow, floating rose petals, and subtle low-opacity hearts.
  - Centered vintage envelope with a 3D flap, cream stationery paper, and a burgundy wax seal with an embossed heart.
  - Interactive unfold sequence: click the seal or "Open your letter ♡" button to watch the seal fade, the flap open in 3D perspective, and the letter glide gracefully out of the pocket.
- **The First Letter (Screen 2)**:
  - Textured parchment stationery with deckled double-line borders, postmarks, and corner botanical flourishes.
  - Handwritten salutation and honest reflections on taking someone's presence for granted.
  - Smooth page-turn transition to the centerpiece.
- **The Heart of the Apology (Screen 3)**:
  - The emotional center of the letter.
  - Typographic highlights in Cormorant Garamond:
    - *"I have taken you for granted."*
    - *"You are one of the most important people who have come into my life."*
    - *"I genuinely want to do better."*
  - Progressive paragraph reveals and sincere, excuse-free accountability.
- **A Little Reminder (Screen 4)**:
  - Vintage scrapbook spread with three physically tilted stationery cards pinned with washi tape.
  - Custom hand-drawn botanical blossom, decorative heart, and star SVG illustrations.
  - Gentle hover physics, rotation, and mobile-friendly vertical stacking.
- **The Final Letter & Little Hug (Screen 5 & Final Modal)**:
  - Poignant closing message acknowledging that an apology website does not erase hurt, and confirming that her feelings are 100% valid.
  - Climax statement in large, beautiful typography: *"You're one of the most beautiful things life brought my way. And I'm really sorry I made you feel otherwise."*
  - Dancing Script signature: *"With love and sincerity, Someone who genuinely cares. ♡"*
  - **"Sending you a little hug ♡"**: Triggers an ambient warm glow, a burst of soft rose petals and hearts (`canvas-confetti`), and reveals a quiet, pressure-free reassurance note (*"Take your time. No pressure, no expectations. I just hope you know how much you mean to me."*).
- **Offline Ambient Melody**:
  - Discreet sound toggle in the top-right corner.
  - Synthesizes a soothing music-box / acoustic piano arpeggio using the Web Audio API.
  - 100% offline, zero external audio assets or network requests, and starts muted by default so it never intrudes.

---

## 🎨 Design System

| Element | Specification |
| :--- | :--- |
| **Primary Background** | `#FFF9F4` (Warm Alabaster/Ivory) |
| **Secondary Background** | `#F9EEE8` (Soft Linen Cream) |
| **Blush Pink** | `#EBD2D0` |
| **Muted Rose** | `#C58D91` |
| **Deep Burgundy** | `#794A50` |
| **Main Text** | `#443438` (High contrast, deep espresso rose) |
| **Secondary Text** | `#8B7777` (Muted warm taupe) |
| **Paper Color** | `#FFFCF8` (Parchment white) |
| **Typography** | Cormorant Garamond, Playfair Display, DM Sans, Dancing Script |

---

## 🛠 Tech Stack

- **React.js** (v19)
- **Vite** (v8)
- **JavaScript** (ESM)
- **Tailwind CSS** (v4 with `@tailwindcss/vite`)
- **Framer Motion** (v14)
- **Canvas-Confetti**
- **Lucide React**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

```bash
# Clone or navigate to the repository
cd Moti

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
# Build the production-ready static site
npm run build

# Preview the production build locally
npm run preview
```

The compiled output will be generated in the `dist/` directory, ready to deploy directly to **Vercel**, **Netlify**, or **GitHub Pages**.
