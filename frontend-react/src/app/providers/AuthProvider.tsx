import { Dispatch, createContext, useReducer } from 'react';
import { initialState, reducer } from '../store/reducer';

export const AuthContext = createContext<{
	state: typeof initialState;
	dispatch: Dispatch<{ type: string; payload?: any }>;
}>({
	state: initialState,
	dispatch: () => null,
});

// TODO, still need to get localstorage working. But otherwise not too bad!
export const AuthProvider = (props: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (<AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>)
}