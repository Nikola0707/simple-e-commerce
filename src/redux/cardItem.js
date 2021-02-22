const initialState = {
    addToCard: false,
    cardId: '',
    price: '',
    image: ''
}

const cardClickedAndId = (isClicked, cardId, price, image) => {
    return {
        type: 'GET_ISCLICKED_CARDID',
        payload: {
            isClicked,
            cardId,
            price,
            image
        }
    }
}

const cardItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ISCLICKED_CARDID':
            const {
                isClicked,
                cardId,
                price,
                image } = action.payload
            return {
                addToCard: isClicked,
                cardId: cardId,
                price: price,
                image: image
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