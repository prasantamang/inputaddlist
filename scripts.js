//creating input
const myInput = document.createElement("input");
document.body.appendChild(myInput);


//creating button
const myButton = document.createElement("button");
document.body.appendChild(myButton);
myButton.innerHTML = "Add";

//clearing input
myButton.addEventListener('click', ( ) => {
    myInput.forEach(input => input.value = '  ');
} );

//creating ul
const myUl = document.createElement("ul");
document.body.appendChild(myUl);

//creating listen eventer
myButton.addEventListener('click', () => {
    const Inside_list =document.createElement('li');
    myUl.appendChild(Inside_list);
    Inside_list.innerHTML = myInput.value
    myInput.value="";
});



