import React, {Suspense} from "react";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Header from "./layout/Header";
import Main from "./pages/Main/index";
import Todos from "./pages/Todos/index";
import Fallback from "./components/Fallback";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Header />}
            >
                <Route index element={<Main />} />
                <Route path={"todos"} element={<Todos />}  />
                <Route path={"*"} element={<Main />} />
            </Route>
        </>
    ));

    return (
        <>
            <Suspense fallback={<Fallback />}>
                <RouterProvider router={router}/>
            </Suspense>
        </>
    )
}

export default App;
