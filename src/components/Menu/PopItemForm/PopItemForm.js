import './PopItemForm.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {PopItem, UpdatePreparedPopItem} from "../../../redux/ActionCreators";

const PopItemForm = () => {
	let {prepared_id} = useSelector(
		state => state.AppData.MenuData.PopItemData
	)
	let dispatch = useDispatch()
	
	const pop_item = () => {
		const pop_action = PopItem()
		dispatch(pop_action)
	}
	const update_item = (elem) => {
		const id = elem.target.value
		const update_action = UpdatePreparedPopItem(id)
		return dispatch(update_action)
	}
	
	return (
		<div className="pop_item_form">
			<p><input type='text'
					  onChange={ update_item }
					  value={ prepared_id }
					  placeholder='id' /></p>
			
			<p><button onClick={ pop_item }>Pop item</button></p>
		</div>
	)
}


export default PopItemForm;