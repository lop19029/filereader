function sendRequest(){
    var request;
    request = new XMLHttpRequest(); 
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            displayFilesTable(data);
        }
    };
    request.open("GET", "assign10.php");
    request.send();
}

function displayFilesTable(data){
    var table;
    table ="<tr><th>Filename</th><th>Type</th><th>CWD</th><th>Action</th></tr>";
    //organize objects in data
    for(i = 0; i < data.length; i++){
        table+= "<tr><td>" + data[i].fileName + "</td><td>" + data[i].fileType + "</td><td>" + data[i].cwd +
        "</td><td><a href=\"" + data[i].cwd + "/" + data[i].fileName + "\">Click to display</a></td></tr>"
    }
    document.getElementById("filesTable").innerHTML = table;
}