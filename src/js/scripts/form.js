const { form } = document.forms;

const { input } = form.elements;

const { day } = form.elements;

const { time } = form.elements;

const events = JSON.parse(window.localStorage.getItem('events')) || [];

function createEvent(e) {
  e.preventDefault();
  const items = [...document.querySelectorAll('[data-name]')];
  const participants = items
    .map((elem) => elem.getAttribute('data-name').trim());

  const obj = {
    name: input.value,
    day: day.value,
    time: time.value,
    participants,
  };

  events.push(obj);

  window.localStorage.setItem('events', JSON.stringify(events));
  document.location.assign('./index.html');
}

form.addEventListener('submit', createEvent);
