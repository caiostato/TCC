import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";



import MapController from '../controllers/map-controller';
import MenuController from "../controllers/menu-controller";

const Routing = () => {
    return(
        <BrowserRouter>

            <Routes>
                    <Route path="/" exact element={
                        <div>
                            <MenuController/>
                            <MapController/>
                        </div>
                    }/>
            </Routes>    

        </BrowserRouter>
    )
}

export default Routing;