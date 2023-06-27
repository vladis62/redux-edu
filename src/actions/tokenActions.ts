import { Action, SET_TOKEN } from "../../store";

export const setToken = (token: string): Action => ({
    type: SET_TOKEN,
    payload: {
        token
    },
});