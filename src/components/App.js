import './App.css';
import BlockItems from "./BlockItems/BlockItems";
import Menu from "./Menu/Menu";

const App = () => {
    return (
        <div className="app_container">
            <BlockItems/>
            <Menu/>
        </div>
    );
}

export default App;
