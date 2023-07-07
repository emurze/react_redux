import './Menu.css';
import AddItemForm from "./AddItemForm/AddItemForm";
import PopItemForm from "./PopItemForm/PopItemForm";

const Menu = () => {
	return (
		<nav className="menu">
			<AddItemForm/>
			<PopItemForm/>
		</nav>
	)
}

export default Menu;