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
            My Skills
        </h1>
        <p
            css = { css`
                font-size: ${rhythm(3/4)};
            `}
        >
            Updating soon!!
        </p>
    </Layout>
)