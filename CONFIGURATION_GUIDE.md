# IndabaX Gambia 2026 - Configuration & Deployment Guide

## Overview

The IndabaX Gambia 2026 website has been rebranded and restructured to safely await event details. This guide walks organizers through configuring the site before launch.

**Current Status:** 
- ✅ All assets paths fixed (images will load correctly)
- ✅ All branding updated to Gambia 2026
- ✅ Credentials removed
- ⏳ Awaiting organizer configuration (dates and links)

---

## Quick Configuration Checklist

- [ ] Set hackathon countdown date
- [ ] Add registration form link
- [ ] Add poster submission form link
- [ ] (Optional) Configure registration date gates
- [ ] Test all interactive elements
- [ ] Deploy to hosting

---

## Configuration Steps

### 1. Set Hackathon Countdown Date

**File:** `index.html` (Line 214)

**Current State:**
```html
<section id="AboutHackathon" data-hackathon-start="">
```

**What to Change:**
Update the `data-hackathon-start` attribute with your hackathon event date and time:

```html
<section id="AboutHackathon" data-hackathon-start="2026-05-03T09:00:00Z">
```

**Date Format:** ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)
- Replace `2026-05-03` with your actual hackathon date
- Replace `09:00:00` with the hackathon start time (UTC/GMT)
- Keep the `Z` suffix to indicate UTC timezone

**Example Dates:**
- May 3, 2026 at 9:00 AM UTC: `2026-05-03T09:00:00Z`
- June 15, 2026 at 2:00 PM UTC: `2026-06-15T14:00:00Z`
- July 1, 2026 at 6:00 PM UTC (Gambia time): `2026-07-01T18:00:00Z`

**Result:** The countdown timer on the hackathon section will display remaining days, hours, minutes, and seconds. If the date has passed, it will show "See you at IndabaX Gambia" with zeros.

---

### 2. Add Registration Form Link

**File:** `js/registration.js` (Line 36)

**Current State:**
```javascript
const registrationLink = "";
```

**What to Change:**
```javascript
const registrationLink = "https://forms.gle/YOUR_REGISTRATION_FORM_LINK";
```

**How to Get Your Link:**
1. Create a Google Form for event registration (or use your preferred form platform)
2. Copy the shareable link
3. Paste it into the `registrationLink` constant

**Behavior:**
- **When empty:** "Register Now" buttons show a "coming soon" modal
- **When populated:** "Register Now" buttons open your registration form
- **Optional date-gating:** If you configure `registrationOpen` and `registrationDeadline` (see Section 4), registration will only work during the open window

**Example:**
```javascript
const registrationLink = "https://forms.gle/a1b2c3d4e5f6g7h8i9j0k1l2m3";
```

---

### 3. Add Poster Submission Form Link

**File:** `js/registration.js` (Line 37)

**Current State:**
```javascript
const posterLink = "";
```

**What to Change:**
```javascript
const posterLink = "https://forms.gle/YOUR_POSTER_SUBMISSION_LINK";
```

**How to Get Your Link:**
1. Create a Google Form for poster submissions (or use your preferred form platform)
2. Copy the shareable link
3. Paste it into the `posterLink` constant

**Behavior:**
- **When empty:** Poster submission buttons show a "coming soon" modal
- **When populated:** Poster submission buttons open your submission form
- **Optional date-gating:** If you configure `posterOpen` and `posterDeadline` (see Section 4), submissions will only work during the open window

**Example:**
```javascript
const posterLink = "https://forms.gle/z9y8x7w6v5u4t3s2r1q0p9o8n7m";
```

---

### 4. (Optional) Configure Registration Date Gates

If you want to automatically control when registration/poster submission is open or closed, set these optional date constants.

**File:** `js/registration.js` (Lines 39-42)

**Current State:**
```javascript
const registrationOpen = null;
const registrationDeadline = null;
const posterOpen = null;
const posterDeadline = null;
```

**What to Change:**

**For Registration:**
```javascript
const registrationOpen = new Date(2026, 3, 15);  // April 15, 2026
const registrationDeadline = new Date(2026, 4, 30, 23, 59, 59);  // May 31, 2026, 11:59 PM
```

**For Poster Submission:**
```javascript
const posterOpen = new Date(2026, 3, 1);  // April 1, 2026
const posterDeadline = new Date(2026, 4, 15, 23, 59, 59);  // May 15, 2026, 11:59 PM
```

**Date Format:** JavaScript Date Constructor
- `new Date(YYYY, MM-1, DD)` where MM-1 because months are 0-indexed (0 = January, 11 = December)
- Optional time: `new Date(YYYY, MM-1, DD, HH, MM, SS)`

**Common Configurations:**
```javascript
// Registration opens April 1, closes May 31
const registrationOpen = new Date(2026, 2, 1);      // March = month 2
const registrationDeadline = new Date(2026, 4, 31); // May 31

// Poster submissions open April 15, close May 15
const posterOpen = new Date(2026, 3, 15);      // April 15
const posterDeadline = new Date(2026, 4, 15);  // May 15
```

**Behavior:**
- **Before `registrationOpen`:** Shows "Registration opening soon" modal
- **Between `registrationOpen` and `registrationDeadline`:** Opens your registration link
- **After `registrationDeadline`:** Shows "Registration closed" modal
- **If dates are `null`:** Skips date checking (always opens the link if it's configured)

---

## File Reference

### Key Files to Configure

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | 214 | Hackathon countdown date |
| `js/registration.js` | 36-37 | Registration and poster links |
| `js/registration.js` | 39-42 | (Optional) Date gates for registration window |

### Related Files (No Changes Needed)

| File | Purpose |
|------|---------|
| `js/registration.js` | Handles registration/poster logic (already configured for 2026) |
| `js/hackathon.js` | Countdown timer logic (reads date from HTML) |
| `index.html` | Main website (all text already updated to Gambia 2026) |
| `css/` | All styling (asset paths fixed) |

---

## Testing Checklist

After configuration, test these items:

### Images & Assets
- [ ] Hero background image displays
- [ ] Speaker photos load correctly
- [ ] Program timeline icons display
- [ ] Previous year edition carousel works
- [ ] Poster session background displays

### Interactive Elements
- [ ] Navigation links work
- [ ] Smooth scroll animations function
- [ ] Mobile menu opens/closes

### Registration Flow
- [ ] "Register Now" button shows correct behavior:
  - If `registrationLink` is empty: Shows "coming soon" modal
  - If `registrationLink` is populated: Opens your registration form
  - If dates are configured: Respects registration window
- [ ] "Register as Participant" button behaves the same way

### Poster Session Flow
- [ ] "Submit Poster" button shows correct behavior:
  - If `posterLink` is empty: Shows "coming soon" modal
  - If `posterLink` is populated: Opens your poster form
  - If dates are configured: Respects submission window

### Hackathon Section
- [ ] Countdown timer displays (if `data-hackathon-start` is set):
  - Before hackathon: Shows days/hours/minutes/seconds
  - After hackathon: Shows "See you at IndabaX Gambia"
  - If date not set: Shows "Dates to be announced" with 00:00:00:00

### Content Verification
- [ ] All text says "IndabaX Gambia 2026"
- [ ] Location section shows The Gambia
- [ ] Venue marked as "TBA"
- [ ] Dates marked as "to be announced" (where not yet set)

### Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (phone & tablet)

---

## Deployment Steps

### 1. Prepare Files
```bash
# Ensure all files are saved and committed
git add .
git commit -m "Configure IndabaX Gambia 2026 event details"
```

### 2. Verify Configuration
- [ ] Double-check all links are correct (no typos)
- [ ] Verify date formats are correct
- [ ] Run through testing checklist above

### 3. Deploy
- **If hosting on GitHub Pages:** Push to `main` branch
  ```bash
  git push origin main
  ```
- **If hosting elsewhere:** Upload files to your hosting provider

### 4. Post-Deployment Verification
- [ ] Visit your live website
- [ ] Verify images load
- [ ] Click registration button and confirm behavior
- [ ] Check countdown timer
- [ ] Test on mobile device

### 5. Announce Event
- [ ] Share website link with organizers and community
- [ ] Update social media links
- [ ] Send announcement emails

---

## Common Issues & Troubleshooting

### Images Not Loading
- **Check:** Verify all images exist in `/assets/` folder
- **Fix:** Run grep search for "assests" (common typo) - should return 0 results
- **Tip:** Open browser DevTools (F12) and check Console for 404 errors

### Registration Button Not Working
- **Check 1:** Is `registrationLink` populated with a valid URL?
- **Check 2:** Are you outside the registration date window (if configured)?
- **Check 3:** Does the URL start with `https://`?
- **Fix:** Update `const registrationLink = "..."` in `js/registration.js` line 36

### Hackathon Countdown Shows "00:00:00:00"
- **Expected:** If `data-hackathon-start` is empty or the date has passed
- **To enable:** Update `data-hackathon-start="2026-05-03T09:00:00Z"` in `index.html` line 214
- **Verify:** Check browser DevTools Console for any JavaScript errors

### Form Links Open in Same Tab
- **Expected behavior:** Registration/poster links open your form in the same or new tab
- **If modal appears instead:** You may not have configured the link yet (still empty)

### JavaScript Errors in Console
- **Check:** All files (`js/registration.js`, `js/hackathon.js`, etc.) are properly linked in `index.html`
- **Verify:** No typos in JavaScript constants (missing quotes, commas, etc.)
- **Fix:** Compare with this guide's examples

---

## Support & Questions

### When Organizers Ask Questions:

**"Why does the registration button show 'coming soon'?"**
- Answer: The registration form link hasn't been added yet. Update `registrationLink` in `js/registration.js` line 36.

**"Why isn't the countdown working?"**
- Answer: The hackathon date hasn't been set. Update `data-hackathon-start` in `index.html` line 214.

**"Why are images not loading?"**
- Answer: Check that all images exist in the `/assets/` folder. Verify file names match exactly (case-sensitive on Linux/Mac).

**"Can we require registration before a certain date?"**
- Answer: Yes! Set `registrationOpen` and `registrationDeadline` in `js/registration.js` lines 39-40.

---

## Summary of Changes Made (Background Context)

This website was previously branded for IndabaX Tunisia 2025. The following updates were completed:

- ✅ Rebranded all text to "IndabaX Gambia 2026"
- ✅ Fixed 100+ broken asset paths (assests → assets)
- ✅ Removed exposed API credentials
- ✅ Removed hard-coded 2025 dates
- ✅ Redesigned registration flow to show "coming soon" until configured
- ✅ Redesigned hackathon countdown to read date from HTML attribute
- ✅ Updated location section to show The Gambia

**Nothing else needs to be edited** — only follow the configuration steps in this guide.

---

## Next Steps

1. **Configure Now:** Follow steps 1-3 above and set your event details
2. **Test Locally:** Open `index.html` in a browser and verify everything works
3. **Deploy:** Push changes to your hosting provider
4. **Monitor:** Check analytics and user feedback after launch

---

**Last Updated:** April 27, 2026  
**Website Version:** IndabaX Gambia 2026 (Rebranded)  
**Status:** Ready for organizer configuration
