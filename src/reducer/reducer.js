import * as actionTypes from '../actions/actionTypes';

const initialState = {
    listData: [],
    loading: false,
    allCards: []
};

// const cloneObject = (obj) => {
//     var clone = {};
//     for(var i in obj) {
//         if(obj[i] != null &&  typeof(obj[i])=="object")
//             clone[i] = cloneObject(obj[i]);
//         else
//             clone[i] = obj[i];
//     }
//     return clone;
// }

const updateObject = (oldObject, updatedProperties) => {
    let mergedVal = {
        ...oldObject,
        ...updatedProperties
    };

    mergedVal.listData = oldObject.listData.concat(updatedProperties.listData);

    return mergedVal;
};

const loadDataSuccess = (state) => {
    return state;
}

const newListSucces = (state, action) => {
    return updateObject(state,action.data);
}

const newCardSuccess = (state, action) => {
    // let newState = cloneObject(state);
    let newState = JSON.parse(JSON.stringify(state));
    let listToBeUpdated = newState.listData.filter(item => item.id === action.data.id);
    if (listToBeUpdated.length) {
        let cardData = {
            cardName : action.data.value,
            id: action.data.value +  Math.floor(Math.random() * Math.pow(10,10)),
            comments: []
        }
        listToBeUpdated[0].cards.push(cardData);
        newState.allCards.push(cardData);
    }
    return newState;
}

const updateCardSuccess = (state, action) => {
    // let newState = cloneObject(state);
    let newState = JSON.parse(JSON.stringify(state));
    let updatedCards = action.data.value.map(items => {
        let cardData = newState.allCards.filter(cards => cards.id === items);
        if(cardData[0]) {
            return cardData[0]
        } else {
            return null
        }
    });

    let currentList = newState.listData.filter(items => items.id === action.data.id);
    currentList[0].cards = updatedCards.filter(items => items !== null);
    return newState;
}

const deleteCardSuccess = (state, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    let currentList = newState.listData.filter(items => items.id === action.data.listId);
    if (currentList[0]) {
        let listItem = currentList[0];
        let listCard = listItem.cards.filter(item => item.id !== action.data.cardId);
        let cardData = newState.allCards.filter(item => item.id !== action.data.cardId);
        
        if(listCard && cardData) {
            newState.allCards = cardData;
            currentList[0].cards = listCard;
        }
    }
    return newState;
}

const deleteListSuccess = (state, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    let newList = newState.listData.filter(item => item.id !== action.data.id);
    newState.listData = newList;
    return newState;
}

const addCommentSuccess = (state, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    let list = newState.listData.filter(item => item.id === action.data.listId);
    if (list[0]) {
        let listItem = list[0];
        let listCard = listItem.cards.filter(item => item.id === action.data.cardId);
        let cardData = newState.allCards.filter(item => item.id === action.data.cardId);
        
        if(listCard[0] && cardData[0]) {
            cardData[0].comments.push({
                text: action.data.value,
                id: action.data.value + Math.floor(Math.random() * Math.pow(10,10))
            });
            listCard[0].comments = cardData[0].comments;
        }
    }
    return newState;
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.loadDataSuccess: return loadDataSuccess(state, action);
        case actionTypes.newListSucces: return newListSucces(state, action);
        case actionTypes.newCardSuccess: return newCardSuccess(state, action);
        case actionTypes.updateCardSuccess: return updateCardSuccess( state, action );
        case actionTypes.deleteCardSuccess: return deleteCardSuccess(state, action);
        case actionTypes.deleteListSuccess: return deleteListSuccess(state, action);
        case actionTypes.addCommentSuccess: return addCommentSuccess(state, action);
        default: return state;
    }
};

export default reducer;