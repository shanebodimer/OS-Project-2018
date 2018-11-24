import axios from "axios";

// Search
export const run = params =>
  axios
    .post(
      `http://64.251.149.246/api/run.php`,
      { hello: "world" },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log("run() error:", error);
      return error;
    });
