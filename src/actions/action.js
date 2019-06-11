import * as actionTypes from './actionTypes';

export const loadData = () => {
    return dispatch => {
        dispatch(loadDataSuccess());
    }
}

export const newList = (listTitle) => {
    let newListData = {
        listData : [
            {   
                title: listTitle,
                id: listTitle +  Math.floor(Math.random() * Math.pow(10,10)),
                cards : []
            }
        ]
    };
    return dispatch => {
        dispatch(newListSucces(newListData));
    }
}

export const newCard = (id, value) => {
    return dispatch => {
        dispatch(newCardSuccess(id, value));
    }
}

export const updateCard = (id, value) => {
    return dispatch => {
        dispatch(updateCardSuccess(id, value));
    }
}

export const addComment = (listId, cardId, value) => {
    return dispatch => {
        dispatch(addCommentSuccess(listId, cardId, value));
    }
}

export const deleteCard = (listId, cardId) => {
    return dispatch => {
        dispatch(deleteCardSuccess(listId, cardId));
    }
}

export const deleteList = (id) => {
    return dispatch => {
        dispatch(deleteListSuccess(id));
    }
}

export const loadDataSuccess = () => {
    return {
        type: actionTypes.loadDataSuccess
    };
};

export const newListSucces = (value) => {
    return {
        type: actionTypes.newListSucces,
        data: value
    };
};

export const newCardSuccess = (id, value) => {
    return {
        type: actionTypes.newCardSuccess,
        data: {id : id, value: value}
    };
};

export const updateCardSuccess = (id, value) => {
    return {
        type: actionTypes.updateCardSuccess,
        data: {id : id, value: value}
    };
};

export const addCommentSuccess = (listId, cardId, value) => {
    return {
        type: actionTypes.addCommentSuccess,
        data: {listId : listId, cardId: cardId, value: value}
    };
};

export const deleteCardSuccess = (listId, cardId) => {
    return {
        type: actionTypes.deleteCardSuccess,
        data: {listId: listId, cardId: cardId}
    };
};

export const deleteListSuccess = (id) => {
    return {
        type: actionTypes.deleteListSuccess,
        data: {id: id}
    };
};