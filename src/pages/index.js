import React from "react"
import Layout from "../components/layout";

export default () => (
    <Layout>
        <div
            css = {{
                marginLeft: `10vw`,
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                transform: `translate(-50%, -50%)`,
                textAlign: `center`,
            }}
        >
            <h3>Hello World!!</h3>
            <h1>I'm Nandini Menon</h1>
            {/* <p>
                What do I like to do? Lots of course but definitely enjoy building websites.
            </p> */}
        </div>
    </Layout>

)