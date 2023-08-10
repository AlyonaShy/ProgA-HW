import MainMenu from "../main-menu";

const Header = ({menuItem}) => {
    return (
        <div className="header">
            <MainMenu menuItem = {menuItem}></MainMenu>
        </div>
    )
}
export default Header;