const userReducer = (state={users:[]}, action:any) => {
    switch (action.type) {
        case 'ADD_USER':
            return { users: action.payload}

        case 'DELETE_USER':
            return { users: action.payload}

        default:
            return {...state}
            break;
    }
}

export default userReducer