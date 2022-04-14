import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";

import MapController from "../controllers/Map-Controller";

const Routing = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={
                <MapController/>
            }/>
        
        </Routes>    
        </BrowserRouter>
    )
}

export default Routing;