var Slot = {
    "resourceType": "Slot",
    "id": "slotExample",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:15am - 9:30am: \n\t\t</div>"
    },
    "serviceCategory": [
      {
        "coding": [
          {
            "code": "27",
            "display": "Specialist Medical"
          }
        ]
      }
    ],
    "serviceType": [
      {
        "coding": [
          {
            "code": "165",
            "display": "Cardiology"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "394579002",
            "display": "Cardiology"
          }
        ]
      }
    ],
    "appointmentType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
          "code": "WALKIN",
          "display": "A previously unscheduled walk-in visit"
        }
      ]
    },
    "schedule": {
      "reference": "Schedule/schCardio25122019"
    },
    "status": "busy",
    "start": "2013-12-25T09:15:00Z",
    "end": "2013-12-25T09:30:00Z",
    "comment": "Assessments should be performed before requesting appointments in this slot."
  };