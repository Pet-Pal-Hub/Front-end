// import {RoutePathNames} from "../../../src/Routes/RoutePathNames";
import {IoHome} from "react-icons/io5";
import {GiMailbox} from "react-icons/gi";
import {FaBookmark} from "react-icons/fa";
// import {removeUserLocalStorageData} from "../../../src/Authentication/UserAuthentication";
import {RiLogoutBoxLine} from "react-icons/ri";
// import {useNavigate} from "react-router-dom";
import React from "react";


export const ProfileSideMenu = (props) => {

    const profileAttributes = props.profileAttributes

    // const navigate = useNavigate();

    return (
        <div className="profile-sidebar">
            <div className="profile-header">
                <div className="profile-pic"></div>
                <div className="profile-name"> {profileAttributes.firstName + " " + profileAttributes.lastName} </div>
                <div className="profile-desc"> {profileAttributes.role} </div>
            </div>
            <div className="profile-menu">
                < div className="website-nav">
                    <div className="menu-item" onClick={() => {
                     //   navigate(RoutePathNames.dashboard)
                    }
                    }>
                        <i><IoHome/></i>
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <i>
                            <GiMailbox/>
                        </i>
                        <span>Messages</span>
                    </div>
                    <div className="menu-item" onClick={() => {
                    //    navigate(RoutePathNames.myEvents)
                    }}>
                        <i>
                            <FaBookmark/>
                        </i>
                        <span>My Events</span>
                    </div>
                </div>
                <div className="menu-item" onClick={
                    () => {
                 //       removeUserLocalStorageData()
                       // navigate(RoutePathNames.dashboard)
                    }
                }>
                    <i><RiLogoutBoxLine/></i>
                    <span>Log out</span>
                </div>
            </div>
        </div>
    )
}