
import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../providers/AuthProvider";
import { Github } from "../icons/Github";
import { Loading } from "../icons/Loading";

const Wrapper = styled.section`
`;

const LoginLink = styled.a`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const LinkText = styled.div`
    color: ${p => p.theme.primary};
    font-size: 18px;
    font-weight: 600;
`;

// Need to make a /Login page.
export const Login = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });

    const { client_id, redirect_uri } = state;

    useEffect(() => {
        // After requesting Github access, Github redirects back to your app with a code parameter
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        // If Github API returns the code parameter
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, '', newUrl[0]);
            setData({ ...data, isLoading: true });

            const requestData = {
                code: newUrl[1]
            };

            const proxy_url = state.proxy_url;

            if (!proxy_url) {
                return;
            }

            // Use code parameter and other parameters to make POST request to proxy_server
            fetch(proxy_url, {
                method: "POST",
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "LOGIN",
                        payload: { user: data, isLoggedIn: true }
                    });
                })
                .catch(error => {
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    });
                });
        }
    }, [state, dispatch, data]);

    return (
        <Wrapper>
            {data.isLoading ? 
                <Loading />
            : (
                <LoginLink
                    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                    onClick={() => setData({ ...data, errorMessage: "" })}
                >
                    <LinkText>Github sign in</LinkText>
                    <Github />
                </LoginLink>
            )}
        </Wrapper>
    );
}