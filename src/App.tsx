import React from "react";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Header from "./layout/Header";
import Main from "./pages/Main";
import Todos from "./pages/Todos";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Header />}
            >
                <Route index element={<Main />} />
                <Route path={"todos"} element={<Todos />} />
                <Route path={"*"} element={<Main />} />
            </Route>
        </>
    ));

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
