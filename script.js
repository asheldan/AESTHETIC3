document.querySelectorAll('.responsive-gif').forEach(gif => {
    gif.addEventListener('mouseover', () => {
        gif.classList.add('animate');
    });
    gif.addEventListener('mouseout', () => {
        gif.classList.remove('animate');
    });
});
