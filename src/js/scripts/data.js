const userArray = [
  { name: 'Alex' },
  { name: 'Maria' },
  { name: 'John' },
  { name: 'Drake' },
];

window.localStorage.setItem('users', JSON.stringify(userArray));
