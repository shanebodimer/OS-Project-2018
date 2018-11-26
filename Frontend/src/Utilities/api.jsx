import axios from "axios";

// Search
export const run = (key, params) =>
  axios
    .post(
      `http://64.251.149.246/api/run.php`,
      { key: key, params },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(function(response) {
      console.log(response.data);
      return response.data.toFixed(4);
      // return 1;
    })
    .catch(function(error) {
      console.log("run() error:", error);
      return error;
    });

export const fetch = () =>
  axios
    .post(
      `http://64.251.149.246/api/results.json`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(function(response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      console.log("run() error:", error);
      return error;
    });
