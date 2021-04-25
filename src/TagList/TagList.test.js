import React from 'react'
import TagList from "./TagList";

describe('TagList tests', () => {

    it('render correctly ', () => {
        const tags = ["BITCOIN","DEFI"];

        const {container} = render(<TagList tags={tags}/>);
        expect(container).toMatchSnapshot();
    });

})