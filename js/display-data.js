var OutData = "";
var idData = document.getElementById('idDataTable');
for (var i = 0; i <= dataObject.length - 1; i++) {
    OutData += "<tr><td class='nbr'>"
    OutData += (i + 1)
    OutData += "</td><td id='idNameData'>"
    OutData += dataObject[i].name
    OutData += "</td><td>"
    OutData += dataObject[i].diameter
    OutData += "</td><td>"
    OutData += dataObject[i].climate
    OutData += "</td><td>"
    OutData += dataObject[i].gravity
    OutData += "</td><td>"
    OutData += dataObject[i].population
    OutData += "</td>"
    OutData += "</tr>"
};
idData.innerHTML = OutData;
//getId("idDataTable").innerHTML = resultDisplay
//document.getElementById("idDataTable").innerHTML = resultDisplay