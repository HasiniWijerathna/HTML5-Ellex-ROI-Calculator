export class Constants {
  public static APP_NAME: string = 'HTML5 Ellex ROI Calculator';

  public static OPTIONS = [
    {
      id: 1,
      name: 'Medicare'
    },
    {
      id: 2,
      name: 'MD Private Clinic'
    },
    {
      id: 3,
      name: 'MD Facility'
    },
    {
      id: 4,
      name: 'Hospital'
    },
    {
      id: 5,
      name: 'ASC Facility'
    }
  ];

  public static REGIONS = [
    {
      id: 1,
      name: 'US (Ellex USA)',
      states: [
        {
          'name': 'Alabama',
          'abbreviation': 'AL'
        },
        {
          'name': 'Alaska',
          'abbreviation': 'AK'
        },
        {
          'name': 'American Samoa',
          'abbreviation': 'AS'
        },
        {
          'name': 'Arizona',
          'abbreviation': 'AZ'
        },
        {
          'name': 'Arkansas',
          'abbreviation': 'AR'
        },
        {
          'name': 'California',
          'abbreviation': 'CA'
        },
        {
          'name': 'Colorado',
          'abbreviation': 'CO'
        },
        {
          'name': 'Connecticut',
          'abbreviation': 'CT'
        },
        {
          'name': 'Delaware',
          'abbreviation': 'DE'
        },
        {
          'name': 'District Of Columbia',
          'abbreviation': 'DC'
        },
        {
          'name': 'Federated States Of Micronesia',
          'abbreviation': 'FM'
        },
        {
          'name': 'Florida',
          'abbreviation': 'FL'
        },
        {
          'name': 'Georgia',
          'abbreviation': 'GA'
        },
        {
          'name': 'Guam',
          'abbreviation': 'GU'
        },
        {
          'name': 'Hawaii',
          'abbreviation': 'HI'
        },
        {
          'name': 'Idaho',
          'abbreviation': 'ID'
        },
        {
          'name': 'Illinois',
          'abbreviation': 'IL'
        },
        {
          'name': 'Indiana',
          'abbreviation': 'IN'
        },
        {
          'name': 'Iowa',
          'abbreviation': 'IA'
        },
        {
          'name': 'Kansas',
          'abbreviation': 'KS'
        },
        {
          'name': 'Kentucky',
          'abbreviation': 'KY'
        },
        {
          'name': 'Louisiana',
          'abbreviation': 'LA'
        },
        {
          'name': 'Maine',
          'abbreviation': 'ME'
        },
        {
          'name': 'Marshall Islands',
          'abbreviation': 'MH'
        },
        {
          'name': 'Maryland',
          'abbreviation': 'MD'
        },
        {
          'name': 'Massachusetts',
          'abbreviation': 'MA'
        },
        {
          'name': 'Michigan',
          'abbreviation': 'MI'
        },
        {
          'name': 'Minnesota',
          'abbreviation': 'MN'
        },
        {
          'name': 'Mississippi',
          'abbreviation': 'MS'
        },
        {
          'name': 'Missouri',
          'abbreviation': 'MO'
        },
        {
          'name': 'Montana',
          'abbreviation': 'MT'
        },
        {
          'name': 'Nebraska',
          'abbreviation': 'NE'
        },
        {
          'name': 'Nevada',
          'abbreviation': 'NV'
        },
        {
          'name': 'New Hampshire',
          'abbreviation': 'NH'
        },
        {
          'name': 'New Jersey',
          'abbreviation': 'NJ'
        },
        {
          'name': 'New Mexico',
          'abbreviation': 'NM'
        },
        {
          'name': 'New York',
          'abbreviation': 'NY'
        },
        {
          'name': 'North Carolina',
          'abbreviation': 'NC'
        },
        {
          'name': 'North Dakota',
          'abbreviation': 'ND'
        },
        {
          'name': 'Northern Mariana Islands',
          'abbreviation': 'MP'
        },
        {
          'name': 'Ohio',
          'abbreviation': 'OH'
        },
        {
          'name': 'Oklahoma',
          'abbreviation': 'OK'
        },
        {
          'name': 'Oregon',
          'abbreviation': 'OR'
        },
        {
          'name': 'Palau',
          'abbreviation': 'PW'
        },
        {
          'name': 'Pennsylvania',
          'abbreviation': 'PA'
        },
        {
          'name': 'Puerto Rico',
          'abbreviation': 'PR'
        },
        {
          'name': 'Rhode Island',
          'abbreviation': 'RI'
        },
        {
          'name': 'South Carolina',
          'abbreviation': 'SC'
        },
        {
          'name': 'South Dakota',
          'abbreviation': 'SD'
        },
        {
          'name': 'Tennessee',
          'abbreviation': 'TN'
        },
        {
          'name': 'Texas',
          'abbreviation': 'TX'
        },
        {
          'name': 'Utah',
          'abbreviation': 'UT'
        },
        {
          'name': 'Vermont',
          'abbreviation': 'VT'
        },
        {
          'name': 'Virgin Islands',
          'abbreviation': 'VI'
        },
        {
          'name': 'Virginia',
          'abbreviation': 'VA'
        },
        {
          'name': 'Washington',
          'abbreviation': 'WA'
        },
        {
          'name': 'West Virginia',
          'abbreviation': 'WV'
        },
        {
          'name': 'Wisconsin',
          'abbreviation': 'WI'
        },
        {
          'name': 'Wyoming',
          'abbreviation': 'WY'
        }
      ],
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      name: 'Australia (Ellex Australia)',
      states: [],
      options: [1]
    },
    {
      id: 3,
      name: 'France (Ellex France)',
      states: [],
      options: [1]
    },
    {
      id: 4,
      name: 'Germany (Ellex Deutchland)',
      states: [],
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 5,
      name: 'Japan (Ellex Japan)',
      states: [],
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 6,
      name: 'Other',
      states: [],
      options: []
    }
  ];

  public static PRODUCTS = [
    {
      id: 1,
      name: 'Tango',
      procedures: [1, 2, 3]
    },
    {
      id: 2,
      name: 'Solo',
      procedures: [1]
    },
    {
      id: 3,
      name: 'Ultra Q Reflex',
      procedures: [4, 2, 5]
    },
    {
      id: 4,
      name: 'Ultra Q',
      procedures: [2, 5]
    },
    {
      id: 5,
      name: 'Integre Pro Scan',
      procedures: [6, 5, 7, 8, 9]
    },
    {
      id: 6,
      name: 'Integre Pro',
      procedures: [6, 5, 7, 8, 9]
    },
    {
      id: 7,
      name: 'Solitaire',
      procedures: [6, 5, 7, 8, 9]
    },
    {
      id: 8,
      name: 'Eye Cubed',
      procedures: [10, 11, 12, 13]
    },
    {
      id: 9,
      name: 'iTrack',
      procedures: [14, 15]
    }
  ];

  public static PROCEDURES = [
    {
      id: 1,
      name: 'ALT/SLT',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 341.46,
          3: 300.7,
          4: 443.46,
          5: 188.43
        },
        2: {
          // Optional division
          1: 451.10
        },
        3: {
          // Optional division
          1: 125.8
        },
        4: {
          // Optional division
          1: 134.06
        },
        5: {
          // Optional division
          1: 89700
        }
      }
    },
    {
      id: 2,
      name: 'YAG Capsulotomy',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 333.23,
          3: 314.64,
          4: 443.46,
          5: 243.09
        },
        2: {
          // Optional division
          1: 353.35
        },
        3: {
          // Optional division
          1: 83.6
        },
        4: {
          // Optional division
          1: 148.81
        },
        5: {
          // Optional division
          1: 13800
        }
      }
    },
    {
      id: 3,
      name: 'Laser Peripheral Iridotomy',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 298.91,
          3: 238.48,
          4: 443.46,
          5: 183.78
        },
        2: {
          // Optional division
          1: 353.35
        },
        3: {
          // Optional division
          1: 83.6
        },
        4: {
          // Optional division
          1: 134.06
        },
        5: {
          // Optional division
          1: 66200
        }
      }
    },
    {
      id: 4,
      name: 'Laser Vitreolysis',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        2: {
          // Optional division
          1: 0
        },
        3: {
          // Optional division
          1: 105.17
        },
        4: {
          // Optional division
          1: 0
        },
        5: {
          // Optional division
          1: 0
        }
      }
    },
    {
      id: 5,
      name: 'Laser Peripheral Iridotomy',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 298.91,
          3: 238.48,
          4: 443.46,
          5: 183.78
        },
        2: {
          // Optional division
          1: 353.35
        },
        3: {
          // Optional division
          1: 83.6
        },
        4: {
          // Optional division
          1: 134.06
        },
        5: {
          // Optional division
          1: 66200
        }
      }
    },
    {
      id: 6,
      name: 'Retina PRP',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 1011.14,
          3: 957.87,
          4: 443.46,
          5: 243.09
        },
        2: {
          // Optional division
          1: 451.10
        },
        3: {
          // Optional division
          1: 114
        },
        4: {
          // Optional division
          1: 188.50
        },
        5: {
          // Optional division
          1: 159600
        }
      }
    },
    {
      id: 7,
      name: 'Focal laser retina',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 524.16,
          3: 506.29,
          4: 443.46,
          5: 243.09
        },
        2: {
          // Optional division
          1: 451.10
        },
        3: {
          // Optional division
          1: 146.3
        },
        4: {
          // Optional division
          1: 123.87
        },
        5: {
          // Optional division
          1: 100200
        }
      }
    },
    {
      id: 8,
      name: 'Repair of RD w/laser',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 726.54,
          3: 651.81,
          4: 443.46,
          5: 243.09
        },
        2: {
          // Optional division
          1: 902.30
        },
        3: {
          // Optional division
          1: 113.36
        },
        4: {
          // Optional division
          1: 123.87
        },
        5: {
          // Optional division
          1: 159600
        }
      }
    },
    {
      id: 9,
      name: 'Prophylaxis for RD w/laser',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 532.75,
          3: 503.43,
          4: 443.46,
          5: 243.09
        },
        2: {
          // Optional division
          1: 0
        },
        3: {
          // Optional division
          1: 113.36
        },
        4: {
          // Optional division
          1: 123.87
        },
        5: {
          // Optional division
          1: 159600
        }
      }
    },
    {
      id: 10,
      name: 'A-scan, Diagnostic',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 103.69,
          3: 103.69,
          4: 134.8,
          5: 49.34
        },
        2: {
          // Optional division
          1: 103.65
        },
        3: {
          // Optional division
          1: 36.66
        },
        4: {
          // Optional division
          1: 0
        },
        5: {
          // Optional division
          1: 1500
        }
      }
    },
    {
      id: 11,
      name: 'B-scan',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 93.68,
          3: 0,
          4: 0,
          5: 0
        },
        2: {
          // Optional division
          1: 77
        },
        3: {
          // Optional division
          1: 47.88
        },
        4: {
          // Optional division
          1: 0
        },
        5: {
          // Optional division
          1: 3500
        }
      }
    },
    {
      id: 12,
      name: 'UBM',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 96.9,
          3: 0,
          4: 0,
          5: 0
        },
        2: {
          // Optional division
          1: 103.65
        },
        3: {
          // Optional division
          1: 46.58
        },
        4: {
          // Optional division
          1: 37.54
        },
        5: {
          // Optional division
          1: 3500
        }
      }
    },
    {
      id: 13,
      name: 'A-scan w/IOL Calculation',
      options: [1, 2, 3, 4, 5],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 85.1,
          3: 0,
          4: 0,
          5: 0
        },
        2: {
          // Optional division
          1: 103.65
        },
        3: {
          // Optional division
          1: 34.11
        },
        4: {
          // Optional division
          1: 72.93
        },
        5: {
          // Optional division
          1: 1500
        }
      }
    },
    {
      id: 14,
      name: 'Transluminal dilation of outflow canal, no retention of device or stent',
      options: [1],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 958.23,
          3: 958.23,
          4: 3121.34,
          5: 1711.02
        }
      }
    },
    {
      id: 15,
      name: 'Transluminal dilation of outflow canal, with retention of device or stent',
      options: [1],
      value: {
        // Regional division
        1: {
          // Optional division
          1: 0,
          2: 1033.63,
          3: 1003.63,
          4: 3121.34,
          5: 1711.02
        }
      }
    }
  ];


  constructor() { }
}
