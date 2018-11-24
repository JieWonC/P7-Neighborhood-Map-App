import React, { Component } from "react";

class ListItem extends Component {
    render() {
        return (
            <li className="list-item"
                tabIndex="0"
                role="button"
                aria-label="filtered location"
                onClick={() => this.props.clickListItem(this.props)}
            >
                {this.props.venue.venue.name}
            </li>
        )
    }
}

export default ListItem;