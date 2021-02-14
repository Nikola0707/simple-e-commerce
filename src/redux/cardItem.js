const initialState = [
    {
        addToCard: false,
        cardId: ''
    }
]

const cardClickedAndId = (isClicked, cardId) => {
    return {
        type: 'GET_ISCLICKED_CARDID',
        payload: { isClicked, cardId }
    }
}

const cardItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ISCLICKED_CARDID':
            const { isClicked, cardId } = action.payload
            return {
                addToCard: isClicked,
                cardId: cardId
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