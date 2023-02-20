import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 991px) {
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const AvatarImage = styled.img`
    margin-right: 6px;
    border-radius: 50%;
`;

export const UserName = styled.span`
    font-weight: 700;
    color: #fff;
    margin-right: 12px;
`;

export const ButtonLogOut = styled.button`
    border: none;
    outline: none;
    padding: 2px 10px;
    border-radius: 10px;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
    background-color: #212529;
    color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    }
`;