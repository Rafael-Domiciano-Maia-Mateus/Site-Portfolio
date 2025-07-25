function enviarWhats(event) {
    event.preventDefault();

    const Name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = '5512996186502';
    const texto = `Olá! Me chamo ${Name}, ${message}`;
    const formatMessage = encodeURIComponent(texto);
    const url = `https://whatsa.me/${phone}/?t=${formatMessage}`;

    window.open(url, '_blank');
}
