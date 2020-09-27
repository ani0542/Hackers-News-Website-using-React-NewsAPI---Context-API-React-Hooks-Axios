import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  // const apiKey = "47b0165f22284b308e29c354276d0b56";
  // http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-27&sortBy=publishedAt&apiKey=47b0165f22284b308e29c354276d0b56
  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-27&sortBy=publishedAt&apiKey=47b0165f22284b308e29c354276d0b56`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
