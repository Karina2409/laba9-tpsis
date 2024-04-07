function registration(){
  const name = document.querySelector('.js-input-name').value;
  const login = document.querySelector('.js-input-login').value;
  const password = document.querySelector('.js-input-password').value;

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