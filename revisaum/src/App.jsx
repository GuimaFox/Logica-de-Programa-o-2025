import './App.css'

function App() {

  function adivinhar() {
    let aleatorio = Math.ceil(Math.random() * 10)
    let palpite = Number(prompt("Chuta ai"))

    if (aleatorio = palpite) {
      alert("Acertou")
    } else{
      alert("#erro 403")
    }
      
    console.log(aleatorio);

  }

  return (
    <>
      <h1>Exercicio 1</h1>
      <button onClick={adivinhar}>Adivinhar</button>
    </>
  )
}

export default App
