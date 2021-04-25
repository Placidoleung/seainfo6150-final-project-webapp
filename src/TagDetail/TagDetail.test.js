import React from 'react'
import TagDetail from "./TagDetail";

describe('TagDetail tests', () => {

    it('render correctly ', () => {
        const news = [
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
          },
          {
              "id": "2",
              "title": "Ether Price Hits New Record High as Analysts Anticipate Supply Drop",
              "shortText": "Analysts say ether will become a deflationary asset after the impending EIP 1559 upgrade.",
              "time": "Apr 22, 2021 at 4:48 a.m. PDT",
              "author": "Omkar Godbole",
              "img": "https://static.coindesk.com/wp-content/uploads/2017/10/climb-mountain-e1507892061820-710x458.jpg",
              "alt": "Climbing mountain",
              "tag": "ETHEREUM",
              "content": "<p>Ether (ETH) rallied to a new lifetime high on Thursday on speculation an impending blockchain upgrade might result in a drop in supply.</p><p>The native cryptocurrency of Ethereum’s blockchain rose to a record high of $2,564 during European trading hours, toppling the previous peak price of $2,546 reached on April 16, according to CoinDesk 20 data.</p><p>“Ethereum’s net annual issuance will drop substantially following the Phase 1.5 ETH 1 to ETH 2 merger,” Messari’s research Wilson Withum tweeted.</p><p>With the upcoming EIP 1559 upgrade, ether will “become a deflationary asset,” Nick Spanos, co-founder of Zap Protocol, told CoinDesk. “This feature will reduce the coin supply and have a corresponding effect on the price, creating an attraction point for more buyers.”</p><p>“ETH/BTC is getting a lot of attention as it broke above its long-term resistance of 0.04,” Pankaj Balani, co-founder and CEO of the Singapore-based Delta Exchange, said. “We might see ETH-BTC push through 0.10. Expect sharp moves though, first to 0.06 in the coming weeks and subsequently to 0.1.”</p>"
          },
        ];

        const tag = "BITCOIN"

        const {container} = render(<TagDetail news={news} tag={tag}/>);
        expect(container).toMatchSnapshot();
    });

})