import Players from "./components/Players"
import GameBoard from "./components/GameBoard"

function App() {
  

  return (
    <>
    <main>
      <div id="game-container">
        <ol id='players'>
          <Players initialName="Player 1" symbol="X"></Players>
          <Players initialName="Player 2" symbol="O"></Players>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
    </>
  )
}

export default App
