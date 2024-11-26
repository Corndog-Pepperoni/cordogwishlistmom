// Select all items to animate
const items = document.querySelectorAll("a, .title, .divider, .subheader, .fpv-container img");

// Loop through each item and set an animation delay
items.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`; // Stagger by 0.3 seconds
});