import './AddItemForm.css';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
	AddItem,
	UpdatePreparedAddItem,
} from "../../../redux/ActionCreators";

const AddItemForm = () => {
	let {prepared_id} = useSelector(
		state => state.AppData.MenuData.AddItemData
	)
	let dispatch = useDispatch()
	
	const add_item = () => {
		const addItemAction = AddItem()
		dispatch(addItemAction)
	}
	
	const update_item = (elem) => {
		const id = elem.target.value
		const updateItemAction = UpdatePreparedAddItem(id)
		dispatch(updateItemAction)
	}
	return (
		<div className="add_item_form">
			<p><input type='text'
					  onChange={ update_item }
					  value={ prepared_id }
					  placeholder='id'/></p>
			
			<p><button onClick={ add_item }>Add item</button></p>
		</div>
	)
}

export default AddItemForm;