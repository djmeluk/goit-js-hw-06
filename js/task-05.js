
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input',onInputChange,);
const oldTextSpanEl = spanEl.textContent;
function onInputChange(event) { 
    spanEl.textContent = event.currentTarget.value;
    if(!inputEl.value) {
        spanEl.textContent = oldTextSpanEl;
    }
}
