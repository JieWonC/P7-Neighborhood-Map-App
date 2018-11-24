import React, { Component } from "react";
import ToggleButton from "./ToggleButton";

class Header extends Component {

    toggleSidebarHandler = () => {
        let sidebar = document.getElementById("sidebar")
        let map = document.getElementById("map")

        if (sidebar.className !== "hidden") {
            sidebar.className = "hidden"
            map.className = "fullMap"
        } else {
            sidebar.className = null
            map.className = "map"
        }
    }

    render() {
        return (
            <nav id="nav">
                <div id="toggle-button">
                    <ToggleButton click={this.toggleSidebarHandler} />
                </div>
                <div className="spacer" />
                <h1 id="header-title" aria-label="Page title">Maui Island Surf Locations</h1>
            </nav>
        )
    }
}

export default Header;