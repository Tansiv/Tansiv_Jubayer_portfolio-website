<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C8962C&height=200&section=header&text=Tansiv%20Jubayer&fontSize=60&fontColor=F2EAD3&fontAlignY=38&desc=Portfolio%20Website&descAlignY=58&descSize=22&animation=fadeIn" width="100%"/>

<!-- Typing Animation -->
<a href="https://github.com/Tansiv/Tansiv_Jubayer_portfolio-website">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=C8962C&center=true&vCenter=true&width=700&lines=Data+Analyst+%7C+AI+Professional;Computer+Science+Engineer;Published+in+Springer+%26+IEEE;Open+to+Industry+%7C+PhD+%7C+Research" alt="Typing SVG" />
</a>

<br/>

<!-- Profile Views + Stars + Forks -->
<img src="https://komarev.com/ghpvc/?username=Tansiv&style=for-the-badge&color=C8962C&label=Profile+Views" alt="profile views"/>
&nbsp;
<img src="https://img.shields.io/github/stars/Tansiv/Tansiv_Jubayer_portfolio-website?style=for-the-badge&color=C8962C&labelColor=0A0A0A" alt="stars"/>
&nbsp;
<img src="https://img.shields.io/github/forks/Tansiv/Tansiv_Jubayer_portfolio-website?style=for-the-badge&color=E8B84B&labelColor=0A0A0A" alt="forks"/>

</div>

---

<div align="center">

## 🌐 Live Preview

### 🔗 [**tansiv.github.io/Tansiv_Jubayer_portfolio-website**](https://tansiv.github.io/Tansiv_Jubayer_portfolio-website/)

_A fully responsive, dark-themed single-page portfolio — built with pure HTML, CSS & JS._

</div>

---

## ✨ What's Inside

```
Tansiv_Jubayer_portfolio-website/
│
├── 📄 index.html          → Single-file portfolio (all CSS + JS inline)
├── 📁 assets/
│   ├── 🖼️  Tansiv_Jubayer.jpg   → Profile photo
│   └── 📄 cv.pdf                → Downloadable CV
└── 📖 README.md           → You are here
```

---

## 🎨 Design Highlights

<div align="center">

| Feature | Detail |
|---|---|
| 🎨 **Theme** | Dark luxury — Black `#0A0A0A` + Gold `#C8962C` |
| 🔤 **Fonts** | Playfair Display · DM Sans · JetBrains Mono |
| 📱 **Responsive** | Mobile, Tablet & Desktop — full breakpoint coverage |
| ⚡ **Performance** | Zero dependencies · No build step · ~1 file |
| ♿ **Accessible** | Semantic HTML5 · ARIA-friendly · Keyboard navigable |

</div>

---

## 🗂️ Sections at a Glance

```
🏠  Hero          →  Name, title, stats, social links, profile photo
👤  About         →  Bio, career objective, team profile
🛠️  Skills        →  Programming, ML/DL, Data Analysis, Research Methods
📚  Research      →  4 peer-reviewed publications (Springer + IEEE)
🎓  Education     →  EWU B.Sc. CSE · Ideal College · Motijheel Model
🏆  Certifications →  Springer/IEEE authorship · Ostad · Simplilearn
✍️  Blog          →  Coming-soon articles on AI & Data Science
📊  Impact        →  Bento grid — 98.46% accuracy · 40% efficiency gain
🤝  References    →  3 faculty letters — EWU Dept. of CSE
📬  Contact       →  Email · Phone · LinkedIn · GitHub · Scholar
```

---

## 🚀 Animations & Interactions

<div align="center">

| Animation | Where |
|---|---|
| 🌀 **Rotating gradient ring** | Profile photo border |
| 💛 **Glow pulse** | Profile image halo |
| 🔢 **Counting numbers** | Hero stats (0 → target on scroll) |
| 📊 **Skill bars** | Proficiency section — fills on scroll |
| 🃏 **Reveal on scroll** | Every card & section fades in |
| 🍃 **Floating icons** | Highlight card icons |
| 🔵 **Pulse dot** | "Available" availability badge |
| 🖱️ **Hover lifts** | Cards, buttons, nav links |
| 📈 **Progress bar** | Top scroll indicator |

</div>

---

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

> **Zero frameworks. Zero build tools. Zero npm.** Just one polished HTML file — open it and it works.

---

## 📦 Deploy in 60 Seconds

### GitHub Pages (Recommended)

```bash
# 1. Fork or clone this repository
git clone https://github.com/Tansiv/Tansiv_Jubayer_portfolio-website.git

# 2. Go to Settings → Pages → Source: main / root
# 3. Your site is live at:
#    https://tansiv.github.io/Tansiv_Jubayer_portfolio-website/
```

### Local Preview

```bash
# Option A — Python
python -m http.server 8000
# Then open: http://localhost:8000

# Option B — VS Code
# Install "Live Server" extension → Right-click index.html → Open with Live Server
```

---

## 🖼️ Customise Your Photo

Open `index.html` and update the `src` on line ~265:

```html
<!-- Replace with your photo path or URL -->
<img id="profileImg" src="assets/YOUR_PHOTO.jpg" ... />
```

Or click the profile circle in the browser — an upload overlay appears on hover.

---

## 📄 Add Your CV PDF

1. Place your PDF in the `assets/` folder
2. Open `index.html` and find the `RESUME_PDF_PATH` variable (~line 640):

```js
const RESUME_PDF_PATH = "assets/YOUR_CV.pdf";   // ← update this
```

> If left as `null`, the "Download CV" button auto-generates an ATS plain-text version.

---

## 📚 My Publications

| # | Title | Venue | Year |
|---|---|---|---|
| 1 | Detection of Sugarcane Leaf Diseases Using Custom CNN & ResNet50 | Springer LNNS (ICIDA 2024) | 2025 |
| 2 | Earthquake Magnitude Prediction: A Survey | Springer LNNS (ICIDA 2024) | 2025 |
| 3 | REMP: Swin Transformer for Rare Medicinal Plants — **98.46% acc.** | IEEE ICQPAI 2025 | 2025 |
| 4 | Comparative Forecasting of Sustainable Energy in Bangladesh *(Lead)* | IEEE COMPAS 2025 | 2025 |

---

## 📬 Connect With Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-jtansiv%40gmail.com-C8962C?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jtansiv@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tansiv_Jubayer-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tansiv-jubayer-390081348/)
[![GitHub](https://img.shields.io/badge/GitHub-Tansiv-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Tansiv)
[![ResearchGate](https://img.shields.io/badge/ResearchGate-Tansiv_Jubayer-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white)](https://www.researchgate.net/profile/Tansiv-Jubayer)
[![Google Scholar](https://img.shields.io/badge/Google_Scholar-Tansiv_Jubayer-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=Z-1vaD8AAAAJ)

📍 Dhaka, Bangladesh · **Open to Relocation** · Available Immediately

</div>

---

## 📜 License

```
MIT License — free to use, modify, and distribute with attribution.
© 2025 Tansiv Jubayer
```

---

<div align="center">

<!-- Footer wave -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C8962C&height=120&section=footer&animation=fadeIn" width="100%"/>

_Made with ❤️ and a lot of ☕ — Dhaka, Bangladesh_

**⭐ Star this repo if you found it useful!**

</div>