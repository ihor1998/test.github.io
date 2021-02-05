const { form } = document.forms;

const { input } = form.elements;

const { day } = form.elements;

const { time } = form.elements;

const events = JSON.parse(window.localStorage.getItem('events')) || [];

function createEvent(e) {
  e.preventDefault();
  const obj = {
    name: input.value,
    day: day.value,
    time: time.value,
  };

  events.push(obj);

  window.localStorage.setItem('events', JSON.stringify(events));
  document.location.assign('./index.html');
}

form.addEventListener('submit', createEvent);
