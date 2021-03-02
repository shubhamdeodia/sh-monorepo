import * as React from "react"
import { Main } from "@sh/components"

export interface AppProps {
    text: string
}

export const App: React.VFC<AppProps> = ({ text }) => <Main text={text} />
