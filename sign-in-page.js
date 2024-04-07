function back(){
  window.location.href='main-page.html';
}

function signIn(){
  const login = document.querySelector('.js-input-login').value;
  const password = document.querySelector('.js-input-password').value;

  if(login === "pelmeshek2409" && password === "123"){
    window.location.href='profile-page.html';
  }
  else{
    alert('Неправильный пароль или логин!');
  }
}