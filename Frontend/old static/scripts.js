// function submitForm() {
//   $.post("/function.php", function(data) {
//     console.log(data);
//   });
// }
function viewReport(num) {
  var obj = document.getElementById("report" + num);
  obj.style.visibility =
    obj.style.visibility == "visible" ? "hidden" : "visible";

  var test = document.getElementById("test" + num);
  if (test.classList.contains("shadow")) {
    test.classList.remove("shadow");
    test.classList.add("shadow-noBottom");
  } else {
    test.classList.remove("shadow-noBottom");
    test.classList.add("shadow");
  }
}
