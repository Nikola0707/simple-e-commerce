// Initial state
const initialState = {
    data: [],
    pending: false,
    error: null
}
//Fetch
let fakeStoreApi = 'https://fakestoreapi.com/products'

const fetchFakeStoreItems = () => {
    return (dispatch) => {
        dispatch(fetchItemsPending())

        fetch(fakeStoreApi).then(res => res.json())
            .then(response => {
                if (!response || !response.length) {
                    dispatch(fetchItemsError('Resource not found'))
                } else {
                    dispatch(fetchItemsSuccess(response))
                }
            })
            .catch(error => {
                dispatch(fetchItemsError(error.message))
            })
    }

}

// Actions
const fetchItemsPending = () => {
    return {
        type: 'FETCH_ITEMS_PENDING',
        payload: null
    }
}

const fetchItemsSuccess = (response) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: { response }
    }
}

const fetchItemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_ERROR',
        payload: { error }
    }
}

// Reducer

const fakeStoreItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_PENDING': {
            return {
                ...state,
                pending: true
            }
        }
        case 'FETCH_ITEMS_SUCCESS': {
            return {
                ...state,
                pending: false,
                data: action.payload.response
            }
        }
        case 'FETCH_ITEMS_ERROR': {
            return {
                ...state,
                pending: false,
                data: [],
                error: action.payload.error
            }
        }
        default: {
            return state
        }
    }
}

export {
    fetchFakeStoreItems,
    fakeStoreItemsReducer
}