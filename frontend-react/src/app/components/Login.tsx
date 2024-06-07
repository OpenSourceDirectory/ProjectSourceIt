'use client'

import React, { useContext } from "react";
import styled from "styled-components";
import { Github } from "../icons/Github";
import { envIndex } from "../store/EnvIndex";

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

export const Login = () => {
    const { client_id, redirect_uri } = envIndex;

    const loginLink = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`;
    console.log('loggin github link', loginLink)

    return (
        <Wrapper>
            <LoginLink
                href={loginLink}
            >
                <LinkText>Github sign in</LinkText>
                <Github />
            </LoginLink>
        </Wrapper>
    );
}