var scheduleNep = {
    "resourceType": "Schedule",
    "id": "schNephro27122020",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Clinic For Christ, Nephrology Department\n    </div>"
    },
    "identifier": [{
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "45"
    }],
    "active": true,
    "serviceCategory": {
        "coding": [{
            "code": "27",
            "display": "Specialist Medical"
        }]
    },
    "serviceType": [{
        "coding": [{
            "code": "176",
            "display": "Nephrology"
        }]
    }],
    "specialty": [{
        "coding": [{
            "code": "394589003",
            "display": "Nephrology"
        }]
    }],
    "actor": [{
            "reference": "Location/JonahNephrology",
            "display": "Clinic For Christ, Nephrology Department"
        },
        {
            "reference": "Practitioner/AVT987",
            "display": "Dr. Hagadaz"
        },
        {
            "reference": "PractitionerRole/AVT987HFC",
            "display": "Doctor"
        },
        {
            "reference": "HealthcareService/hsv.nep.jonah",
            "display": "Clinic For Christ, Nephrology Department"
        }
    ],
    "planningHorizon": {
        "start": "2020-12-27T09:15:00Z",
        "end": "2020-12-27T09:30:00Z"
    },
    "comment": "This slot is for nephrology specialist consultation"
};

function updateNephro(date, practitionerId) {
    var name = "";
    switch (practitionerId) {
        case "AVT987":
            name = "Dr. Hagadaz";
            break;
        case "Sx002":
            name = "Dr. Samuel";
            break;
    }
    scheduleNep.id = "sch.nep." + practitionerId + "." + date.substring(0, 4) + date.substring(5, 7) + date.substring(8, 10);
    scheduleNep.actor[1].reference = "Practitioner/" + practitionerId;
    scheduleNep.actor[1].display = name;
    scheduleNep.actor[2].reference = "PractitionerRole/" + practitionerId + "HFC";
    scheduleNep.planningHorizon.start = date + "T09:15:00Z";
    scheduleNep.planningHorizon.end = date + "T09:30:00Z";
    var data = JSON.stringify(scheduleNep);
    var url = "http://hapi.fhir.org/baseR4/Schedule/" + scheduleNep.id;
    HTTPPutData(url, data);
}

function HTTPPutData(urlStr, dataStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("Put", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            console.table(ret);
        }
    }
    rawFile.send(dataStr);
}