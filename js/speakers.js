const close = document.querySelectorAll(".close_speaker");
const allpopups = document.querySelectorAll(".dialog");
const cards = document.querySelectorAll(".card");

// Wire up each speaker's "Full Bio" button to its corresponding dialog popup
for (let i = 1; i <= 10; i++) {
  const openBtn = document.querySelector(`.open${i}`);
  const popup = document.querySelector(`.dialog${i}`);

  if (!openBtn || !popup) continue;

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// Close all popups via the × button inside each bio dialog
close.forEach(button => {
  button.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    allpopups.forEach(popup => {
      popup.style.display = "none";
    });
  });
});

// Card flip toggle for single tap
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    // Prevent flip if tapping on any "Full Bio" button or a social link
    if (e.target.closest("[class^='open'], [class*=' open'], .splinks a")) {
      return; // Allow buttons/links to handle their own events
    }
    e.stopPropagation(); // Prevent event from bubbling to document
    // Remove .flipped from other cards
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove("flipped");
      }
    });
    // Toggle .flipped on the clicked card
    card.classList.toggle("flipped");
  });

  // Prevent long-press context menu
  card.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Disable context menu on long press
  });
});

// Unflip all cards when tapping outside
document.addEventListener("click", (e) => {
  // Check if the click is outside any card
  if (!e.target.closest(".card")) {
    cards.forEach(card => {
      card.classList.remove("flipped");
    });
  }
});
