import './App.css';
import Card from "./Components/CenteredCard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <span className='mana'>3</span>
          <span className='attack'>7</span>
          <span className='life'>5</span>
        </Card>
        <Card>
          <span className='mana'>9</span>
          <span className='attack'>8</span>
          <span className='life'>9</span>
        </Card>
        <Card>
          <span className='mana'>1</span>
          <span className='attack'>2</span>
          <span className='life'>1</span>
        </Card>
      </header>
    </div>
  );
}

export default App;
