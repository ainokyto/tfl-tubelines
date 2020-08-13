# TfL Tubelines Status App

A simple React App to monitor the current status of the London Underground by using the TfL API endpoint at `https://api.tfl.gov.uk/line/mode/tube/status`.

## Getting Started

### Deployment

This project has been deployed with and is hosted at 

### Git Clone

To clone the code on your machine and run the program in your local environment, click the Code button above to check out with HTTPS or SSH. Then run `yarn` in the root level to install dependencies, and `yarn start` to start the server.

## Technologies used
* React
* JSX
* Node.js
* SCSS
* Axios
* Yarn
* Bulma
* Insomnia REST Client

## Approach taken

The objective of this app was to educate myself about lifecycle methods and API HTTP requests, namely GET. The app is built mobile-first in React with classical and functional components.

I started by hooking into to the TfL API endpoint with Insomnia REST Client. Once I was satisfied my HTTP request was giving the response I expected, I installed the Axios dependency and wrote an asynchronous GET request to get data from the endpoint.

The program I wrote leverages the Axios request to fetch data from the TfL API endpoint. The method is called when the page mounts, and re-called with a `setInterval` method every 60 seconds, to refresh the tube status every one minute. 

```javascript
  getData = async () => {
    const res = await getAllStatuses()
    // console.log('Hello APIs', res.data)
    this.setState({ tubeLines: res.data })
  }
```

The interval is cleared when the page unmounts. I'm then mapping to produce an JSX instance of the reusable component `TubeLine.js` for each tube line in the dataset, with the respective name and status.