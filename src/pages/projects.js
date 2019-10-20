import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Card from "../components/card"

export default () => (
    <Layout>
        <h1
            css={css`
                display: inline-block;
                // border-bottom: 1px solid;
            `}
        >
            My Projects
        </h1>
        <p
            css = { css`
                font-size: ${rhythm(3/4)};
            `}
        >
            These are the projects that I've done so far:-
        </p>
        <div>
            <div
                css={css`
                    display: inline-block;
                    float: left;
                    left: 0;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                `}
            >
                <Card image="https://source.unsplash.com/user/erondu/600x400" title="Point Cloud Generation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://github.com/nandini-menon/Point-Cloud-Generation"/>
            </div>
            <div
                css={css`
                    display: inline-block;
                    float: right;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                `}
            >
                <Card image="https://source.unsplash.com/user/erondu/600x400" title="Point Cloud Generation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://github.com/nandini-menon/Point-Cloud-Generation"/>
            </div>
        </div>

        <div>
            <div
                css={css`
                    display: inline-block;
                    float: left;
                    left: 0;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                `}
            >
                <Card image="https://source.unsplash.com/user/erondu/600x400" title="Point Cloud Generation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://github.com/nandini-menon/Point-Cloud-Generation"/>
            </div>
            <div
                css={css`
                    display: inline-block;
                    float: right;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                `}
            >
                <Card image="https://source.unsplash.com/user/erondu/600x400" title="Point Cloud Generation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://github.com/nandini-menon/Point-Cloud-Generation"/>
            </div>
        </div>
    </Layout>
)