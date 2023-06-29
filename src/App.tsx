import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {UserContexProvider} from "./shared/context/userContext";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {Provider, useDispatch} from "react-redux";
import {setToken} from "./actions/tokenActions";
import {commentContext} from "./shared/context/commentContext";
import store from "../store";

function useToken() {
    const [token, setToken] = useState("");

    if (window.__token__ && window.__token__ != 'undefined') {
        setToken(window.__token__)
    }

    return [token];
}

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    const [token] = useToken();
    const dispatch = useDispatch();
    useEffect(() => {
        if (token && token != 'undefined') {
            dispatch(setToken(token))
        }
    }, [token])

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <UserContexProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <CardsList/>
                    </Content>
                </Layout>
            </UserContexProvider>
        </CommentProvider>
    );
}

export const App = hot(() =>
    <Provider store={store}>
        <AppComponent/>
    </Provider>
);