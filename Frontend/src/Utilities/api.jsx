import axios from "axios";

// Search
export const run = params =>
  axios
    .post(
      `http://64.251.149.246/api/run.php?`,
      { params },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(function(response) {
      console.log(response.data);
      return response;
    })
    .catch(function(error) {
      console.log("run() error:", error);
      return error;
    });
