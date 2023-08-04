1.  A Movie Rating Application

2.  Topics: Redux, axios, folder-structure, carousel, movie-search, middle-ware

3.  #Steps: - delete unwanted files (reportWebVitals.js, setupTests.js, etc)
    ![App-Flow](./Images/App-Structure.png)
    ![App-Flow](./Images/App-Flow.png)
    ![App-Flow](./Images/Redux-Flow.png)

4.  Create Folders - - Common Folder - Components Folder - features Folder - Images Folder

5.  We are going to use a OMDB API. For that we need a key.

- [OMDB API](https://www.omdbapi.com/)

- OMDB API --> API key -->

- Add routing in App.js

- Add cdn links (google fonts) in index.html

- "What we need to do is we need to fetch the data and then store the data in redux store. What we are going to do is we are going to make an API call in a Home component"

-   ```

    import React, { useEffect } from "react";
    import MovieListing from "../MovieListing/MovieListing";
    import movieApi from "../../common/apis/movieApi";
    import { APIKey } from "../../common/apis/movieApiKey";

    const Home = () => {
    useEffect(() => {
        const movieText = "Harry";
        const fetchMovies = async () => {
        const response = await movieApi
            .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err) => {
            console.log("Err: ", err);
            });

        console.log("The response from API", response);
        };
        fetchMovies();
    }, []);
    return (
        <div>
        <div className="banner-img"></div>
        <MovieListing></MovieListing>
        </div>
    );
    };

    export default Home;

    ```

- in features --> create movies folder & store.js file

    * We need to make the configuration of the store.

    * Redux-toolkit gives us more additional features to make things easier for us to work with.

    * STORE.JS
        
        ```

        import { configureStore } from "@reduxjs/toolkit";

        export const store = configureStore({
        reducer: {},
        });

        ```

    * We need to provide the store in index.js

    * Index.js

        ```

        import React from "react";
        import ReactDOM from "react-dom/client";
        import App from "./App";
      + import { Provider } from "react-redux"; +
      + import { store } from "./features/store"; +

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
        <React.StrictMode>
      +    <Provider store={store}> +
            <App />
      +    </Provider>              +
        </React.StrictMode>
        );

        ```
    

- @36:45 min --> Dipesh words - " Overview of Redux-Toolkits

    * Create a Store
    * Add Provider in index.js
    * And then we need to create a state slice 
    * How to create a slice 
    * "Note: Good part of the redux toolkit is - you don't need to create sepearte files for the actions, reducers, for the constants. We can do that or write it in a single file. We can combine everything in a single slice."
    * You can combine ( actions, reducers, store everything) in slice - redux-toolkit
    * Inside reducer we are going to create actions.
     What is extra Reducer ?
        * This extra Reducers is used when you have a common method to invoke but you have different types of action.




