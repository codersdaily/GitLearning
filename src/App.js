import "./App.css";
import CardsWrapper from "./components/CardWrapper";

function App() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="3" />
      <button onClick={() => window.location.reload()}>Reload Cards</button>
    </div>
  );
}

export default App;