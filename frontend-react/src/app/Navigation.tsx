import { Component } from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

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

const NavigationItem = styled.div<{ $isSelected: boolean }>`
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

interface NavigationState {
    orderedNavigationItems: NavigationItem[];
    selectedPage: FocusAreaTypes;
}

interface NavigationProps {
    focusAreaDisplay: FocusAreaTypes;
    setFocusAreaDisplay: (type: FocusAreaTypes) => void;
}

export class Navigation extends Component<NavigationProps, NavigationState> {

    constructor(props: NavigationProps) {
        super(props);

        this.state = {
            orderedNavigationItems: NavigationItems,
            selectedPage: FocusAreaTypes.About
        };
        
        this.handleNavigationClick = this.handleNavigationClick.bind(this);
    }

    handleNavigationClick(item: FocusAreaTypes) {
        this.setState({
            orderedNavigationItems: [NavigationItems.find(i => i.type === item)!, ...this.state.orderedNavigationItems.filter(i => i.type !== item)],
            selectedPage: item
        })
        this.props.setFocusAreaDisplay(item);
    }

    render() {
        return (
            <NavigationWrapper>
                <FlipMove
                    duration={700}
                    delay={0}
                    easing='ease-in-out'
                    staggerDelayBy={20}
                    enterAnimation="elevator"
                    leaveAnimation="elevator"
                    staggerDurationBy={15}
                    typeName="ul">
                    <NavigationList>
                        {this.state.orderedNavigationItems.map(i => {
                            return (
                                <NavigationItem
                                    key={i.type}
                                    $isSelected={this.state.selectedPage === i.type}
                                    onClick={() => this.handleNavigationClick(i.type)}>
                                    {i.text}
                                </NavigationItem>
                            )
                        })}
                    </NavigationList>
                </FlipMove>
            </NavigationWrapper>
        );
    }
}