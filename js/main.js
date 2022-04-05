

const textArea = document.querySelector('.textarea--js');
const saveAction = document.querySelector('.save--js');
const loadAction = document.querySelector('.load--js');
const clearAction = document.querySelector('.clear--js');

// IIFE function to clear the text area field on refresh
(function(){
	textArea.value = "";
})();



saveAction.addEventListener('click', (e) => {
    e.preventDefault(); //method that prevent refreshing after click
    localStorage.setItem('entry', textArea.value);
    textArea.value = "";

});

loadAction.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.getItem('entry')
});

clearAction.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.clear('entry')
    textArea.value = "";
});


