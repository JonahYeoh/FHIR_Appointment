var schedule = {
    "resourceType": "Schedule",
    "id": "schNephro25122019",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Clinic For Christ, Nephrology Department\n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "45"
      }
    ],
    "active": true,
    "serviceCategory": {
      "coding": [
        {
          "code": "27",
          "display": "Specialist Medical"
        }
      ]
    },
    "serviceType": [
      {
        "coding": [
          {
            "code": "176",
            "display": "Nephrology"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "394589003",
            "display": "Nephrology"
          }
        ]
      }
    ],
    "actor": [
      {
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
      }
    ],
    "planningHorizon": {
      "start": "2019-12-25T09:15:00Z",
      "end": "2019-12-25T09:30:00Z"
    },
    "comment": "This slot is for nephrology specialist consultation"
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