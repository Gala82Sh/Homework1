document.addEventListener('DOMContentLoaded', function() {
    

 const task1Header = document.querySelector('#task1-header');
    const toggleBtn = document.querySelector('#toggleTextBtn');
    
    if (task1Header && toggleBtn) {
        let isHidden = false;
        
        toggleBtn.addEventListener('click', function() {
            if (isHidden) {
                task1Header.style.display = 'block';
                toggleBtn.textContent = 'Скрыть';
                isHidden = false;
            } else {
                task1Header.style.display = 'none';
                toggleBtn.textContent = 'Показать';
                isHidden = true;
            }
        });
    }
    

   
    const colorParagraph = document.querySelector('#colorChangeParagraph');
    const changeColorBtn = document.querySelector('#changeColorBtn');
    
    if (colorParagraph && changeColorBtn) {
        changeColorBtn.addEventListener('click', function() {
            colorParagraph.style.color = 'blue';
        });
    }
    
   
    const changeTextHeader = document.querySelector('#changeTextHeader');
    const changeTextBtn = document.querySelector('#changeTextBtn');
    
    if (changeTextHeader && changeTextBtn) {
        changeTextBtn.addEventListener('click', function() {
            changeTextHeader.textContent = 'Привет, мир!';
        });
    }
    
  

    const changeDescriptionBtn = document.querySelector('#changeDescriptionBtn');
    
    if (changeDescriptionBtn) {
        changeDescriptionBtn.addEventListener('click', function() {
            const descriptionElements = document.querySelectorAll('.description');
            
            descriptionElements.forEach(function(element) {
                element.textContent = 'Измененный текст';
            });
        });
    }
   


    const changeAllDescriptionBtn = document.querySelector('#changeAllDescriptionBtn');
    
    if (changeAllDescriptionBtn) {
        changeAllDescriptionBtn.addEventListener('click', function() {
            const allDescriptions = document.querySelectorAll('.description');
            
            for (let i = 0; i < allDescriptions.length; i++) {
                allDescriptions[i].textContent = 'Новый текст';
            }
        });
    }
    



    const addElementBtn = document.querySelector('#addElementBtn');
    const appendContainer = document.querySelector('#appendContainer');
    
    if (addElementBtn && appendContainer) {
        addElementBtn.addEventListener('click', function() {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Новый абзац';
            appendContainer.appendChild(newParagraph);
        });
    }
    
   

    
    const deleteElementBtn = document.querySelector('#deleteElementBtn');
    
    if (deleteElementBtn) {
        deleteElementBtn.addEventListener('click', function() {
            const firstDescription = document.querySelector('.description-del');
            
            if (firstDescription) {
                firstDescription.remove();
            } else {
                alert('Больше нет элементов для удаления!');
            }
        });
    }
    
});