
const root = document.getElementById('root')
function Title () {
  return (
  <h3 id="title" onMouseEnter={ console.log('helloEnter')}>
  Hello I'm a Title
</h3>
  )
}

 
function Button() {
  return (
    <button
    style={{
     backgroundColor: 'tomato',
    }}
    onClick={() => console.log('im Clicked')}
    >
    </button>
  )
}


const Container =  (
<div>
  <Title />
  <Button />
</div>
)
ReactDOM.createRoot(root).render(<Title />, <Button />)