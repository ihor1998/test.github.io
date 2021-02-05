const users = JSON.parse(window.localStorage.getItem('users'));

const select = document.querySelector('.header__select');

function newOption() {
  const html = users.map((elem) => `
        <option>
            ${elem.name}
        </option>
    `);

  select.innerHTML = html;
}

newOption();
