<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>Mortage Calculator</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
<body>
<h1>Your Mortage</h1>

<?php 
$apr = $_GET["apr"] / 100 / 12;
$term = $_GET["term"] * 12;
$amount = $_GET["amount"];

$payment = $amount * $apr * (pow((1 + $apr), $term)) / (pow(1 + $apr, $term) - 1);
?><br>
<form>
            <label for="apr">Monthly Rate Percentage</label>
            <input type="text" id="apr" name="apr" value = "<?php echo number_format($apr,2);?>" readonly>
            <br>
            <label for="term">Number of payments (Loan term)</label>
            <input type="text" id="term" name="term" value ="<?php echo number_format($term,2);?>" readonly>
            <br>
            <label for="amount">Loan amount (US Dollars)</label>
            <input type="text" id="amount" name="amount" value ="<?php echo $amount;?>" readonly><br>
            <br>
            <label for="payment">Monthly payment</label>
            <input type="text" id="payment" name="payment" value = "<?php echo number_format($payment,2);?>" readonly><br>
        </form>
</body>
</html>