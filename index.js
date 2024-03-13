const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const fruitToAdd = document.getElementById("fruit-to-add");

  var listItems = document.querySelectorAll('.fruit');

  listItems.forEach(function(item) {
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    
    // Adding click event listener to edit button
    editButton.addEventListener('click', function() {
      // Add your edit functionality here
      console.log('Edit button clicked for: ' + item.textContent);
    });

    // Appending edit button to list item
    item.appendChild(editButton);
  });


  const newLi = document.createElement("li");
  // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">edit</button>';

  const newLiText = document.createTextNode(fruitToAdd.value);

  newLi.appendChild(newLiText);
  newLi.className = "fruit";

  const dltbtn = document.createElement("button");
  const dltbtnText = document.createTextNode("X");

  const editbtn = document.createElement("button");
  editbtn.classList= 'edit-btn'
  const editText = document.createTextNode("edit");
 
  editbtn.appendChild(editText);
  dltbtn.appendChild(dltbtnText);
  dltbtn.className = 'delete-btn';
  newLi.appendChild(dltbtn);
  newLi.appendChild(editbtn);

  fruits.appendChild(newLi);
});
fruits.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-btn")) {
    const fruitTodlt = event.target.parentElement;
    fruits.removeChild(fruitTodlt);
  }


});