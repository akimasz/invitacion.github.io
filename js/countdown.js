simplyCountdown('#cuenta', {
	year: 2024, 
	month: 12, 
	day: 28, 
	hours: 4, 
	minutes: 0, 
	seconds: 0, 
	words: { 
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true,
	inline: false, // Cambiamos a false para usar las secciones separadas
	enableUtc: true,
	onEnd: function() {return; 
	},
	refresh: 1000,
	sectionClass: 'simply-section',
	amountClass: 'simply-amount',
	wordClass: 'simply-word',
	zeroPad: false,
	countUp: false
});

// Agregar los : entre los elementos
let cuenta = document.getElementById('cuenta');
let sections = cuenta.querySelectorAll('.simply-section');

// Recorrer las secciones para añadir el :
for (let i = 0; i < sections.length - 1; i++) {
    let separator = document.createElement('span');
    separator.innerText = ':';
    separator.style.fontSize = '40px'; // Ajustar el tamaño del :
    separator.style.fontWeight = '100%'; // Ajustar el estilo del :
    separator.style.paddingTop = '00px';
    separator.style.color = 'rg';
    sections[i].after(separator);
}
