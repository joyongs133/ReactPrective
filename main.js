let counter = 0;
const span = document.querySelector('span')
const button = document.getElementById('btn')
const handleClick = () => {
  console.log('i am click!')
  counter++
  span.innerText = `Total clicks: ${counter}`
}
button.addEventListener('click', handleClick);