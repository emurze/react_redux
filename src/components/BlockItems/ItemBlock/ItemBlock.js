import './ItemBlock.css';

const ItemBlock = (props) => {
	return (
		<div className="item_block">
			{ props.title }
		</div>
	)
}

export default ItemBlock;