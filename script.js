const form = document.getElementById('wantedform');
const wantedInput = document.getElementById('newwanted');
const wantedsListEl = document.getElementById('wanteds-list');
const notificationEl = document.querySelector('.notification');

let wanteds = JSON.parse(localStorage.getItem('wanteds')) || [];
let EditwantedId = -1;

renderwanteds();

form.addEventListener('submit', function (event) {
  event.preventDefault();
  savewanted();
  renderwanteds();
  localStorage.setItem('wanteds', JSON.stringify(wanteds));
});

function savewanted() {
  const wantedValue = wantedInput.value;

  const isEmpty = wantedValue === '';

  const isDuplicate = wanteds.some((wanted) => wanted.value.toUpperCase() === wantedValue.toUpperCase());

  if (isEmpty) {
    showNotification("Input is empty");
  } else {
    if (EditwantedId >= 0) {
      wanteds = wanteds.map((wanted, index) => ({
        ...wanted,
        value: index === EditwantedId ? wantedValue : wanted.value,
      }));
      EditwantedId = -1;
    } else {
      wanteds.push({
        value: wantedValue,
        checked: false,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      });
    }

    wantedInput.value = '';
  }
}

function renderwanteds() {
  if (wanteds.length === 0) {
    wantedsListEl.innerHTML = '<center>No Wanted People Available</center>';
    return;
  }

  wantedsListEl.innerHTML = '';

  wanteds.forEach((wanted, index) => {
    wantedsListEl.innerHTML += `
    <div class="wanted" id=${index}>
      <i 
        class="bi ${wanted.checked ? 'bi-check-circle-fill' : 'bi-circle'}"
        data-action="check"
      ></i>
      <p class="${wanted.checked ? 'checked' : ''}" data-action="check">${wanted.value}</p>
      <i class="bi bi-trash" data-action="delete"></i>
    </div>
    `;
  });
}

wantedsListEl.addEventListener('click', (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'wanted') return;

  const wanted = parentElement;
  const wantedId = Number(wanted.id);

  const action = target.dataset.action;

  action === 'check' && checkwanted(wantedId);
  action === 'delete' && deletewanted(wantedId);
});

function checkwanted(wantedId) {
  wanteds = wanteds.map((wanted, index) => ({
    ...wanted,
    checked: index === wantedId ? !wanted.checked : wanted.checked,
  }));

  renderwanteds();
  localStorage.setItem('wanteds', JSON.stringify(wanteds));
}


function deletewanted(wantedId) {
  wanteds = wanteds.filter((wanted, index) => index !== wantedId);
  EditwantedId = -1;

  renderwanteds();
  localStorage.setItem('wanteds', JSON.stringify(wanteds));
}