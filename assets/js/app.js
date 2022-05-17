let titleCounter = document.getElementById('title')

let counter = document.createElement('div');
counter.className = "counterStyle";
counter.innerHTML = 0;
titleCounter.after(counter);

let boxButton = document.createElement('div');
boxButton.className = "box";
counter.after(boxButton);

let plus = document.createElement('span');
plus.className = "button";
plus.innerHTML = "+";
boxButton.prepend(plus);


let minus = document.createElement('span');
minus.className = "button";
minus.innerHTML = "-";
boxButton.prepend(minus);

let reset = document.createElement('div');
reset.className = "resetStyle";
reset.innerHTML = "RESET";
boxButton.after(reset);




plus.addEventListener ('click', () => {

counter.innerHTML=  parseInt(counter.innerHTML,10) + 1;


})


minus.addEventListener ('click', () => {

  counter.innerHTML=  parseInt(counter.innerHTML,10) - 1;


})

reset.addEventListener ('click', () => {

  counter.innerHTML=  0;


})
