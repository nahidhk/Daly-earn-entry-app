<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // colect data
    $date = $_POST["date"];
    $delyIncome = $_POST["delyIncome"];
    $bdthome = $_POST["bdthome"];
    $mybuy = $_POST["mybuy"];

    // new data Create 
    $newData = array(
        "date" => $date,
        "delyIncome" => $delyIncome,
        "bdthome" => $bdthome,
        "mybuy" => $mybuy
    );

    // mach in data jsom file 
    $jsonData = file_get_contents('all.json');
    $existingData = json_decode($jsonData, true);

    // new data object 
    $existingData[] = $newData;

    // json file update 
    file_put_contents('all.json', json_encode($existingData));

  
    echo "";
}
?>

<script>
/// transfer index page
app();
function app(){
  window.location.href="index.html"
}
</script>