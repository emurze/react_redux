import './AddItemForm.css';
import React from 'react';
import {connect} from "react-redux";
import {
	AddItem,
	UpdatePreparedAddItem,
} from "../../../redux/ActionCreators";

const AddItemForm = (props) => {
	const update_item = (elem) => {
		const id = elem.target.value
		return props.UpdatePreparedItem(id)
	}
	return (
		<div className="add_item_form">
			<p><input type='text'
					  onChange={ update_item }
					  value={ props.prepared_id }
					  placeholder='id'/></p>
			
			<p><button onClick={ props.AddItem }>Add item</button></p>
		</div>
	)
}

const mapStateToProps = (state) => {
	const AddItemData = state.AppData.MenuData.AddItemData
	return {
		'prepared_id': AddItemData.prepared_id,
		'prepared_title': AddItemData.prepared_title
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		'AddItem': () => {
			const action = AddItem()
			return dispatch(action)
		},
		'UpdatePreparedItem': (id) => {
			const action = UpdatePreparedAddItem(id)
			return dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);