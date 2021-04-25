import React from 'react'
import NavBar from './NavBar'

describe("NavBar tests", () => {

    it('render correctly ', () => {
        const { container } = render(<NavBar />);
        expect(container).toMatchSnapshot();
    });

});