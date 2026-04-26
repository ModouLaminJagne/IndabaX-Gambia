const popup = document.querySelector(".registration_end");
const closePopupButton = document.querySelector(".image_close");
const closeNotYetButton = document.querySelector(".imgae_close1");
const notYet = document.querySelector(".registration_notyet");

function show(el) {
    if (el) el.style.display = "flex";
}

function hide(el) {
    if (el) el.style.display = "none";
}

if (closePopupButton && popup) {
    closePopupButton.addEventListener("click", () => hide(popup));
}

if (closeNotYetButton && notYet) {
    closeNotYetButton.addEventListener("click", () => hide(notYet));
}

if (popup) {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) hide(popup);
    });
}

if (notYet) {
    notYet.addEventListener("click", (e) => {
        if (e.target === notYet) hide(notYet);
    });
}

// 2026-safe defaults: leave dates/links empty until organizers provide them.
// If a URL is empty, the UI will show the existing "coming soon" modal.
const registrationLink = "";
const posterLink = "";

// Optional: set these when dates are confirmed (local time).
const registrationOpen = null; // e.g. new Date(2026, 2, 15)
const registrationDeadline = null; // e.g. new Date(2026, 3, 30, 23, 59, 59)
const posterOpen = null; // e.g. new Date(2026, 2, 20)
const posterDeadline = null; // e.g. new Date(2026, 3, 25, 23, 59, 59)

function openOrComingSoon(url) {
    if (!url) {
        show(notYet);
        return;
    }
    window.open(url, "_blank");
}

function check_date() {
    const now = new Date();

    if (registrationOpen instanceof Date && now < registrationOpen) {
        show(notYet);
        return;
    }
    if (registrationDeadline instanceof Date && now >= registrationDeadline) {
        show(popup);
        return;
    }
    openOrComingSoon(registrationLink);
}

function check_date_poster() {
    const now = new Date();

    if (posterOpen instanceof Date && now < posterOpen) {
        show(notYet);
        return;
    }
    if (posterDeadline instanceof Date && now > posterDeadline) {
        show(popup);
        return;
    }
    openOrComingSoon(posterLink);
}

const paragraph = document.getElementById("parag");
if (paragraph) {
    paragraph.innerText = "IndabaX Gambia 2026 — registration opening soon.";
}

const question1 = document.querySelector(".question1");
const answer1 = document.querySelector(".answer1");
if (question1 && answer1) {
    question1.innerText = "When does registration open?";
    answer1.innerText = "Dates and links will be announced soon.";
}
