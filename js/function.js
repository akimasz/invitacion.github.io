document.getElementById('scrollButton').addEventListener('click', function() {
    const nextSection = document.querySelector('#contenedor'); // Ajusta el ID o la clase del siguiente div
    nextSection.scrollIntoView({ behavior: 'smooth' });
});