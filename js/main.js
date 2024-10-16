// Select all images except the logo
const images = document.querySelectorAll('.photo-collage img, .image-container img:not(.logo)');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');

// Open popup when an image is clicked
images.forEach(image => {
    image.addEventListener('click', () => {
        popupImg.src = image.src;  // Set popup image source to clicked image
        popup.style.display = 'flex';  // Show the popup
    });
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Optional: Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});