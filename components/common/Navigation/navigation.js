import React, { Component } from 'react';
import Link from 'next/link'
import styles from './style.scss'

class Nav extends Component{

  //Locate me
  locateme = () => {
    if (navigator.geolocation) {
      //If Browser supports Geo location
      navigator.geolocation.getCurrentPosition(function (position) {
        //Browser deteced lat and Lng
        console.log(position)
      }, function () {
        //When cant feth the Auto location.
        console.log('Unable to get your location, Please try again.');
      });
    } else {
      //If Browser does not support the Use My location feature
      console.log("Your Browser does not support this feature");
    }
  }

  componentDidMount(){
    this.locateme();
  }
  render(){
    return (
      <div>
        <nav>
          <div className="container">
            <Link as="/" href="/">
              <a className='h2'>Home</a>
            </Link>
            <Link as="/about-me" href="/aboutme">
              <a className='h2'>About me</a>
            </Link>
            <Link as="/about-us" href="/aboutus">
              <a className='h2'>About Us</a>
            </Link>
            <Link as="/Chicken" href="/catList?cat_name=chicken">
              <a className='h2'>Chicken</a>
            </Link>

            <div>
              <Link as="/Chicken/curry-cut" href="/prList?cat_name=chicken&pr_name=curry-cut">
                <a className='h2'>Chicken curry cut</a>
              </Link>
            </div>
          </div>
        </nav>
        <style jsx>
          {styles}
        </style>
      </div>
    )
  }
}
export default Nav;
