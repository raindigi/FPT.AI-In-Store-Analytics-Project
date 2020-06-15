import React from 'react'
import styles from '../../views/Report/Report.css';
import Dashboard from './Dashboard';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="./InputInfo.js">Set up</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand1" href= "./Dashboard.js"> Dashboard</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
    )
}

export default Navbar