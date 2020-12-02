function getInfo() {
	
	var us = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = -1;
	
	var usArray = ["ramsey", "tekie", "robert"];
	var pwArray = ["admin", "admin", "admin"];


	 for (var i=0; i <usArray.length; i++) {
        if ((us == usArray[i]) && (pw == pwArray[i])) {
            valid = i;
            break;
        }
    }

    if (valid != -1) {
        document.getElementById("password").value = pwArray[valid];
		location.href = 'index.html';
		
    }
    else {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
        document.getElementById("username").focus();
    }
	
}