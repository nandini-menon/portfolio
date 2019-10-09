import React from 'react'
import Image from '../components/image'
import { stack as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu width={ '20vw' } isOpen noOverlay>
                <Image />
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default Sidebar