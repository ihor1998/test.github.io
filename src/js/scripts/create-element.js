const events = JSON.parse(window.localStorage.getItem('events')) || [];

const cells = Array.from(document.querySelectorAll('[data-day]'));

function createElement() {
  events.forEach((elem) => {
    const cell = cells.find((el) => el.getAttribute('data-day') === elem.day && el.getAttribute('data-time') === elem.time);
    cell.style.padding = 0;
    cell.innerHTML = `
        <div class="table__event">
            <span>${elem.name}</span>
            <div class="table__btn">
              <span class="table__btn_line"></span>
              <span class="table__btn_line"></span>
            </div>
        </div>
    `;
  });
}

createElement();
