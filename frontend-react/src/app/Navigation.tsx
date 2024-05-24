import { useState } from 'react';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';


const NavigationWrapper = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavigationList = styled.ul`
    padding: 10px;
    border: 1px solid #EE004C;
    border-radius: 50px;
    width: 100%;
    text-align: center;
`;

const NavigationOption = styled.div<{ $isSelected: boolean }>`
    font-weight: ${p => p.$isSelected ? 600 : 500};
    font-size: ${p => p.$isSelected ? 22 : 20}px;
    padding: 2px 5px;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    cursor: pointer;
    color: ${p => p.theme.primary};

    &:hover {
        background: ${p => p.theme.hover};
    }
`;

export enum FocusAreaTypes {
    About,
    Login,
    Account,
    FeaturedProjects,
    WatchedProjects
}

export interface NavigationItem {
    type: FocusAreaTypes,
    text: string
}

export const NavigationItems = [
    { type: FocusAreaTypes.About, text: 'About' },
    { type: FocusAreaTypes.Login, text: 'Login' },
    { type: FocusAreaTypes.Account, text: 'Account' },
    { type: FocusAreaTypes.FeaturedProjects, text: 'Featured Projects' },
    { type: FocusAreaTypes.WatchedProjects, text: 'Watched Projects' }
]

export const Navigation = ({
    focusAreaDisplay,
    setFocusAreaDisplay
}: {
    focusAreaDisplay: FocusAreaTypes;
    setFocusAreaDisplay: (type: FocusAreaTypes) => void;
}) => {
    const [selectedPage, setSelectedPage] = useState<FocusAreaTypes>(FocusAreaTypes.About);
    const [orderedNavigationItems, setOrderedNavigationItems] = useState<NavigationItem[]>(NavigationItems);

    const handleNavigationClick = (item: NavigationItem) => {
        setOrderedNavigationItems([
            item,
            ...orderedNavigationItems.filter(i => i !== item)
        ]);
        setSelectedPage(item.type);
        setFocusAreaDisplay(item.type);
    }

    return (
        <NavigationWrapper>
            <Flipper flipKey={orderedNavigationItems.map(i => i.type).join('')}>
                <NavigationList className="list">
                    {orderedNavigationItems.map(i => {
                        const key = i.type;
                        return (
                            <Flipped key={key} flipId={key}>
                                <NavigationOption
                                    key={key}
                                    $isSelected={selectedPage === i.type}
                                    onClick={() => handleNavigationClick(i)}>
                                    {i.text}
                                </NavigationOption>
                            </Flipped>
                        )
                    })}
                </NavigationList>
            </Flipper>
        </NavigationWrapper>
    )
}