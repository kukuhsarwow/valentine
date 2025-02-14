document.addEventListener('click', () => {
    const audio = document.getElementById('birthday-song');
    audio.play().catch(error => console.log('Autoplay gagal:', error));
}, { once: true });
