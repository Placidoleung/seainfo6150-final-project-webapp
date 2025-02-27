import React from 'react'
import NewsDetail from "./NewsDetail";

describe('NewsDetail tests', () => {

    it('render correctly ', () => {
        const article = 
          {
            "id": "1",
            "title": "Bitcoin Miner Manufacturer Ebang Sued for ‘Misleading’ Statements, Financials",
            "shortText": "The lawsuit comes on the heels of a research report that highlights the allegedly misleading business practices.",
            "time": "Apr 21, 2021 at 9:37 a.m. PDT",
            "author": "Colin Harper",
            "img": "https://static.coindesk.com/wp-content/uploads/2021/04/bill-oxford-OXGhu60NwxU-unsplash-1-710x458.jpg",
            "alt": "Justice",
            "tag": "BITCOIN",
            "content": "<p>A class-action lawsuit filed federal court seeks damages from Chinese bitcoin miner manufacturer Ebang for allegedly misleading investors about its financials and business activities.</p><p>The plaintiff, Konstantin Zeva, filed the class action on behalf of himself and others in the United States District Court of New Jersey. Zeva’s suit claims Ebang committed fraud by using initial public offering (IPO) funds for investments rather than business development, inflating sales numbers, selling defective hardware and generally falsely advertising positive business developments.</p><p>The suit cites an investment report by Hindenburg Research that points to the alleged fraud and anemic financials Zeva and other investors blame for their losses. Ebang, which began trading publicly in June of last year, saw its shares tumble following the report. The stock has lost over half its value over the month and is currently trading at $4.24 a share.</p><p>“Throughout the Class Period, Defendants made materially false and/or misleading statements as well as failed to disclose material adverse facts about the Company’s business, operations, and prospects,” a court filing reads. “As a result of Defendants’ wrongful acts and omissions, and the precipitous decline in the market value of the Company’s shares, Plaintiff and other Class members have suffered significant losses and damages.”</p><p>Ironically, the legal troubles come to Ebang at a time when other leaders in the ASIC field, like Bitmain and Whatsminer, can’t fill orders from industrial mining farms quickly enough.</p>"
        };

        const {container} = render(<NewsDetail article={article}/>);
        expect(container).toMatchSnapshot();
    });

})