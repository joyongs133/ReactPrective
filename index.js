
const root = document.getElementById('root')



let counter = 0;
function countUp() {
  counter++
  reRender()
}

function reRender() {
  ReactDOM.createRoot(root).render(<Container />)
}
const Container = () =>  (
<div>
<h3>Total click : {counter}</h3>
<button onClick={countUp}>Click ME</button>
</div>
)
reRender()