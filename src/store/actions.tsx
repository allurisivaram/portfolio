
import {ADD_USER, REMOVE_USER} from './constraints'

const addUser = (user:string) => (dispatch:any, getState:any) => {

    const { 
        userReducer:{users} 
    } = getState(); 

    const hasUser = users.find((e:any) => e.user === user)

    if(!hasUser && user !== '')
      dispatch({
        type: ADD_USER,
        payload: [{id:user, user}, ...users]
      })
}


const removeUser = (user:any) => (dispatch:any, getState:any) => {
    const { 
        userReducer:{users} 
    } = getState(); 

      dispatch({
        type: REMOVE_USER,
        payload: users.filter((e:any) => e.id !== user.id)
      })
}


export {addUser, removeUser}