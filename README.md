# TfL Tubelines Status App

A simple React App to monitor the current status of the London Underground by using the TfL API endpoint at `https://api.tfl.gov.uk/line/mode/tube/status`.

## Deployment

This project has been deployed and is hosted at 

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

The objective of this app was to educate myself about lifecycle methods and API requests. The app is built in React with classical and functional components.

I started by connecting to the API endpoint with Insomnia REST Client. Once I was satisfied my API request getting the expected response, I installed the Axios dependency and wrote an asynchronous GET request to get data from the endpoint.


The program I wrote leverages the Axios request to fetch data from the TfL API endpoint. The method is called when the page mounts, and re-called with a setInterval method every 60 seconds, to refresh the tube status every one minute. 

```javascript
  getData = async () => {
    const res = await getAllStatuses()
    // console.log('Hello APIs', res.data)
    this.setState({ tubeLines: res.data })
  }
```

The interval is cleared when the page unmounts. I'm then mapping to produce an instance of the component TubeLine.js for each tube line, with the name and the status.