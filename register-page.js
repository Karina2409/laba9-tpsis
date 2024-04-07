function registration(){
  const name = document.querySelector('.js-input-name').value;
  const login = document.querySelector('.js-input-login').value;
  const password = document.querySelector('.js-input-password').value;

  const name1 = document.querySelector('.js-input-name').value;
  const login1 = document.querySelector('.js-input-login').value;
  const password1 = document.querySelector('.js-input-password').value;

  const name2 = document.querySelector('.js-input-name').value;
  const login2 = document.querySelector('.js-input-login').value;
  const password2 = document.querySelector('.js-input-password').value;

  if(name !== "" && login !== "" && password !== ""){
    window.location.href='profile-page.html';

  }
  else{
    alert('Введите данные!');
  }
}

function back() {
  window.location.href='main-page.html';
}