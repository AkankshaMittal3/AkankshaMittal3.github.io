//check for valid email and non empty name
function validateForm() {
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if ((name == "") && (atposition < 1 || dotposition < atposition + 2)) {
    alert("Name must be filled out & Please enter a valid e-mail address");
    return false;
  }
  else if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (atposition < 1 || dotposition < atposition + 2) {
    alert("Please enter a valid e-mail address");
    return false;
  }
  else {
    alert("Submitted");
    return (window.location.href = "index.html");
  }
}



