let count = 0;

let updateCount = document.querySelector('.previous-entries');

let countPassengers = document.getElementById('count-passengers');

function increment(){
  count++;
  countPassengers.innerHTML = count;
}

function save(){
  console.log(count);
  updateCount.innerHTML += `${count} - `;
  count = 0;
  countPassengers.innerHTML = '0';
}

function entries(){
}