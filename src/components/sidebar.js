import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import { MdMail } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
import { stack as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    constructor (props) {
        super(props);
        let width = window.innerWidth;
        if (width > 992) {
            this.state = {
                menuOpen: true,
            }
        } else {
            this.state = {
                menuOpen: false,
            }
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    render () {
        return (

            <div style = {this.state.menuOpen ? {} : {visibility: `hidden`}}>
                <Menu isOpen = {this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)} css = {{ textAlign: `center` }}>
                    <Image />
                    <Link to={`/`}>
                        <h2 css = {{ color: '#ffffff' }} >
                            <strong>Nandini Menon</strong>
                        </h2>
                    </Link>
                    <h4 css={{color:`#ffffff`}}>PASSIONATE LEARNER | FRONT-END WEB DEVELOPER | ROBOTICS & MACHINE LEARNING ENTHUSIAST</h4>
                    <ul
                        css = {{
                            display: 'block',
                            marginLeft: '0',
                            listStyle: `none`
                        }}
                    >
                        <li>
                            <Link
                                to={`/about/`}
                                css = {{ color: '#ffffff' }}
                            >
                            ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/projects/`}
                                css = {{ color: '#ffffff' }}
                            >
                            PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/skills/`}
                                css = {{ color: '#ffffff' }}
                            >
                            SKILLS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/achievements/`}
                                css = {{ color: '#ffffff' }}
                            >
                            ACHIEVEMENTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/blog/`}
                                css = {{ color: '#ffffff' }}
                            >
                            BLOG
                            </Link>
                        </li>
                    </ul>
                    <p css = {{ marginTop: `1rem` }} >
                        <a href="mailto: menonnandini98@gmail.com">
                            <span><MdMail /></span> <span>menonnandini98@gmail.com</span>
                        </a>
                    </p>
                    <ul style={{ listStyle: `none`, display: `inline`, marginLeft: `0` }} >
                        <li
                            style = {{
                                display: `inline-block`,
                                marginLeft: `0.5rem`,
                                marginRight: `0.5rem`,
                            }}
                        >
                            <a href="https://github.com/nandini-menon/" target="_blank" rel="noopener noreferrer">
                                <GoMarkGithub />
                            </a>
                        </li>
                        <li
                            style = {{
                                display: `inline-block`,
                                marginLeft: `0.5rem`,
                                marginRight: `0.5rem`,
                            }}
                        >
                            <a href="https://www.linkedin.com/in/nandinimenon/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Menu>
            </div>
        );
    }
}

export default Sidebar