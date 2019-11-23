var Appointment = {
    "resourceType": "Appointment",
    "id": "examplereq",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">    == Nephrology Clinic Appointment == </div>"
    },
    "identifier": [{
        "system": "http://example.org/sampleappointment-identifier",
        "value": "123"
    }],
    "status": "proposed",
    "serviceCategory": [{
        "coding": [{
            "system": "http://example.org/service-category",
            "code": "27",
            "display": "Specialist Medical"
        }]
    }],
    "specialty": [{
        "coding": [{
            "code": "394589003",
            "display": "Nephrology"
        }]
    }],
    "appointmentType": {
        "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
            "code": "WALKIN",
            "display": "A previously unscheduled walk-in visit"
        }]
    },
    "reasonCode": [{
        "coding": [{
            "system": "http://snomed.info/sct",
            "code": "5880005"
        }],
        "text": "Clinical Examination"
    }],
    "priority": 5,
    "description": "Specialist Review",
    "minutesDuration": 15,
    "slot": [{
        "reference": "Slot/slotExample"
    }],
    "created": "2013-12-02",
    "comment": "Empty comment",
    "participant": [{
            "actor": {
                "reference": "Patient/Cool90",
                "display": "Mr Cool"
            },
            "required": "required",
            "status": "accepted"
        },
        {
            "type": [{
                "coding": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "ATND"
                }]
            }],
            "required": "required",
            "status": "needs-action"
        },
        {
            "actor": {
                "reference": "Location/JonahNephrology",
                "display": "Clinic For Christ, Nephrology Department"
            },
            "required": "required",
            "status": "needs-action"
        },
        {
            "actor": {
                "reference": "Practitioner/AVT987",
                "display": "Dr. Hagadaz"
            },
            "required": "required",
            "status": "needs-action"
        }
    ],
    "requestedPeriod": [{
        "start": "2019-12-31",
        "end": "2019-12-31"
    }]
};

function updateNephrology(slotId, practitionerId, apptType, date, patientName, patientId) {
    Appointment.id = "apt.nep." + practitionerId + "." + date.substring(0, 4) + date.substring(5, 7) + date.substring(8, 10);
    Appointment.slot[0].reference = "Slot/" + slotId;
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let dt = d.getDate();
    let today = year + "-" + month + "-" + dt;
    Appointment.created = today;
    Appointment.participant[3].actor.reference = "Practitioner/" + practitionerId;
    if (practitionerId != "AVT987")
        Appointment.participant[3].actor.display = "Dr. Samuel";
    Appointment.participant[0].actor.reference = "Patient/" +　patientId;
    Appointment.participant[0].actor.display = patientName;
    Appointment.appointmentType.coding[0].code = apptType;
    if (apptType != "WALKIN")
        Appointment.appointmentType.coding[0].display = "A follow up visit from a previous appointment";
    Appointment.requestedPeriod[0].start = date;
    Appointment.requestedPeriod[0].end = date;
    var url = "http://hapi.fhir.org/baseDstu3/Appointment/" + Appointment.id;
    var data = JSON.stringify(Appointment);
    HTTPPutData(url,data);
}

function HTTPPutData(urlStr, dataStr) {
    console.table(dataStr);
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