function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRandomBrightColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 30); 
    const lightness = 50 + Math.floor(Math.random() * 30); 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


document.addEventListener('DOMContentLoaded', () => {
    
    const colorButton = document.querySelector('.game-card__button[data-game="color-generator"]');
    
    
    const colorButtonById = document.getElementById('color-generator-btn');
    
   
    const button = colorButton || colorButtonById;
    
    if (button) {
        console.log('Кнопка генератора цветов найдена!'); 
        
        button.addEventListener('click', (event) => {
           
            event.preventDefault();
            
          
            const newColor = getRandomColor();
          
            
        
            document.body.style.backgroundColor = newColor;
            
          
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.style.backgroundColor = newColor;
            }
            
            console.log(`🎨 Цвет фона изменен на: ${newColor}`);
            
        });
};
})
