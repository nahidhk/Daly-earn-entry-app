console.log("app.js");

// Function to load names from JSON
async function loadNames() {
  const response = await fetch('/load.json');
  const data = await response.json();
  return data[0].password;
}

// Function to handle login
async function login() {
  var maxAttempts = 3;

  for (var attempt = 1; attempt <= maxAttempts; attempt++) {
    var enteredPassword = prompt("Password");

    // Assuming names is the correct password, modify accordingly
    var correctPassword = await loadNames();

    if (enteredPassword == correctPassword) {
      alert("Login successful!");
      break; // Exit the loop
    } else {
      alert("Incorrect password. Attempts left: " + (maxAttempts - attempt));
    }
  }

  // If the loop completes without a successful login
  if (attempt > maxAttempts) {
    alert("Max attempts reached. Please try again later.");
    document.getElementById("jsonTable").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("relogin").style.display = "block";
  }
}

// Call the login function
login();





/* old code 

console.log("app.js");
function login() {
    var maxAttempts = 3;

    for (var attempt = 1; attempt <= maxAttempts; attempt++) {
        var appJS = prompt("Password");

        if (appJS == names) {
            alert("Login successful!");
           break; 
           // Exit the loop
  
        } else {
            alert("Incorrect password. Attempts left: " + (maxAttempts - attempt));
        }
    }

    // If the loop completes without a successful login
    if (attempt > maxAttempts) {
        alert("Max attempts reached. Please try again later.");
 document.getElementById("jsonTable").style.display="none";
  document.getElementById("btn").style.display="none";
  document.getElementById("relogin").style.display="block";

    }
 
}

// Call the login function
login();


//// data load app ui
async function loadNames() {
  const response = await fetch('/load.json');
  const names = await response.json();
  
}

loadNames();

*/