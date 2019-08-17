import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { Component } from 'react';
import { useTransition, animated, config } from 'react-spring'
import './styles.css'

const slides = [
  { id: 0, url: 'images/CSC_0316.jpg' },
  { id: 1, url: 'images/DSC_0058.jpg' },
  { id: 2, url: 'images/DSC_0098.jpg' },
  { id: 3, url: 'images/DSC_0108.jpg' },
]

const App = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url}` }}
    />
  ))
}

export default class Caraousel extends Component {
  render() {
    return (
      <div className="carousel-container">Akshay Badodiya
        <App />
      </div>
    );
  }
}