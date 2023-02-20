import { useSelector, useDispatch } from "react-redux";
import authOperations from "Redux/auth/auth-operations";
import authSelectors from "Redux/auth/auth-selector";
import { UserContainer, AvatarImage, UserName, ButtonLogOut } from "./UserMenu.styled";
import defaultAvatar from "components/Images/avatar.png";

export const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    return (
        <UserContainer>
            <AvatarImage width="32" src={defaultAvatar} alt="" />
            <UserName style={{ color: "#fff"}}>Welcome, {userName}</UserName>
            <ButtonLogOut omClick={() => dispatch(authOperations.logOut())} type="button">
                Logout
            </ButtonLogOut>
        </UserContainer>
    );
};