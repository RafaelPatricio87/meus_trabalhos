const changeThemeBtn = document.querySelector('#change-theme')


function toggleDarkMode(){
  document.body.classList.toggle('dark')
}
function loadTheme(){
  const darkMode = localStorage.getItem('dark');

  if(darkMode){
    toggleDarkMode()
  }
}
loadTheme()
changeThemeBtn.addEventListener('change', () => {

toggleDarkMode()
// save or remove dark mode
localStorage.removeItem('dark')
if(document.body.classList.contains('dark')){
  localStorage.setItem('dark',1)
}
})