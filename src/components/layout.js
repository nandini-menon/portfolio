import React from "react"
import Sidebar from "./sidebar";

export default ({ children }) => (
    <div>
        <Sidebar />
        <div style={{ margin: `0`, Width: `100w`, padding: `0` }}>
            <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
                {children}
            </div>
        </div>
    </div>
)