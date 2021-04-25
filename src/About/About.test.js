import React from 'react'
import About from './About'

describe("About tests", () => {

    it('render correctly ', () => {
        const { container } = render(<About />);
        expect(container).toMatchSnapshot();
    });

});