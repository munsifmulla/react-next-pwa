import React, { Component } from 'react';

class AboutusComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      title: this.props.title || "About Used page"
    }
  }

  componentDidMount(){
    var a = document.querySelector('.slider')
    console.log($(a).cycle());
  }
  render(){
    return(
      <div>
        <h2>{this.state.title}</h2>
        
        <div className="slider">
          <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_5a1c5b5a72970" alt="Img 1"/>
          <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_5a19aeb7ed988" alt="Img 1"/>
          <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_5a0952df80bf1" alt="Img 1"/>
        </div>
      </div>
    )
  }
}

export default AboutusComponent