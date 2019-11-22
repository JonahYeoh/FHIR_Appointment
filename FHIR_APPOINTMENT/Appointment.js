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
    "description": "Previously unscheduled visit",
    "minutesDuration": 15,
    "slot": [{
        "reference": "Slot/slotExample"
    }],
    "created": "2013-12-02",
    "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
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