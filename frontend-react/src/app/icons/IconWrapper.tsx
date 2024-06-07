'use client'

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background: ${p => p.theme.hover};
    }
`;

export const IconWrapper = ({
    children,
    onClickHandle
}: {
    children: React.ReactNode,
    onClickHandle?: () => void
}) => {
    return (
        <Wrapper
            onClick={() => onClickHandle && onClickHandle()}>
                {children}
        </Wrapper>
    )
}

