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

  registerSW(){
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(function(registration) {
          console.log("Service Worker Registered");
        })
        .catch(function(err) {
          console.log("Service Worker Failed to Register", err);
        })
    }
  }

  addHS(){
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      console.log("Add to home screen");
      deferredPrompt.prompt();
    });

    window.addEventListener('appinstalled', (evt) => {
      app.logEvent('a2hs', 'installed');
      console.log("Installed")
    });
  }

  componentDidMount(){
    this.locateme();
    this.registerSW();
    this.addHS();
  }
  render(){
    return (
      <div>
        <nav>
          <div className="container">
            <Link as="/" href="/">
              <a className='h2'>Home</a>
            </Link>
            <Link as="/about-us" href="/aboutus">
              <a className='h2'>About Us</a>
            </Link>

            <div>
              <Link as="/chicken" href="/catList?cat_name=chicken">
                <a className='h2 btn btn-primary'>Chicken</a>
              </Link>
              <Link as="/red-meat" href="/catList?cat_name=red-meat">
                <a className='h2'>Red meat</a>
              </Link>
              <Link as="/sea-food" href="/catList?cat_name=sea-food">
                <a className='h2'>Sea food</a>
              </Link>
              <Link as="/marinades" href="/catList?cat_name=marinades">
                <a className='h2'>Marinades</a>
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
