import './BlockItems.css';
import ItemBlock from "./ItemBlock/ItemBlock";
import {connect} from "react-redux";


const BlockItems = (props) => {
	const ItemBlockSet = props.BlockItemsData.map(
		item => <ItemBlock title={ item.id }/>
	)
	
	return (
		<div className="block_items">
			{ ItemBlockSet }
		</div>
	)
}

const mapStateToProps = (state) => ({
	'BlockItemsData': state.AppData.BlockItemsData,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BlockItems)
