import React from 'react';
import ReactDOM from 'react-dom'

const Root = () => {
  return (
    <h2>RobbinJacket! Let's get started!</h2>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");


  // const store = configureStore();
  ReactDOM.render(<Root/>, root)
})
