const users = JSON.parse(window.localStorage.getItem('users'));

const select = document.querySelector('.header__select');

function newOption() {
  const html = users.map((elem) => `
        <option class="header__option" value=${elem}>
            ${elem}
        </option>
    `).join('');

  select.innerHTML = html;
}

newOption();
