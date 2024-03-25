import './App.css';
import { Staff } from './Components/EmployeeArea/Staff/Staff';
import { BestSeller } from './Components/GameArea/BestSeller/BestSeller';
import { GameCard } from './Components/GameArea/GameCard/GameCard';
import { GameList } from './Components/GameArea/GameList/GameList';
import { RandomGame } from './Components/GameArea/RandomGame/RandomGame';
import { Sale } from './Components/GameArea/Sale/Sale';
import { Clock } from './Components/SharedArea/Clock/Clock';
import { Search } from './Components/SharedArea/Search/Search';

function App() {

    return (
        <div className="App">
            <h1>Welcome to our Games Website</h1>
            <p>Here you can find many games!</p>
            <Search />
            <hr />
            <GameCard />
            <Sale />
            <Staff />
            <GameList />
            <BestSeller />
            <Clock />
            <RandomGame />
        </div>
    );
}

export default App;
