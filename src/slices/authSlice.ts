import { User } from '../types/User';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Step } from '../types/Step';


interface AuthState {
    user: User;
}

const initialState: AuthState = {
    user: {
        fullName: '',
        displayName: '',
        workSpaceName: '',
        workSpaceUrl: '',
        planType: ''
    }
}

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<User>) => {
            state.user = { ...state.user, ...action.payload }
        },

    },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice;
