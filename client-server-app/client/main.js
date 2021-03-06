
function addUser(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getUsers();
        }
    };
    
    console.dir(document.getElementById("username").value);
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = { username: username, email: email, password: password };

    xhttp.open("POST", "http://localhost:8080/users/", true);
    xhttp.send(JSON.stringify(data));
}

function getUsers() {
    //send get request to the backend
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(this.responseText);
            

            userCountElement = document.getElementById("user-count");
            userCountElement.innerHTML = users.length
        }
    };

    xhttp.open("GET", "http://localhost:8080/users/", true);
    xhttp.send();
}

