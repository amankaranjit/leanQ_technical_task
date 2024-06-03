import ToyWrapper from "./components/toy/ToyWrapper"
import QuoteWrapper from "./components/quote/QuoteWrapper"
import SportsWrapper from "./components/sports/SportsWrapper"
function App() {
  return (
    <div className="container">
      <ToyWrapper />
      <SportsWrapper />
      <QuoteWrapper />
    </div>
  )
}

export default App
