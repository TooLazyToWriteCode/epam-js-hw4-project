import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";

import Catcher from "@/reducers/catcher";

/** The root reducer. */
export const reducer = combineReducers({
    catcher: Catcher,
});

/** The application store itself. */
export const store = createStore(reducer);

/** The application store dispatch type. */
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** The application store root state type. */
export type RootState = ReturnType<typeof store.getState>;
