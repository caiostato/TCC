import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";

import Controller from "../components";

const Routing = () => {

    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" exact element={
                        <Controller />
                    }/>
            </Routes>    
        </BrowserRouter>
    )
}


export default Routing;