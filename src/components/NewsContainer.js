import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsContainer extends Component {
  static propTypes = {}

  render() {
    let {Title,Description,ImageUrl,NewsUrl}=this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!ImageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/14937/production/_129897248_gettyimages-1258251285.jpg":ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{Description}</p>
    <a href={NewsUrl} className="btn btn-primary" target="_blank" >Go somewhere</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsContainer