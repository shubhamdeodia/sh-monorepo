/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { App } from "../src"

export default {
    title: "Example/App",
    component: App,
} as Meta

export const Basic = () => <App text="Hey there" />
