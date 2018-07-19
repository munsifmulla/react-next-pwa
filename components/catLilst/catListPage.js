import React, { Component } from 'react';

class CatListComponent extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    var a = document.querySelector('.slider')
    console.log($(a).cycle());
  }
  render(){
    return(
      <div>
        {this.props.pr_name}
      </div>
    )
  }
}

export default CatListComponent