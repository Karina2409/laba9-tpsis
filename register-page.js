function registration(){
  const name = document.querySelector('js-input-name').value;
  const login = document.querySelector('js-input-login').value;
  const password = document.querySelector('js-input-password').value;

  if(name !== null && login !== null && password !== null){
    window.location.href='profile-page.html';
  }
  else{
    alert('Введите данные!');
  }
}