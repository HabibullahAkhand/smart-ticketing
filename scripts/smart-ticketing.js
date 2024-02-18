function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        var offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function myFunction(elementId) {
    // bg color change
    const innerText = elementId.innerText;
    setBackgroundColorById(innerText);

    // update current set
    const currentSetElement = document.getElementById('current-set');
    const currentSetText = currentSetElement.innerText;
    const currentSet = parseInt(currentSetText);
    const updatedSet = currentSet - 1;
    setTextElementValueById('current-set', updatedSet);

    
}
