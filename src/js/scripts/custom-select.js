const users = JSON.parse(window.localStorage.getItem('users'));

const select = document.getElementById('select');

const selectBody = document.getElementById('select-body');

select.addEventListener('click', (e) => {
  const { target } = e;
  if (target.closest('.form__select-custom_cancel')) {
    addListItem(target.parentElement);
    target.parentElement.remove();
  } else {
    selectBody.classList.toggle('active');
  }
});

selectBody.addEventListener('click', addItem);

function addItem(e) {
  const { target } = e;
  if (!target.closest('.form__select-custom__body_item')) return;
  
  const item = e.target.textContent;
  target.innerHTML = '';

  const html = `
        <div class="form__select-custom_item">
            <span data-name="${item}">${item}</span>
            <i class="fa fa-times form__select-custom_cancel"></i>
        </div>
    `;

  select.insertAdjacentHTML('beforeend', html);
  selectBody.classList.remove('active');
}

function addList() {
  const html = users
    .slice(2)
    .map((elem) => `
        <li class="form__select-custom__body_item">
            ${elem}
        </li>
    `).join('');

  selectBody.innerHTML = html;
}

function addListItem(elem) {
  const html = `
        <li class="form__select-custom__body_item">
            ${elem.textContent}
        </li>`;

  selectBody.insertAdjacentHTML('beforeend', html);
}

addList();
