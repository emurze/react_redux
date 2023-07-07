import Action from "./Actions";

let initialState = {
	'BlockItemsData': [
		{id: 'block_1'},
		{id: 'block_2'},
		{id: 'block_3'},
		{id: 'block_4'},
		{id: 'block_5'},
		{id: 'block_6'},
		{id: 'block_7'},
	],

	'MenuData': {
		'AddItemData': {
			'prepared_id': '',
		},
		'PopItemData': {
			'prepared_id': '',
		}
	}
}


const AppReducer = (state = initialState, action) => {
	let stateCopy = structuredClone(state)
	const AddItemData = stateCopy.MenuData.AddItemData
	const PopItemData = stateCopy.MenuData.PopItemData
	
	switch (action.type) {
		case Action.ADD_ITEM:
			const block_item = {
				id: AddItemData.prepared_id,
			}
			block_item.id && stateCopy.BlockItemsData.push(block_item)
			break
		
		case Action.UPDATE_PREPARED_ADD_ITEM:
			AddItemData.prepared_id = action.id
			break
		
		case Action.POP_ITEM:
			const current_id = PopItemData.prepared_id
			let block_index = stateCopy.BlockItemsData.findIndex(
				block => block.id === current_id
			)
			if (block_index !== -1)
				stateCopy.BlockItemsData.splice(block_index, 1)
			break
		
		case Action.UPDATE_PREPARED_POP_ITEM:
			PopItemData.prepared_id = action.id
			break
		
		default: break
	}
	return stateCopy
}

export default AppReducer;