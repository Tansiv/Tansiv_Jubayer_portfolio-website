# Tansiv Jubayer | Data, AI & Product Engineering

A responsive, single-page professional portfolio for **Tansiv Jubayer**, a data analyst and machine learning practitioner based in Dhaka, Bangladesh. The site presents selected work, research, technical capabilities, and a contact path in a polished, accessible interface.

The project is built with semantic HTML, modern CSS, and vanilla JavaScript. It has no framework, build process, or package installation requirement.

## Live experience

The portfolio includes:

- A professional header identity with a custom **TJ** monogram, prominent name, and research focus
- A headshot-led hero section with an interactive, 3D-inspired data orb
- Dynamically rendered project cards, skill groups, and category filters
- Accessible project case-study dialogs with challenge, approach, outcome, stack, and source links
- A persistent project shortlist visitors can save locally and reopen during their visit
- Research, profile, certification, and contact sections
- Light and dark themes with a saved visitor preference
- Scroll progress, section reveals, polished hover states, and reduced-motion support
- Keyboard-accessible quick navigation with Ctrl/Cmd + K
- A responsive mobile menu and layouts for phones, tablets, and desktops
- A professional multi-column footer with navigation, professional links, location, and collaboration status
- Optional asynchronous n8n form submission with loading, success, and error states
- SEO metadata, Open Graph metadata, a Person JSON-LD schema, favicon, and accessible controls

## Technology

| Area | Implementation |
| --- | --- |
| Structure | Semantic HTML5 |
| Presentation | CSS custom properties, Grid, Flexbox, gradients, transitions, media queries |
| Interactivity | Vanilla JavaScript with DOM APIs |
| Rendering | Data-driven project and technical-skill models |
| Motion | CSS animations, pointer parallax, IntersectionObserver |
| Form delivery | Mail client fallback or HTTPS n8n webhook |
| Assets | Local optimized profile photo and SVG favicon |

## Project structure

~~~text
.
|-- index.html          # Semantic page structure and metadata
|-- styles.css          # Theme tokens, layout, responsive styles, visual effects
|-- script.js           # Data models, rendering, navigation, theme, form logic
|-- assets/
|   |-- my_photo.jpg    # Optimized primary headshot used by the hero
|   |-- my_photo.png    # Original headshot source
|   '-- favicon.svg     # Browser favicon
'-- README.md
~~~

## Run locally

Because this is a static website, you can open **index.html** directly in a browser. A local server is preferred because it behaves more like a deployed website.

~~~bash
python -m http.server 8000
~~~

Open [http://localhost:8000](http://localhost:8000) in your browser.

Other static servers work as well, including the VS Code Live Server extension, Node.js **serve**, or a local web-server tool of your choice.

## Content architecture

Most recurring content is managed in **script.js**, so projects and skills can be updated without manually duplicating card markup in **index.html**.

| Data model | Purpose |
| --- | --- |
| PROJECT_CATEGORIES | Filter options for the selected-work section |
| PROJECTS | Project titles, descriptions, categories, stack, links, and impact metrics |
| SKILL_GROUPS | Categorized technical capabilities |
| COMMANDS | Quick-navigation destinations and labels |

The render functions create DOM elements with the platform APIs instead of injecting HTML strings. This keeps the data rendering readable and avoids unsafe HTML insertion.

## Personalize the portfolio

### Update text and links

- Update hero copy, research, profile, and contact content in **index.html**.
- Update project and technical-skill data at the top of **script.js**.
- Update professional URLs in the header, contact section, footer, and JSON-LD schema together.
- Keep claims, metrics, publications, and project links accurate before publishing.

### Update the profile photo

The primary hero image is:

~~~text
assets/my_photo.jpg
~~~

Replace this file with a square, well-lit portrait. Preserve the filename or update the image path in **index.html**. The width, height, eager-loading, async decoding, and high-priority settings are intentional for a stable, fast hero layout.

### Update the visual system

Core color, typography, and layout values live in the **:root** block in **styles.css**.

- --bg, --surface, and --surface2 control the dark visual layers.
- --text, --muted, and --line control readable text and boundaries.
- --accent, --accent2, and --pink control the highlight system.
- --max controls the main content width.

The existing theme toggle overrides these properties through the **body.light** class.

## Contact form and n8n integration

The contact form validates name, email, and message length in the browser. It provides inline field errors and accessible status messages.

### Default behavior

**N8N_WEBHOOK_URL** is empty by default. In this state, a successful form submission opens a prepared email draft addressed to:

~~~text
jtansiv@gmail.com
~~~

This works without a database or backend, although visitors need a configured email application.

### Enable n8n delivery

1. Create an n8n workflow with a **Webhook** trigger that accepts POST.
2. Configure the workflow to receive JSON and add your preferred processing steps, such as sending an email, saving a record, or creating a notification.
3. Activate the workflow and copy its **production** webhook URL.
4. In **script.js**, set the value below to that HTTPS URL:

~~~js
const N8N_WEBHOOK_URL = '';
~~~

5. Allow your deployed portfolio domain through the webhook's CORS configuration.
6. Return a successful HTTP response when the message is accepted.

The request body contains:

~~~json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "topic": "Selected topic",
  "message": "Visitor message",
  "source": "personal-portfolio",
  "submittedAt": "ISO-8601 timestamp"
}
~~~

The interface disables the button while sending, aborts the request after 15 seconds, and restores the form state on success or failure.

### Production guidance

Do not store credentials, tokens, or private keys in **script.js**. A client-side webhook URL is publicly visible. Configure rate limiting, spam protection, server-side validation, and a protected intermediary endpoint if the workflow handles sensitive activity.

## Deployment

This is a static site. Deploy the project folder without a build command.

### GitHub Pages

1. Create a GitHub repository and place these files at its root.
2. Push the project to the **main** branch.
3. In the repository, open **Settings** > **Pages**.
4. Select **Deploy from a branch**.
5. Select the **main** branch and the **/(root)** folder, then save.
6. After deployment, verify every external link, the headshot, the form flow, and mobile navigation on the published domain.

### Other hosts

Netlify, Cloudflare Pages, Vercel, Render Static Sites, and similar hosts can serve the directory directly. Set the publish directory to the project root and leave build settings empty.

## Accessibility and performance

- Semantic landmarks provide clear page structure.
- A skip link lets keyboard users bypass repeated navigation.
- Buttons and navigation controls include accessible names and state attributes.
- The quick-navigation dialog supports keyboard search, arrow navigation, Enter, and Escape.
- Motion is reduced for visitors who enable **prefers-reduced-motion**.
- The profile image has an explicit size to reduce layout shift.
- Scroll and pointer effects use requestAnimationFrame or passive listeners where appropriate.
- Theme preference is saved locally when browser storage is available.

## Pre-publish checklist

- [ ] Confirm name, role, email, and professional links.
- [ ] Check every project URL, publication statement, metric, and skill.
- [ ] Replace or confirm the headshot in **assets/my_photo.jpg**.
- [ ] Add the live n8n production webhook URL, or keep the email fallback.
- [ ] Configure CORS and anti-spam measures before enabling webhook delivery.
- [ ] Test keyboard navigation, quick navigation, theme switching, filters, and the contact form.
- [ ] Test at phone, tablet, laptop, and wide-screen sizes.
- [ ] Review title, description, Open Graph metadata, and the JSON-LD profile URL.
- [ ] Add a custom domain and analytics only when they are ready to be maintained.

## License

This portfolio contains personal identity, professional history, and project material. Reuse the code only with appropriate attribution, and do not reuse the personal content, name, image, or claims without permission.
