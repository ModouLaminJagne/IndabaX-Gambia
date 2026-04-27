# IndabaX Gambia 2026

The official website for **IndabaX Gambia 2026** - a premier machine learning and AI event bringing together the local and regional tech community.

---

## 📋 Overview

IndabaX Gambia 2026 is a static single-page website built with HTML, CSS, and JavaScript. It showcases the event's program, speakers, hackathon details, and provides registration and poster submission options for participants.

**Event Details:**

- **Edition:** 2026
- **Location:** The Gambia
- **Dates:** To be announced
- **Focus:** Machine Learning, Artificial Intelligence, and Tech Community Building

---

## 🏗️ Project Structure

```

IndabaX-Gambia/
├── index.html                 # Main website (all sections)
├── css/                       # Styling
│   ├── home.css              # Hero/landing section
│   ├── navbar.css            # Navigation bar
│   ├── about_css.css         # About section
│   ├── hackathon.css         # Hackathon section
│   ├── poster.css            # Poster session section
│   ├── program.css           # Program/schedule section
│   ├── speakers.css          # Speaker cards
│   ├── partners.css          # Partners section
│   ├── location_css.css      # Location section
│   ├── footer.css            # Footer
│   ├── fullsite.css          # Alternative bundled CSS (unused)
│   └── registration.css      # Registration styles
├── js/                        # JavaScript functionality
│   ├── navbar.js             # Navigation interactions
│   ├── footer.js             # Footer functionality
│   ├── registration.js       # Registration & poster gating logic
│   ├── hackathon.js          # Hackathon countdown timer
│   ├── last_edition.js       # Previous edition carousel
│   ├── speakers.js           # Speaker card interactions
│   ├── program.js            # Program timeline
│   ├── poster.js             # Poster session features
│   ├── partners.js           # Partners section
│   ├── landing.js            # Landing page animations
│   ├── script.js             # Global utilities
│   ├── fullsite.js           # Alternative bundled JS (unused)
│   └── hackathon.js          # Event countdown
├── assets/                    # Media files
│   ├── speakers_photos/      # Speaker profile pictures
│   ├── previous_year_edition/ # Gallery from past editions
│   └── [other images]        # Logos, backgrounds, icons
├── CONFIGURATION_GUIDE.md    # Setup and deployment instructions
├── CONFIGURATION_GUIDE.md    # Technical setup guide
├── LICENSE                   # License information
└── README.md                 # This file
```

---

## 🎨 Website Sections

### 1. **Hero/Home**

- Eye-catching landing section with event branding
- Event tagline and call-to-action buttons
- Background imagery and animations

### 2. **About IndabaX Gambia**

- Mission and vision for the 2026 edition
- Community focus and event objectives
- Sponsor logos

### 3. **Hackathon**

- Countdown timer (configurable via HTML data attribute)
- Hackathon details and format
- "Dates to be announced" when not configured

### 4. **Poster Session**

- Poster submission information
- Call for presentations
- FAQ section with submission details

### 5. **Program/Schedule**

- Day-by-day event timeline
- Session information and timings
- Track details

### 6. **Speakers**

- Speaker profile cards with photos
- Speaker biographies and titles
- Social media links (LinkedIn)

### 7. **Partners**

- Sponsorship and partnership information
- Partner logos and branding

### 8. **Location**

- Event venue information
- Map integration
- Travel and logistics details

### 9. **Footer**

- Quick links
- Social media
- Copyright and credits

---

## 🔧 Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **UI Library:** Bootstrap 5.3.3
- **Icons:** Font Awesome (6.5.1), Boxicons
- **Animations:** GSAP (GreenSock Animation Platform) with ScrollTrigger & ScrollToPlugin
- **Hosting:** Static hosting (GitHub Pages, Netlify, etc.)
- **No Build Tooling:** Plain HTML/CSS/JS (no webpack, npm, or frameworks required)

---

## ⚙️ Configuration

The website is pre-configured for IndabaX Gambia 2026 with safe defaults. To customize event details, follow the **[CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)**.

### Key Configuration Points

1. **Hackathon Countdown Date** (index.html, line 214)

   ```html
   <section id="AboutHackathon" data-hackathon-start="2026-05-03T09:00:00Z">
   ```

2. **Registration Link** (js/registration.js, line 36)

   ```javascript
   const registrationLink = "https://forms.gle/YOUR_LINK";
   ```

3. **Poster Submission Link** (js/registration.js, line 37)

   ```javascript
   const posterLink = "https://forms.gle/YOUR_LINK";
   ```

4. **Registration Date Windows** (js/registration.js, lines 39-42)

   ```javascript
   const registrationOpen = new Date(2026, 3, 15);
   const registrationDeadline = new Date(2026, 4, 30, 23, 59, 59);
   ```

See **[CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)** for detailed instructions.

---

## 🚀 Quick Start

### View Locally

1. Clone the repository

   ```bash
   git clone https://github.com/ModouLaminJagne/IndabaX-Gambia.git
   cd IndabaX-Gambia
   ```

2. Open in browser

   ```bash
   # Using Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Or simply double-click index.html in file explorer
   ```

### Deploy

1. Configure event details (see CONFIGURATION_GUIDE.md)
2. Push to GitHub

   ```bash
   git add .
   git commit -m "Configure event details for 2026"
   git push origin main
   ```

3. Enable GitHub Pages in repository settings
4. Site will be live at: `https://ModouLaminJagne.github.io/IndabaX-Gambia/`

---

## 📝 Features

✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Smooth Animations** - GSAP-powered scroll effects  
✅ **Speaker Management** - Dynamic speaker card system  
✅ **Event Countdown** - Configurable hackathon timer  
✅ **Registration Gating** - Safe "coming soon" defaults  
✅ **Previous Edition Gallery** - Carousel of past event photos  
✅ **Social Media Integration** - LinkedIn links for speakers  
✅ **Accessibility** - Semantic HTML and ARIA labels  

---

## 📋 Content Management

### Update Speaker Information

- Edit speaker names, titles, and bios in `index.html` (lines 370-900)
- Add/replace speaker photos in `assets/speakers_photos/`
- Update CSS background images in `css/speakers.css` (lines 425+)

### Update Program Schedule

- Edit program timeline in `index.html` (lines 905+)
- Update session times and details as needed
- Icons are loaded from `assets/`

### Update Partners

- Add partner logos to `assets/`
- Update partner section in `index.html`
- Link partner logos in appropriate sections

### Update Location

- Edit location details in `index.html`
- Update map iframe with venue coordinates
- Customize venue description and travel info

---

## 🔗 Assets

All images are stored in the `assets/` directory:

- `speakers_photos/` - Speaker profile pictures
- `previous_year_edition/` - Gallery from 2025 edition
- Various PNG/JPG files for backgrounds and icons

**Note:** All asset paths use relative paths (e.g., `./assets/image.png`) for portability.

---

## 🛠️ Development

### Adding New Sections

1. Add HTML structure in `index.html`
2. Create CSS file in `css/` directory
3. Create JS file in `js/` directory (if needed)
4. Link CSS in HTML `<head>` and JS before `</body>`

### Modifying Styles

- Edit corresponding CSS files in `css/` directory
- Use consistent naming conventions
- Test on mobile devices

### Testing Interactive Elements

- Test registration button behavior
- Verify hackathon countdown displays correctly
- Check poster submission flow
- Validate form links on all devices

---

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

See [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

For questions about the website or event:

- Create an issue in the repository
- Check [CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md) for setup help

---

## 🎯 2026 Edition Status

**Rebranded:** ✅ Reimagining what IndabaX Gambia 2026 would look like 
**Assets Fixed:** ✅ All 100+ image paths corrected  
**Credentials Removed:** ✅ No exposed secrets  
**Date Logic:** ✅ Configurable for 2026 event  
**Ready for Configuration:** ✅ Awaiting event details  

---

**Last Updated:** April 27, 2026  
**Version:** IndabaX Gambia 2026 (Rebranded)
