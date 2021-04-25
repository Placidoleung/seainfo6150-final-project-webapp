import React from 'react'
import Form from './Form'

describe("Form tests", () => {

    it('render correctly ', () => {
        const { container } = render(<Form />);
        expect(container).toMatchSnapshot();
    });

});