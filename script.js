const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function enviarWhats(event) {
    event.preventDefault();

    const Name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = '5512996186502';
    const texto = `${Name}: ${message}`;
    const formatMessage = encodeURIComponent(texto);
    const url = `https://whatsa.me/${phone}/?t=${formatMessage}`;

    window.open(url, '_blank');
}

document.querySelectorAll('.paragraph-projects').forEach((paragraph) => {
    const readMore = paragraph.nextElementSibling;

    if (paragraph.scrollHeight > paragraph.clientHeight) {
        readMore.style.display = 'inline-block';
    }

    readMore.addEventListener('click', () => {
        paragraph.classList.toggle('expanded');

        readMore.textContent = paragraph.classList.contains('expanded') ? 'menos' : 'mais...';
    });
});
