import Players from "./components/Players"

function App() {
  

  return (
    <>
    <main>
      <div id="game-container">
        <ol id='players'>
          <Players initialName="Player 1" symbol="X"></Players>
          <Players initialName="Player 2" symbol="O"></Players>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
    </>
  )
}

export default App
