import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default class SingleResult extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      imgHash: Date.now()
    };
  }

  render() {
    return (
      <div className="row w-100">
        <div className="col-md-8 text-center">
          <center>
            {this.props.size && (
              <ReactImageMagnify
                className="result-img"
                enlargedImagePosition="over"
                enlargedImageStyle={{ backgroundSize: "3000% 3000%" }}
                fadeDurationInMs={0}
                hoverDelayInMs={0}
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: `http://64.251.149.246/api/frac.bmp?${
                      this.state.imgHash
                    }`
                  },
                  largeImage: {
                    src: `http://64.251.149.246/api/frac.bmp?${
                      this.state.imgHash
                    }`,
                    width: 1200,
                    height: 1800
                  }
                }}
              />
            )}
            {!this.props.size && (
              <div className="placeholder">
                {this.props.running && (
                  <i className="fas fa-spinner fa-spin fa-5x text-white" />
                )}
              </div>
            )}
            <pre>
              {this.props.size ? (
                this.props.size
              ) : (
                <span>{this.props.running ? "Running" : "Waiting..."}</span>
              )}
            </pre>
          </center>
        </div>

        <div className="col-md-4">
          {this.props.size && (
            <div className="results h-100">
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
                    <b>{this.props.size}</b> size
                  </h6>
                  <h6>
                    <b>{this.props.max}</b> iterations
                  </h6>
                  <h6>
                    <b>{this.props.nodes}</b> nodes
                  </h6>
                  <h6>
                    <b>{this.props.threads}</b> threads
                  </h6>
                </pre>
              </div>

              <a
                href="http://64.251.149.246/api/frac.bmp"
                className="btn btn-outline-primary btn-sm mt-4"
              >
                Download image <i className="fas fa-download" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
