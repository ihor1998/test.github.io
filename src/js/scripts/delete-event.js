const table = document.getElementById('table');

const tBodies = table.querySelector('tbody');

const { body } = document;

tBodies.addEventListener('click', (e) => {
  const event = e.target;

  if (!event.closest('.table__btn')) return;

  showMessage(event);
});

function showMessage(event) {
  const elem = event.parentElement;
  const title = elem.textContent.trim();

  const html = `
        <section class="modal">
            <div class="modal__container">
                <p class="modal__box">
                    Do you really
                    want to delete
                    event "${title}"?
                </p>
                <div class="modal__box">
                    <div class="modal__btn" data="No">
                        No
                    </div>
                    <div class="modal__btn" data="Yes">
                        Yes
                    </div>
                </div>
            </div>
        </section>
    
    `;

  body.insertAdjacentHTML('beforeend', html);
  const modal = document.querySelector('.modal');

  modal.addEventListener('click', (e) => {
    const { target } = e;

    const newStorage = modStorage(elem);

    if (target.getAttribute('data') === 'Yes') {
      modal.remove();
      window.localStorage.clear();
      window.localStorage.setItem('events', JSON.stringify(newStorage));
      elem.remove();
    } else if (target.getAttribute('data') === 'No') {
      modal.remove();
    }
  });
}

function modStorage(elem) {
  const events = JSON.parse(window.localStorage.getItem('events'));
  const cell = elem.parentElement;
  return events.filter((el) => el.day !== cell.getAttribute('data-day')
      || el.time !== cell.getAttribute('data-time'));
}
