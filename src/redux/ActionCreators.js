import Action from "./Actions";

export const AddItem = () => ({type: Action.ADD_ITEM})

export const UpdatePreparedAddItem = (id) => ({
	type: Action.UPDATE_PREPARED_ADD_ITEM,
	id: id,
})

export const PopItem = () => ({type: Action.POP_ITEM})

export const UpdatePreparedPopItem = (id) => ({
	type: Action.UPDATE_PREPARED_POP_ITEM,
	id: id,
})