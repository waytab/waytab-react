/*global chrome*/
import React, { Component } from 'react'

import './Background.css'

import Baxter from '../img/baxter.jpg'
import Classroom from '../img/classroom.jpg'
import Commons from '../img/commons.jpg'
import Library from '../img/library.jpg'
import Patio from '../img/patio.jpg'
import School from '../img/school.jpg'

class Background extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
    }

    this.setBackground = this.setBackground.bind(this)

    chrome.storage.sync.get(['background'], ({background}) => {
      let setTo
      switch(background) {
        case 'baxter':
          setTo = Baxter
          break;
        case 'classroom':
          setTo = Classroom
          break;
        case 'commons':
          setTo = Commons
          break;
        case 'library':
          setTo = Library
          break;
        case 'patio':
          setTo = Patio
          break;
        case 'school':
          setTo = School
          break;
        default:
          setTo = School
          break;
      }
      console.log(setTo)
      this.setBackground(setTo)
    })
  }

  setBackground(img) {
    this.setState(state => state.img = img)
  }

  render() {
    return (
      <div className="background" style={{backgroundImage: `url(.${this.state.img})`}}>
      </div>
    )
  }
}

export default Background