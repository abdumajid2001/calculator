import React from 'react';
import Navbar from "../navbar/navbar";
import {Route, Routes} from "react-router-dom";
import Main from "../main/main";
import Require from "../require/require";
import Hardness from "../hardness/hardness";
import Mixture from "../mixture/mixture";

const App = () => {
    return (<>
        <Navbar/>
        <div className={"content"} style={{height: 'calc(100% - 76px)'}}>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={"/require"} element={<Require/>}/>
                <Route path={"/hardness"} element={<Hardness/>}/>
                <Route path={"/mixture"} element={<Mixture/>}/>
            </Routes>
        </div>
    </>);
};

export default App;