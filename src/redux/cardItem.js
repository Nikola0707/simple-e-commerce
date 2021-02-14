const initialState = [
    {
        addToCard: false,
        cardId: ''
    }
]

const cardClickedAndId = (isClicked, cardId) => {
    return {
        type: 'GET_ISCLICKED_CARDID',
        action: { isClicked, cardId }
    }
}

const cardItemReducer = (state = initialState, action) => {
    switch (action.payload) {
        case 'GET_ISCLICKED_CARDID':
            return {
                ...state,
                addToCard: action.payload.isClicked,
                cardId: action.payload.cardId
            }
        default: {
            return state
        }
    }
}

export {
    cardClickedAndId,
    cardItemReducer
}