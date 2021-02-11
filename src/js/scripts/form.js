const { form } = document.forms;

const { input } = form.elements;

const { day } = form.elements;

const { time } = form.elements;

const events = JSON.parse(window.localStorage.getItem('events')) || [];

function validationInput() {
  input.style.backgroundColor = '#ff7473';
  input.setAttribute('placeholder', 'Enter event name!');
  input.addEventListener('focus', () => {
    input.style.backgroundColor = '#f5f5f5';
    input.setAttribute('placeholder', 'Event name:');
  });
}

function validationCustomSelect() {
  const select = document.getElementById('select');
  const err = document.querySelector('.form__select-custom__error');
  select.style.backgroundColor = '#ff7473';
  err.classList.add('error');
  select.addEventListener('click', () => {
    select.style.backgroundColor = '#f5f5f5';
    err.classList.remove('error');
  });
}

function createEvent() {
  const items = [...document.querySelectorAll('[data-name]')];

  if (input.value === '' || items.length === 0) {
    return;
  }

  const participants = items
    .map((elem) => elem.getAttribute('data-name').trim());

  const obj = {
    name: input.value,
    day: day.value,
    time: time.value,
    participants,
  };

  const busyCell = events.find((elem) => obj.day === elem.day
      && obj.time === elem.time);

  if (busyCell !== undefined) {
    showMessage(obj.day, obj.time);
    return;
  }

  events.push(obj);

  window.localStorage.setItem('events', JSON.stringify(events));
  document.location.assign('./index.html');
}

function validationForm(e) {
  e.preventDefault();
  const items = [...document.querySelectorAll('[data-name]')];
  if (items.length === 0) {
    validationCustomSelect();
  }

  if (input.value === '') {
    validationInput();
  }

  createEvent();
}

// eslint-disable-next-line no-shadow
function showMessage(day, time) {
  const html = `
    <div id="message">
        Sorry, ${day} and ${time} is busy already :(
        <i class="fa fa-times" id="message__cancel"></i>
    </div>
  `;

  form.insertAdjacentHTML('beforeend', html);

  const btn = document.getElementById('message__cancel');

  btn.addEventListener('click', () => {
    btn.parentElement.remove();
  });
}

form.addEventListener('submit', validationForm);
