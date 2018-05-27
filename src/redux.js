const REQUEST_IMAGE = "REQUEST_IMAGE";
const IMAGE_SUCCESS = "IMAGE_SUCCESS";
const IMAGE_FAILURE = "IMAGE_FAILURE";

const initialState = {
    fetching: false,
    image: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_IMAGE:
            return {
                ...state,
                fetching: true,
                error: null
            };
            break;
        case IMAGE_SUCCESS:
            return {...state,
                fetching: false,
                image: action.image
            };
            break;
        case IMAGE_FAILURE:
            return {
                ...state,
                fetching: false,
                dog: null,
                error: action.error
            };
            break;
        default:
            return state;
    }
}