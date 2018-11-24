import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import { getGoogleMapAPI } from "./util/getGoogleMapAPI";

import './App.css';

class App extends Component {

    state = {
        venues: [],
        markers: [],
        updateSuperState: (obj) => { this.setState(obj); },
    }

    gm_authFailure() {
        let map = document.getElementById("map")
        map.innerHTML = `
            <h1 id="errorMSG">Oops! Something went wrong.</h1>
            <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
        `
    }

    componentDidMount() {
        window.gm_authFailure = this.gm_authFailure
        this.getVenues()
    }

    renderGoogleMap () {
        const API_KEY = "AIzaSyDuJ9_Q2UWbGiDHCLGP7sS-YL1Orjn3O-c";
        getGoogleMapAPI(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=initMap`)
        window.initMap = this.initMap
    }

    getVenues () {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
            client_id: "23OWBFABQKQIRD3QTDUXQRQNWDO4XOVG5LWLVGR0JSFDGY5U",
            client_secret: "HCOFRJ4XB11AW4LJGKZOXJGQE0KMYA1DMM4RCLSXJNLE2S0I",
            query: "surf",
            limit: 12,
            near: "Maui",
            v: "20181120"
        }
        // Request data via Axios https://github.com/axios/axios
        axios
            .get(endPoint + new URLSearchParams(parameters))
            .then(response => {
                this.setState({
                    venues: response.data.response.groups[0].items
                }, this.renderGoogleMap())
            })
            .catch((error) => {
                console.log(`ERROR: ${error}`)
                alert('Error making task progress. See the JavaScript console for technical details.')
            })
    }

    clickListItem = (locationListItem) => {
        const marker = this.state.markers;
        let content = `
            <div id="infowindow" aria-label="infowindow" role="section">
                <h3 id="infowindow-title">${locationListItem.venue.venue.name}</h3>
                <p>${locationListItem.venue.venue.location.formattedAddress[0]}</p>
                <p>${locationListItem.venue.venue.location.formattedAddress[1]}</p>
            </div>`
        marker.filter((marker) => {
            if (marker.id === locationListItem.venue.venue.id) {
                this.state.infowindow.setContent(content)
                this.state.infowindow.open(this.initMap, marker)
                marker.setAnimation(window.google.maps.Animation.BOUNCE)
            } else {
                marker.setAnimation(null)
            }
        });
    };

    // Initialize the Map
    initMap = () => {
        let myLatLng = { lat: 20.7984, lng: -156.3319 }

        // Create a Map
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 10
        })

        // Create an InfoWindow
        const infowindow = new window.google.maps.InfoWindow()
        this.setState({ infowindow: infowindow })

        // Loops Over All Venues and Display Dynamic Markers
        this.state.venues.map((gotVenue) => {
            // Create a Marker
            const marker = new window.google.maps.Marker({
                position: { lat: gotVenue.venue.location.lat,
                            lng: gotVenue.venue.location.lng },
                map: map,
                title: gotVenue.venue.name,
                id: gotVenue.venue.id,
                animation: window.google.maps.Animation.DROP
            })

            // Push marker to state []
            this.setState(() => this.state.markers.push(marker))

            // Display Setting for InfoWindow
            let content = `
                <div id="infowindow" aria-label="infowindow" role="section">
                <h3 id="infowindow-title">${gotVenue.venue.name}</h3>
                <p>${gotVenue.venue.location.formattedAddress[0]}</p>
                <p>${gotVenue.venue.location.formattedAddress[1]}</p>
                </div>
            `
            // Click Event on a Marker
            marker.addListener("click", () => {
                // Reset InfoWidow Content
                this.setState({ content: content })
                // Change the content
                this.state.infowindow.setContent(this.state.content)
                // Open an InfoWindow
                infowindow.open(map, marker)
            })
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main id="main">
                    <Sidebar
                        {...this.state}
                        clickListItem={this.clickListItem}
                    />
                    <Map
                        {...this.state}
                        gm_authFailure = {this.gm_authFailure}
                    />
                </main>
            </div>
        )
    }
}

export default App;
