import './App.css';
import Intro from './components/Intro';
import FactOfTheDay from './components/FactOfTheDay';
import Dataviz from './components/Dataviz';
import Insights from './components/Insights';
import FutureVision from './components/FutureVision';
import { SVGContainer } from './components/SVGContainer'

function App() {
  return (
    <div>
      <h1>Wat is het verschil qua drukte van elektrisch laden tussen dag en avond in gemeente Hilversum?</h1>
      <Intro />
      <FactOfTheDay />
      <Dataviz width={900} height={500} />
      <SVGContainer
        width={900}
        height={500}
        x={60}
        y={20} />
      <Insights />
      <FutureVision />
    </div>

  );
}

export default App;
