import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Nav extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News mongers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">political</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">religious</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
  }
}

export default Nav