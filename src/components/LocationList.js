import React from "react";
import ListItem from "./ListItem";

const LocationList = ({ venues, clickListItem, infowindow, content }) => {
    return (
        <ol id="location-list">
            {venues && venues.map((venue, venueKey) => (
                <ListItem
                    key={venueKey}
                    venue={venue}
                    clickListItem={clickListItem}
                    infowindow={infowindow}
                    content={content}
                />
            ))}
        </ol>
    )
}

export default LocationList;