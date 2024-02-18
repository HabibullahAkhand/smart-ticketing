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

function totalPrice(totalTicket){
    let totalTicketPrice=totalTicket*550;
    const price=document.getElementById('total-price');
    price.innerText=totalTicketPrice;
}

function applyBtnDisable(value){
    const applyButton=document.getElementById('coupon-apply-btn');
    if (value === 4) {
        applyButton.removeAttribute('disabled');
        getCoupon();
    }
}
function hideSection(elementId){
    const hideCouponSection=document.getElementById(elementId);
    hideCouponSection.classList.add('hidden');
}

function getCoupon(){
    document.getElementById('coupon-apply-btn').addEventListener('click', function(){
        const commentBox=document.getElementById('coupon-input-fild');
        const newComment=commentBox.value;
        // console.log(newComment);
        if(newComment==='Couple 20' || newComment==='NEW15' ){
            const calculationPrice= document.getElementById('total-price');
            let totalTicketPrice=parseInt(calculationPrice.innerText);
            if(newComment==='Couple 20'){
                totalTicketPrice=totalTicketPrice*0.80;
                setTextElementValueById('grand-total', totalTicketPrice);
                hideSection('coupon-section');
            }
            else if(newComment==='NEW15'){
                totalTicketPrice=totalTicketPrice*0.85;
                setTextElementValueById('grand-total', totalTicketPrice);
                hideSection('coupon-section');
            }
        }
    })
}
