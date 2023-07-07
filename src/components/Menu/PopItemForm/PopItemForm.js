import './PopItemForm.css';
import React from "react";
import {connect} from "react-redux";
import {PopItem, UpdatePreparedPopItem} from "../../../redux/ActionCreators";

const PopItemForm = (props) => {
	const update_item = (elem) => {
		const id = elem.target.value
		props.update_prepared_item(id)
	}
	
	return (
		<div className="pop_item_form">
			<p><input type='text'
					  onChange={ update_item }
					  value={ props.prepared_id }
					  placeholder='id' /></p>
			
			<p><button onClick={ props.pop_item }>Pop item</button></p>
		</div>
	)
}

const mapStateToProps = (state) => ({
	'prepared_id': state.AppData.MenuData.PopItemData.prepared_id
})

const mapDispatchToProps = (dispatch) => ({
	'pop_item': () => {
		const pop_action = PopItem()
		return dispatch(pop_action)
	},
	'update_prepared_item': (id) => {
		const update_action = UpdatePreparedPopItem(id)
		return dispatch(update_action)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PopItemForm);