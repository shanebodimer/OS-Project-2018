import React from "react";

export default class SingleResult extends React.Component {
  render() {
    return (
      <div>
        {/* Image */}
        <center>
          {this.props.size && (
            <img
              src={"http://64.251.149.246/api/img.bmp"}
              className="result-img"
            />
          )}
          {!this.props.size && <div className="placeholder" />}
          <pre>{this.props.size ? this.props.size : "Waiting..."}</pre>
        </center>
        <br />
        <br />
        {/* Results */}
        {this.props.size && (
          <div className="results">
            <div className="speed shine move bg-primary">
              <center>
                Completed in
                <br />
                <h1>{this.props.speed}</h1>
                seconds
              </center>
            </div>
            <div className="details">
              <pre>
                Configuration:
                <br />
                <h6>
                  <b>{this.props.size}</b> image size
                </h6>
                <h6>
                  <b>{this.props.max}</b> max iterations
                </h6>
                <h6>
                  <b>{this.props.nodes}</b> nodes used
                </h6>
                <h6>
                  <b>{this.props.threads}</b> threads per node
                </h6>
              </pre>
            </div>
            <div className="conclusion">
              {this.props.nodes !== 1 ||
              this.props.max !== 10 ||
              this.props.threads !== 1 ? (
                <center>
                  <i className="fas fa-arrow-alt-circle-up fa-2x mb-1 text-success" />
                  <br />
                  {Math.abs(1.3 - this.props.speed).toFixed(3)}s<br />
                  faster than
                  <br />
                  default
                  <br />
                  test case
                </center>
              ) : (
                <center>
                  <i className="fas fa-check-circle fa-2x mb-1 text-success" />
                  <br />
                  Default
                  <br />
                  test case
                </center>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
