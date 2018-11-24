import React from "react";
// import { Link } from 'react-router-dom'

// Components

// Main component that all other components will load with
// Components load in at: this.props.children
export default class Root extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation ///////////////////////////////////////////////////// */}
        <div className="navigation">Mandelbrot Fractal Set Generator</div>
        <div className="sub-navigation">
          <small>
            <span className="text-muted">RPi Cluster status: </span>
            192.168.1.47 <span className="text-success mr-2">(online)</span>
            192.168.1.48 <span className="text-success mr-2">(online)</span>
            192.168.1.49 <span className="text-success mr-2">(online)</span>
            192.168.1.50 <span className="text-success mr-2">(online)</span>
          </small>
        </div>

        {/* Children /////////////////////////////////////////////////////// */}
        {this.props.children}
      </div>
    );
  }
}
