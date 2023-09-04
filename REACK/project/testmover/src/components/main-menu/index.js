import ListItem from './list-item';


const MainMenu = ({menuItem}) => {
    return (
        <ul className="menulist">
            <ListItem menuItem = {menuItem[0]}></ListItem>
            <ListItem menuItem = {menuItem[1]}></ListItem>
            <ListItem menuItem = {menuItem[2]}></ListItem>
            <ListItem menuItem = {menuItem[3]}></ListItem>
        </ul>
    )
}

export default MainMenu;