import React from 'react'
import Contact from './Contact'

describe("Contact tests", () => {

    it('render correctly ', () => {
        const { container } = render(<Contact />);
        expect(container).toMatchSnapshot();
    });

});