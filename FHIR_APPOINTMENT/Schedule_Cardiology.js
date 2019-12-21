var scheduleCar = {
    "resourceType": "Schedule",
    "id": "schCardio25122020",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Clinic For Christ, Cardiology Department\n    </div>"
    },
    "identifier": [{
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "45"
    }],
    "active": true,
    "serviceCategory": [{
        "coding": [{
            "code": "27",
            "display": "Specialist Medical"
        }]
    }],
    "serviceType": [{
        "coding": [{
            "code": "165",
            "display": "Cardiology"
        }]
    }],
    "specialty": [{
        "coding": [{
            "code": "394579002",
            "display": "Cardiology"
        }]
    }],
    "actor": [{
        "reference":"Location/JonahCardiology",
        "display":"Clinic For Christ, Cardiology Department"
    },{
        "reference":"Practitioner/Jx009",
        "display":"Dr. James"
    },
    {
        "reference":"PractitionerRole/Jx009HFC",
        "display":"Doctor"
    }
	,
	{
		"reference": "HealthcareService/hsv.car.jonah",
		"display":"Clinic For Christ, Cardiology Department"
	}],
    "planningHorizon": {
        "start": "2020-12-25T09:15:00Z",
        "end": "2020-12-25T09:30:00Z"
    },
    "comment": "This slot is for cardiology specialist consultation"
};

function updateCardio(date, practitionerId) {
    var name = "";
    switch(practitionerId){
        case "Nx003":
            name = "Dr. Noah";
            break;
        case "Wx003":
            name = "Dr. William";
            break;
    }
    scheduleCar.id = "sch.car." + practitionerId + "." + date.substring(0,4) + date.substring(5,7) + date.substring(8,10);
    scheduleCar.actor[1].reference = "Practitioner/" + practitionerId;
    scheduleCar.actor[1].display = name;
    scheduleCar.actor[2].reference = "PractitionerRole/" + practitionerId + "HFC";
    scheduleCar.planningHorizon.start = date + "T09:15:00Z";
    scheduleCar.planningHorizon.end = date + "T09:30:00Z";
    var data = JSON.stringify(scheduleCar);
    var url =  "http://hapi.fhir.org/baseDstu3/Schedule/" + scheduleCar.id;
    HTTPPutData(url, data);
}

function HTTPPutData(urlStr, dataStr){
    console.table(dataStr);
    var rawFile = new XMLHttpRequest();
    rawFile.open("Put", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function(){
        if ( rawFile.readyState === 4 ){
            ret = rawFile.responseText;
            console.table(ret);
        }
    }
    rawFile.send(dataStr);
}