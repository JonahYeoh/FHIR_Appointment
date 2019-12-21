{
  "resourceType": "HealthcareService",
  "id": "hsv.nep.jonah",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\tClinic For Christ, Nephrology Department\t\n\t\t</div>"
  },
  "identifier": [
    {
      "system": "http://example.org/shared-ids",
      "value": "HS-12"
    }
  ],
  "active": true,
  "providedBy": {
    "reference": "Organization/jonah",
    "display": "Healthcare For Christ"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "27",
          "display": "Specialist Medical"
        }
      ],
      "text": "Specialist Medical"
    }
  ],
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
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
          "system": "http://snomed.info/sct",
          "code": "394589003",
          "display": "Nephrology"
        }
      ]
    }
  ],
  "location": [
    {
      "reference": "Location/JonahNephrology"
    }
  ],
  "name": "Consulting nephrologist services",
  "comment": "Providing affordable Specialist nephrology services to the poor and needy",
  "extraDetails": "Please make early appointment whenver possible",
  "telecom": [
    {
      "system": "phone",
      "value": "111",
      "use": "work"
    },
    {
      "system": "email",
      "value": "nephrology_department@gmail.com",
      "use": "work"
    }
  ],
  "coverageArea": [
    {
      "reference": "Location/JonahNephrology",
      "display": "Clinic For Christ, Nephrology Department"
    }
  ],
  "serviceProvisionCode": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-provision-conditions",
          "code": "cost",
          "display": "Fees apply"
        }
      ]
    }
  ],
  "characteristic": [
    {
      "coding": [
        {
          "display": "Wheelchair access"
        }
      ]
    }
  ],
  "referralMethod": [
    {
      "coding": [
        {
          "code": "phone",
          "display": "Phone"
        }
      ]
    },
    {
      "coding": [
        {
          "code": "fax",
          "display": "Fax"
        }
      ]
    }
  ],
  "appointmentRequired": true,
  "availableTime": [
    {
      "daysOfWeek": [
        "wed"
      ],
      "allDay": true
    },
    {
      "daysOfWeek": [
        "mon",
        "tue",
        "thu",
        "fri"
      ],
      "availableStartTime": "08:30:00",
      "availableEndTime": "17:30:00"
    },
    {
      "daysOfWeek": [
        "sat",
        "fri"
      ],
      "availableStartTime": "09:00:00",
      "availableEndTime": "13:00:00"
    }
  ],
  "notAvailable": [
    {
      "description": "Christmas/Boxing Day",
      "during": {
        "start": "2020-12-25",
        "end": "2020-12-26"
      }
    },
    {
      "description": "New Years Day",
      "during": {
        "start": "2020-01-01",
        "end": "2020-01-01"
      }
    }
  ],
  "availabilityExceptions": "Reduced capacity is available during the Christmas period"
}