// Smooth scrolling for the down arrow
document.querySelector(".scroll-indicator").addEventListener("click", () => {
  document.querySelector(".game-info").scrollIntoView({
    behavior: "smooth",
  })
})

// Card flip functionality with image cycling
const cardImages = {
  0: [
    // Event cards
    "images/event-card-1.png",
    "images/event-card-2.png",
    "images/event-card-3.png",
    "images/event-card-4.png",
    "images/event-card-5.png",
  ],
  1: [
    // Character cards
    "images/character-card-1.png",
    "images/character-card-2.png",
    "images/character-card-3.png",
    "images/character-card-4.png",
    "images/character-card-5.png",
  ],
  2: [
    // Item cards
    "images/item-card-1.png",
    "images/item-card-2.png",
    "images/item-card-3.png",
    "images/item-card-4.png",
    "images/item-card-5.png",
  ],
}

// Track current image index for each card
const currentImageIndex = {
  0: 0,
  1: 0,
  2: 0,
}

// Add click event listeners to flip cards
document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", function () {
    const cardIndex = Number.parseInt(this.dataset.card)

    // Toggle flip class
    this.classList.toggle("flipped")

    // Cycle to next image
    currentImageIndex[cardIndex] = (currentImageIndex[cardIndex] + 1) % cardImages[cardIndex].length

    // Update image source after flip animation
    setTimeout(() => {
      const frontImg = this.querySelector(".flip-card-front img")
      const backImg = this.querySelector(".flip-card-back img")

      if (this.classList.contains("flipped")) {
        backImg.src = cardImages[cardIndex][currentImageIndex[cardIndex]]
      } else {
        frontImg.src = cardImages[cardIndex][currentImageIndex[cardIndex]]
      }
    }, 300)
  })
})

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe sections for scroll animations
document.querySelectorAll(".game-info, .story-section, .objective-section, .interactive-section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})

// Home button functionality
document.querySelector(".home-btn").addEventListener("click", () => {
  // You can replace this with actual navigation logic
  alert("返回主頁功能 - 請根據您的需求實現導航邏輯")
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const rate = scrolled * -0.5

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`
  }
})
