import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/AuthProvider";
import { Github } from "../icons/Github";

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
    const { state } = useContext(AuthContext);
    const { client_id, redirect_uri } = state;

    return (
        <Wrapper>
            <LoginLink
                href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
            >
                <LinkText>Github sign in</LinkText>
                <Github />
            </LoginLink>
        </Wrapper>
    );
}