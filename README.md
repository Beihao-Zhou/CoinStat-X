# CoinStat-X
## Inspiration
After I got my first salary as a tutor a few years ago, I kept thinking about a question –  how to manage my money? I attempted to invest in financing products and the stock market and enjoyed the process of boosting my assets in these ways. In 2017, I considered investing in cryptocurrency, but eventually, I did not due to its high risk; I missed the boat. I believe many people might have similar experiences, but what’s important is that the next boat is about to arrive, and we wish to make sure that this time we would be on the boat.  

We probably attempted to collect information in order to buy the most potential cryptocurrency, but were lost among countless posts that hold opposite opinions. I hope that we can have a platform that shares the latest cryptocurrency information, which enables the investors to observe the market trend at any time. 

## What it does
CryptoStat X is a web app that generates global cryptocurrency statistics, exchange platforms information, and the latest news. For each top cryptocurrency, detailed information is presented, including history illustrations, figures like market share, line charts that visualize the change of price and much more. Given most investors are new to cryptocurrencies, an AI voice assistant can provide users with basic information about cryptocurrencies (e.g. how and where to buy), as well as broadcast the real-time price of Bitcoin. The voice assistant can even carry out basic mathematical calculations with large numbers if users wish to further analyze data and ask their math questions. 

## How I built it
CoinRanking API is used for fetching cryptocurrencies data; meanwhile, cryptocurrencies news is collected by using Bing News Search API. Furthermore, I developed the app using React, and the Redux toolkit is integrated to manage the data fetch by API. Last but not least, Alan AI, a complete Voice AI Platform, allows me to embed a contextual voice assistant into the application UI.

## Challenges I ran into
- In the beginning, some data was always undefined when being fetched from API, so that the page could not be rendered; after searching and debugging, I created a Loader component and rendered it when data was still being fetched. 
- Chart.js did not work when I implemented it as before (I generated charts using the library for other projects before.). After searching the documentation, I found that it was upgraded and fixed the bug. 

## Accomplishments that I've proud of
- Successfully created this web application with a voice assistant
- Managed to create an information platform that can deal with the real-world problem

## What I learned
- Use Redux toolkit to centralize the data fetched by API, enabling state persistence 
- Generate visualized history charts using chart.js, displaying data in a perceivable way
- Design layout and improve user interface using Ant Design

## What's next for CoinStat X
- Sections regarding other kinds of investment, such as financing products, stock market and funds, could also be included in the web app for all kinds of investors
- The AI voice assistant may further read news for users, help them scroll down the page, and search for news when they ask. Users can completely have their hands free when using the web app.

