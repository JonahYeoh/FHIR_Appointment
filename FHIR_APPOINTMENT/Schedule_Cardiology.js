var schedule = {
    "resourceType": "Schedule",
    "id": "schCardio25122019",
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
    }],
    "planningHorizon": {
        "start": "2019-12-25T09:15:00Z",
        "end": "2019-12-25T09:30:00Z"
    },
    "comment": "This slot is for cardiology specialist consultation"
};

function update() {
    console.log(schedule);
    // schedule.id = length + 1;
    // schedule.serviceCategory // hardcode
    // schedule.serviceType // hardcode
    // schedule.specialty // hardcode
    // schedule.actor[0] // selected hospital
    // schedule.actor[1] // selected doctor
    // schedule.actor[2] // practitionerRole
    // schedule.planningHorizon: pending
    // schedule.comment // hardcode

    schedule.actor[0].display = "demo/demo";
    var data = JSON.stringify(schedule);
    alert(data);
    /*
        to capture schedule id after successful put action for later use
    */
}
