var Slot = {
    "resourceType": "Slot",
    "id": "slotExample",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:15am - 9:30am: \n\t\t</div>"
    },
    "identifier": [
        {
          "use":"official",
          "system": "http://example.org/identifiers/slotsLimit",
          "value": "100"
        }
    ],
    "serviceCategory": [{
        "coding": [{
            "code": "27",
            "display": "Specialist Medical"
        }]
    }],
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
    "appointmentType": {
        "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
            "code": "WALKIN",
            "display": "A previously unscheduled walk-in visit"
        }]
    },
    "schedule": {
        "reference": "Schedule/schNephro25122019"
    },
    "status": "free",
    "start": "2013-12-25T09:15:00Z",
    "end": "2013-12-25T09:30:00Z",
    "overbooked":false,
    "comment": "Assessments should be performed before requesting appointments in this slot."
};

function updateNephro(practitionerId, date, scheduleId) {
    Slot.id = "slt.nep." + practitionerId + "." + date.substring(0, 4) + date.substring(5, 7) + date.substring(8, 10);
    Slot.start = date + "T09:15:00Z";
    Slot.end = date + "T09:30:00Z";
    Slot.schedule.reference = "Schedule/" + scheduleId;
    var data = JSON.stringify(Slot);
    var url = "http://hapi.fhir.org/baseR4/Slot/" + Slot.id;
    HTTPPutData(url, data);
}