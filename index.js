document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const button = form.querySelector('button');

    const descriptionInput = document.createElement('input');
    descriptionInput.className = "des-input";
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';
    descriptionInput.placeholder = 'Enter fruit description';

    form.insertBefore(descriptionInput, button);
});

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd.value);

    newLi.appendChild(newLiText);
    newLi.className = 'fruit';

    const deletebtn = document.createElement('button');
    const deletebtnText = document.createTextNode('x');
    deletebtn.appendChild(deletebtnText);
    deletebtn.className = 'delete-btn';

    const editbtn = document.createElement('button');
    const editbtnText = document.createTextNode('Edit');
    editbtn.appendChild(editbtnText);
    editbtn.className = 'edit-btn';

    // Loop through description inputs to get their values
    const descriptionInputs = document.getElementsByClassName('des-input');
    for (let i = 0; i < descriptionInputs.length; i++) {
        const description = descriptionInputs[i].value;
        const descriptionPara = document.createElement('p');
        descriptionPara.style.fontStyle = 'italic';
        const descriptionEm = document.createElement('em');
        const descriptionText = document.createTextNode(description);
        descriptionEm.appendChild(descriptionText);
        descriptionPara.appendChild(descriptionEm);
        newLi.appendChild(descriptionPara);
    }

    newLi.appendChild(deletebtn);
    newLi.appendChild(editbtn);
    fruits.appendChild(newLi);
});

fruits.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("delete-btn")) {
        const fruitToDelete = event.target.parentElement;
        fruitToDelete.parentElement.removeChild(fruitToDelete);
    }
});

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event) {
    const textEnteredByUser = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');
    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].textContent.toLowerCase();
        if (currentFruitText.includes(textEnteredByUser)) {
            fruitItems[i].style.display = 'block';
        } else {
            fruitItems[i].style.display = 'none';
        }
    }
});
