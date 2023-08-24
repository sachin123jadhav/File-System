import {createSlice } from "@reduxjs/toolkit"


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state,action){

        },
        deleteUsers(state,action){
            
        },

    }
})

console.log(UserSlice.actions.addUser());

export default UserSlice.reducer
export const {addUser} = UserSlice.actions