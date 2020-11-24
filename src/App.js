import Intro from './components/Intro';
import FactOfTheDay from './components/FactOfTheDay';
import Dataviz from './components/Dataviz';
import Insights from './components/Insights';
import FutureVision from './components/FutureVision';
import { SVGContainer } from './components/SVGContainer';

function App() {
	return (
		<>
			<h1>
				Wat is het verschil qua drukte van elektrisch laden tussen dag
				en avond in gemeente Hilversum?
			</h1>
			<Intro />
			<FactOfTheDay />
			<SVGContainer width={1100} height={600} />
			<Dataviz width={1100} height={600} />
			<Insights />
			<FutureVision />
		</>
	);
}

export default App;
