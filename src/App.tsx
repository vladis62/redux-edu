import React, {useState} from "react";
import {hot} from "react-hot-loader/root";
import {Provider} from "react-redux";
import store from "../store";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {commentContext} from "./shared/context/commentContext";
import {UserContexProvider} from "./shared/context/userContext";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider;

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);