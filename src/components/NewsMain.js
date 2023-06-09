
import React, { Component } from 'react'
import NewsContainer from './NewsContainer'


export class NewsMain extends Component {
  
  static propTypes = {}

  constructor(){
    super();
    console.log('this is a constructor');
    this.state={
      articles: [],
      loading: false
    } 
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=in&from=2023-05-29&to=2023-05-29&sortBy=popularity&apiKey=827d995de2164005bee10a728d2cf843&pagesize=20"
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({articles: parsedata.articles})
  }
 HandlePrev=()=>{
  console.log("prev button ")

 }
 HandleNext=()=>{
  console.log("NExt button ")
 }
  
  
  render() {
    return (
      <div className='container'><h2>News Mongers- Main Headlines</h2>
         <div className="row my-3">
         {this.state.articles?.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
          <NewsContainer Title={element.title?element.title.slice(0,45):""} Description={element.description?element.description.slice(88):""} ImageUrl={element.urlToImage} 
          NewsUrl={element.ur}/>
        </div>
         })}
    
    
    
    
        
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-primary btn-lg" onClick={this.HandlePrev}>Previous</button>
      <button type="button" className="btn btn-secondary btn-lg" onClick={this.HandleNext}>Next</button>
      </div>
      
      

      </div>
    )
  }
}

export default NewsMain