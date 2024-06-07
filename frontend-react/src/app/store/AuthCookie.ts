'use server'

import { cookies } from 'next/headers'

const cookieStore = cookies();

export const initialState = {
    isLoggedIn: cookieStore.get("isLoggedIn")?.value || false,
    user: JSON.stringify(cookieStore.get("user")?.value) || null
}

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN": {
            cookieStore.set('isLoggedIn', action.payload.isLoggedIn, { secure: true })
            cookieStore.set('user', JSON.stringify(action.payload.user), { secure: true })
            return {
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user
            };
        }
        case "LOGOUT": {
            cookieStore.delete('isLoggedIn');
            cookieStore.delete('user');
            return {
                isLoggedIn: false,
                user: null
            };
        }
        default:
            return {
                isLoggedIn: false,
                user: null
            };
    }
};