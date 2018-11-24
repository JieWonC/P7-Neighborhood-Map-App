# FEND P7: Neighborhood Map - React

This project is my final project in the [Udacity Front End Web Developer Nanodegree program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The goal of the project was to implement the Google Map API and other a third party API like Foursquare.

## Description
- This app displays surf spots of Maui island.
- Corresponding map markers of the list itmes display on the map.
- This map uses the Google Map API and Foursquare API for venue details.

![React Neighborhood Map](https://image.ibb.co/fTXLFV/React-App.png)
*Sorry! Maui island is NOT my neighborhood.*

## Folder Structure
```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── manifest.json
│   └── index.htm
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── component
    │   ├── Header.js
    │   ├── ListItem.js
    │   ├── LocationList.js
    │   ├── Map.js
    │   ├── Sidebar.js
    │   └── ToggleButton.js
    ├── util
    │   └── getGoogleMapAPI.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
```
## Setup Instructions
- Clone the repo or Download a zip file `git clone https://github.com/JieWonC/P7-Neighborhood-Map-App.git`
- Install all needed dependencies with `npm install`
- Start app with `npm start`
- Live preview will opens via `http://localhost:3000/` by your browser.

## Dependencies
- [Reactjs.org](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Google Maps API](https://developers.google.com/maps/documentation/)
- [Foursquare venues](https://developer.foursquare.com/docs/api/venues/details)
- [Axios](https://github.com/axios/axios)

## To Do
Fix some CSS issues.

## License
This application has no license.