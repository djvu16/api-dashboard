import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";

const NoPageFound = () => {
    const match=useRouteMatch();
    console.log(match);

    return(
        <Fragment>
            <h2>{match.path}</h2>
            <p>Invalid URL,Page not found</p>
        </Fragment>
    )
} 

export default NoPageFound;