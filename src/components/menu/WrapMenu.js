import React from 'react';
import '../../styles/components/wrap-menu.css';
import MenuUl from './MenuUl';
import menuProvider from './utils/menuProvider';

class WrapMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { menu:{menuList},openItem,activeItem , match,handleItemClick } = this.props;
        return (
            <MenuUl className="nav-left wrap-menu" menuList={menuList} openItem={openItem} activeItem={activeItem} match={match} handleItemClick={handleItemClick}/>
        );
    }
}

WrapMenu = menuProvider()(WrapMenu);

export default WrapMenu;