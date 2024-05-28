import styled from "styled-components";
import { FocusAreaTypes } from "./Navigation";
import { AboutPage } from "./about/AboutPage";


const FocusAreaWrapper = styled.div`
    margin-left: 8px;
    margin-right: 8px;
`;

export const FocusArea = ({
    displayPage
}: {
    displayPage: FocusAreaTypes
}) => {

    let page: React.ReactNode = null;

    switch (displayPage) {
        case FocusAreaTypes.About:
            page = <AboutPage />;
            break;
        case FocusAreaTypes.Account:
            page = <div>{'Account'}</div>;
            break;
        case FocusAreaTypes.FeaturedProjects:
            page = <div>{'FeaturedProjects'}</div>;
            break
        case FocusAreaTypes.WatchedProjects:
            page = <div>{'WatchedProjects'}</div>;
            break
    }

    return (
        <>
            {page}
        </>
    )
}