import createElement from './create-element';

const events = JSON.parse(window.localStorage.getItem('events')) || [];

const select = document.querySelector('.header__select');

select.addEventListener('change', filterTable);

function filterTable() {
  const filteredArr = events
    .filter(({ participants }) => participants.includes(select.value));

  if (select.value === 'All') {
    createElement(events);
  } else {
    cleanTable();
    createElement(filteredArr);
  }
}

function cleanTable() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((elem) => { elem.innerHTML = ''; });
}
