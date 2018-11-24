import React, { Component } from "react";
import LocationList from "./LocationList";

class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

    filteredLocatonList = () => {
        if (this.state.query.trim !== "") {
            const venues = this.props.venues.filter((locationListing) =>
                locationListing.venue.name
                .toLowerCase()
                .includes(this.state.query.toLowerCase())
            )
            return venues
        }
        return this.props.venues
    }

    inputQueryHandler = (event) => {
        this.setState({ query: event.target.value });
        const markers = this.props.venues.map((venue) => {
            const firstMatched = venue.venue.name
                                .toLowerCase()
                                .includes(event.target.value.toLowerCase());
            const marker = this.props.markers
                            .find((marker) => marker.id === venue.venue.id
            );
            firstMatched ? marker.setVisible(true) : marker.setVisible(false)
            return marker;
        });
        this.props.updateSuperState({ markers: markers });
    };

    render() {
        return (
            <aside id="sidebar" className="hidden" aria-label="sidebar">
                <h3>Find Your Spot</h3>
                <input
                    id="filter"
                    type="text"
                    placeholder=" Eg. Royal"
                    aria-label="filter"
                    role="search"
                    onChange={this.inputQueryHandler}
                />
                <LocationList
                    {...this.props}
                    clickListItem={this.props.clickListItem}
                    venues={this.filteredLocatonList()}
                />
            </aside>
        );
    }
}

export default Sidebar;