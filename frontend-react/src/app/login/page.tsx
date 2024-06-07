"use client"

import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();
    const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });

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

                    // Navigate back to the main layout now.
                    router.push('/Home');
                })
                .catch(error => {
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    });
                });
        }
    }, [state, dispatch, data]);

    // TODO maybe a loading icon while is loading?
    return null;
}