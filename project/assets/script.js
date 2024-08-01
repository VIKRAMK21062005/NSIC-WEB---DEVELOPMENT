let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Toggle navbar
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Toggle search form
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Toggle cart items container
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// Remove cart item
document.querySelectorAll('.cart-item .fa-times').forEach(button => {
    button.onclick = () => {
        button.parentElement.remove();
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('aboutVideo');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var muteButton = document.getElementById('muteButton');
    
    playButton.addEventListener('click', function() {
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
    });

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
});



