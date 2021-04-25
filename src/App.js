import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import NewsDetail from "./NewsDetail/NewsDetail.jsx";
import Error from "./Error/Error.jsx";
import { isEmpty } from "lodash";
import TagDetail from "./TagDetail/TagDetail.jsx";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";


function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo2463426.mockable.io/news");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  // article={fetchedData.filter(article => article.id === match.params.id)}
  // console.log(article);

  return isEmpty(fetchedData) ? null : (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} >
          <Home news={Object.values(fetchedData)} />
        </Route>
        <Route
            path="/news/:id"
            exact
            render={({ match }) => (
                // getting the parameters from the url and passing
                // down to the component as props
                <NewsDetail
                    key={match.params.id}
                    article={fetchedData[match.params.id]}
                />
            )}
        />
        <Route
            path="/tags/:tag"
            exact
            render={({ match }) => (
                // getting the parameters from the url and passing
                // down to the component as props
                <TagDetail
                    tag={match.params.tag}
                    news={Object.values(fetchedData)}
                />
            )}
        />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
