import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1
            css={css`
                display: inline-block;
                // border-bottom: 1px solid;
            `}
        >
            About Me
        </h1>
        <p
            css = { css`
                font-size: ${rhythm(3/4)};
            `}
        >
            Hello!! I'm a 4<sup>th</sup> year B.Tech student with specialization in Computer Science and Engineering passionate about learning anything and everything to do with computers. I dabble mostly in Front-end Web Development along with minor interests in Robotics and Machine Learning.
        </p>

        <h2
            css={css`
                display: inline-block;
                border-bottom: 1px solid;
            `}
        >
            ORGANIZATIONS
        </h2>

        <p
            css = { css`
                font-size: ${rhythm(3/4)};
            `}
        >
            I'm a member of the following organizations in my college:-
        </p>
        <ul>
            <li>
                <h3 css={{ marginBottom: `0.5rem` }}>Association for Computing Machinery</h3>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    I joined ACM Student Chapter FISAT during the 1<sup>st</sup> of college (i.e. 2016). Since then I have been an active member of the organization and has helped it grow by participating in and conducting many activities in our college.
                </p>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    Posts Held:-
                    <ul css={{ marginTop: `0.5rem` }}>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>Lead Tutor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>DesignHead</h4>
                            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                    </ul>
                </p>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    Activities Conducted:-
                    <ul css={{ marginTop: `0.5rem` }}>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>Hour of Code 2017:</h4>
                            {/* <img src="../images/about/hoc17.jpg"> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>Machine Learning Workshop</h4>
                            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>ACM India Annual Event</h4>
                            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li>
                            <h4 css={{ fontSize: `${rhythm(3/4)}`, marginBottom: `0.5rem`, }}>Celestia' 19</h4>
                            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                    </ul>
                </p>
            </li>
            <li>
                <h3 css={{ marginBottom: `0.5rem` }}>FISAT Free Software Cell</h3>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    I joined ACM Student Chapter FISAT during the 1<sup>st</sup> of college (i.e. 2016). Since then I have been an active member of the organization and has helped it grow by participating in and conducting many activities in our college.
                </p>
            </li>
            <li>
                <h3 css={{ marginBottom: `0.5rem` }}>Centre for Excellence in Robotics</h3>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    I joined ACM Student Chapter FISAT during the 1<sup>st</sup> of college (i.e. 2016). Since then I have been an active member of the organization and has helped it grow by participating in and conducting many activities in our college.
                </p>
            </li>
            <li>
                <h3 css={{ marginBottom: `0.5rem` }}>FISAT Consultancy Services</h3>
                <p
                    css = {{
                        fontSize: `${rhythm(3/4)}`,
                        marginBottom: `1rem`,
                    }}
                >
                    I joined ACM Student Chapter FISAT during the 1<sup>st</sup> of college (i.e. 2016). Since then I have been an active member of the organization and has helped it grow by participating in and conducting many activities in our college.
                </p>
            </li>
        </ul>

        <h2
            css={css`
                display: inline-block;
                border-bottom: 1px solid;
            `}
        >
            EDUCATION
        </h2>
    </Layout>
)