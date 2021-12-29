function getToken() {
  var loginUrl =
    "https://vcmdataroomapi3.azurewebsites.net/api/Login1?code=AcIrX65BbuzAvY56l/zzgMrG1yBJmko17caivlr0MPrjO/XFnFLpJQ==";
  var xhr = new XMLHttpRequest();
  var username1 = document.getElementById("username").value;
  var password1 = document.getElementById("password").value;
  var params = {
    clientId: "3",
    clientCode: "5b488385-40fc-4261-bc8a-74b5579c7f67",
    username: username1,
    password: password1,
    clientId: "3",
    apiVersion: "2",
  };
  xhr.open("POST", loginUrl, true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "true");
  //  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.addEventListener("load", function () {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
  });
  var sendObject = JSON.stringify(params);

  console.log("going to send", params);

  xhr.send(params);
}

function getDocs() {
  var url =
    "https://vcmdataroomapi3.azurewebsites.net/api/DocumentsTest300/0/0/0/1/100/s/345?code=AIKwwVaOvYT9QPdU17DgEH4tBnEk9iPZNWSNt2O/60aVlnWrmbQVpQ==";
  var xhr = new XMLHttpRequest();
  //var resultElement = document.getElementById("result");
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "true");
  /* xhr.setRequestHeader("Authorization", "JWT "); */
  xhr.addEventListener("load", function () {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
    //resultElement.innerHTML = this.responseText;
  });

  xhr.send(null);
}
function showDocs() {
  getToken();
  getDocs();
}
