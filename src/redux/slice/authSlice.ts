import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../types";
import { loginApi } from "../actions/authActions";

export interface AuthState {
    currentUser: any,
    loading: false
}

const initialState: AuthState = {
    currentUser: undefined,
    loading: false
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.currentUser = action.payload
        }
    },
})

export const authLogin = createAsyncThunk(
    'auth/login',
    async (user: ILogin) => {
        return await loginApi(user)
    }

) 

export const { addUser } = authSlice.actions

export default authSlice.reducer

