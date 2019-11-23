//取得網路上的資源
var ret;

function HTTPGetData(urlStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert("data retrieved");
            console.table(ret);
            message = JSON.parse(ret);
            if ( message.total == 1 )
                continueAppointment();
            else
                alert("Invalid Name or ID, please enter again");
        }
    }
    rawFile.send();
}
