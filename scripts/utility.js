function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-primary-color');
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function calculationTable(setNumber) {
    var ulElement = document.createElement('ul');
    ulElement.classList.add('flex', 'justify-between', 'my-5');

    var p1 = document.createElement('p');
    p1.textContent = setNumber;
    var p2 = document.createElement('p');
    p2.textContent = 'Economoy';
    var p3 = document.createElement('p');
    p3.textContent = '550';

    ulElement.appendChild(p1);
    ulElement.appendChild(p2);
    ulElement.appendChild(p3);
    
    const calculationTable = document.getElementById('calculation-table');
    calculationTable.appendChild(ulElement);
}

function disableOnClick(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.onclick = function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        };
        element.style.cursor = 'not-allowed';
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}


function disableAllSeats() {
    const seatElements = document.querySelectorAll('.py-4');
    seatElements.forEach(seat => {
        seat.onclick = null;
        seat.style.cursor = 'not-allowed';
        seat.style.opacity = 0.5;
    });
}
