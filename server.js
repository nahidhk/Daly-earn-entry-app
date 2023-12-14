// Define the variable outside the function
var allj = "";

// Function to set the 'allj' variable and fetch data
function app() {
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  allj = month + "-" + year + ".json";

  // Clear the existing table data
  clearTable();

  // Check if the JSON file exists and fetch it
  fetchJSONData(allj);
  document.getElementById("show").innerHTML=allj;
}

// Function to clear the table
function clearTable() {
  var tbody = document.querySelector("#jsonTable tbody");
  tbody.innerHTML ="";
  document.getElementById("all1").innerHTML="0.00";
    document.getElementById("all2").innerHTML="0.00";
      document.getElementById("all3").innerHTML="0.00";


}

// Function to fetch and display JSON data in a table
function fetchJSONData(jsonFile) {
  fetch(jsonFile)
    .then(response => {
      if (!response.ok) {
        throw new Error('File not found');
      }
      return response.json();
    })
    .then(data => {
      // Get the HTML table element
      var tbody = document.querySelector("#jsonTable tbody");

      // Initialize variables for total income
      var totalDelyIncome = 0;
      var totalBdtHome = 0;
      var totalBdtHome1 = 0;

      // Loop through the JSON data and create table rows
      data.forEach(item => {
        var row = tbody.insertRow();

        var dateCell = row.insertCell(0);
        var delyIncome = row.insertCell(1);
        var bdtHome = row.insertCell(2);
        var myBuy = row.insertCell(3);

        dateCell.innerHTML = item.date;
        delyIncome.innerHTML = item.delyIncome;
        bdtHome.innerHTML = item.bdthome;
        myBuy.innerHTML = item.mybuy;

        // Update the total income
        totalDelyIncome += parseFloat(item.delyIncome);
        totalBdtHome += parseFloat(item.bdthome);
 totalBdtHome1 += parseFloat(item.mybuy);
               
      });

      // Update the total income elements
      var totalDelyIncomeElement = document.getElementById("all1");
      var totalBdtHomeElement = document.getElementById("all2");
var totalBdtHomeElement1 = document.getElementById("all3");  

      totalDelyIncomeElement.innerHTML = totalDelyIncome.toFixed(2);
      totalBdtHomeElement.innerHTML = totalBdtHome.toFixed(2);
      
      totalBdtHomeElement1.innerHTML = totalBdtHome1.toFixed(2);
     
    })
    .catch(error => {
      // Handle the case when the file is not found
      clearTable();
      console.error('Error fetching JSON:', error);
    });
}

// Initialize the table
app();

// Function to fetch and display JSON data in a table
function cell() {
  // Initialize variables for total income
  var totalDelyIncome = 0;
  var totalBdtHome = 0;
  var totalBdtHome1 = 0;


  var totalDelyIncomeElement = document.getElementById("all1");
  var totalBdtHomeElement = document.getElementById("all2");
   var totalBdtHomeElement1 = document.getElementById("all3");

  totalDelyIncomeElement.innerHTML = totalDelyIncome.toFixed(2);
  totalBdtHomeElement.innerHTML = totalBdtHome.toFixed(2);
  totalBdtHomeElement1.innerHTML = totalBdtHome.toFixed(2);  
  
}

cell();
