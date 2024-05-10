// your code here
document.getElementById("button").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var url = "https://localhost:8080/";

  // Check if name and year are not empty
  if (name) {
    url += "?name=" + encodeURIComponent(name);
    if (year) {
      url += "&year=" + encodeURIComponent(year);
    }
  } else if (year) {
    url += "?year=" + encodeURIComponent(year);
  }
  
  document.getElementById("url").innerText = url;
});
