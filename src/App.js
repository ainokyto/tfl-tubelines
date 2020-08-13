import React from 'react'
import TubeLines from './components/TubeLines'
// import MediaQueries from './components/MediaQueries'
import Loader from './components/Loader'
import { getAllStatuses } from './lib/api'

class App extends React.Component {
  state = { tubeLines: [] }

  componentDidMount() {
    this.getData()
    this.interval = setInterval(this.getData, 60000)
    this.mediaQuery()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getData = async () => {
    const res = await getAllStatuses()
    // console.log('Hello APIs', res.data)
    this.setState({ tubeLines: res.data })
  }

  mediaQuery = () => {
    console.log(window.matchMedia('(max-width: 400px)'))
  }

  render() {
    if (!this.state.tubeLines) return <Loader />
    return (
      <main className="container is-fluid">
        <header id="header">
          <h1 className="title is-2">
            Tube Lines
          </h1>
        </header>
        <div id="tubeline-containers">
          {this.state.tubeLines.map(line => (
            <TubeLines key={line.id} {...line} />
          ))}
        </div>
      </main>
    )
  }
}

export default App