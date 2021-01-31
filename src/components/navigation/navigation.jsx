import React from "react";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    const {navigations} = props;
    return (
        <div className="main_sidebar">
            <div className="sidebar">
                <div className="sidebar_innr" data-simplebar>
                    <div className="sections">
                        <ul>
                            {navigations.map((item)=> {
                                return (
                                    <li className="active" key={item.title}>
                                        <Link to={item.url} >
                                            <img src={item.icon} width="26" height="26" alt={item.title}/><span> {item.title} </span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navigation;
