import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Header: React.FC = () => {

    return (
        <>
            <div className={"bg-birch p-6"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <Link to={"/"} className={"text-xl font-bold text-purple-100 hover:text-purple-dark"}>REACT-EFFECTOR</Link>
                    <div className={"flex gap-8"}>
                        <Link to={"/todos"} className={"font-bold text-purple-100 hover:text-purple-dark"}>Todos</Link>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto py-8"}>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
