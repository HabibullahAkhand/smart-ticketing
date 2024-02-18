function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-primary-color');
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}