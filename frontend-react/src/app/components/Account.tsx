
import Styled from "styled-components";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Wrapper = Styled.section`
    
`;

export const Account = () => {
    const { state, dispatch } = useContext(AuthContext);

    const { avatar_url, name, public_repos, followers, following } = state.user

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    }

    return (
        <Wrapper>
            <div className="container">
                <button onClick={() => handleLogout()}>Logout</button>
                <div>
                    <div className="content">
                        <img src={avatar_url} alt="Avatar" />
                        <span>{name}</span>
                        <span>{public_repos} Repos</span>
                        <span>{followers} Followers</span>
                        <span>{following} Following</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}