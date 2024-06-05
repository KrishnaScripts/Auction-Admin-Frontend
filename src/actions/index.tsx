import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';
import { Dispatch } from 'react';
import { History } from 'history';
import { LOGIN } from '../common/apiConstatnts';

interface ValuesProps {
    name: string;
    password: string;
    history?: History;
}

export const authAction = (values: ValuesProps, redir: () => void) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const resp = await axios.post(LOGIN, values);
            if(resp.data.data && resp.data.data != null){
                localStorage.setItem("token", resp.data.data);
                dispatch({ type: AUTH_USER, payload: resp.data.token });
                window.location.href = '/';
            }
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: "Not authorized" });
        }
    }
};