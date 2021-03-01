import { renderToString } from 'react-dom/server';
import * as React from "react"
import {App} from "../src"

describe('<App />', () => {
    it('renders without throwing on the server', () => {
        expect(() => renderToString(<App text="" />)).not.toThrow()
    });

    it('renders provided text', () => {
        expect(renderToString(<App text="It works" />)).toContain("It works")
    });
});
