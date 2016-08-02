export class Constants {
  public static APP_NAME: string = 'HTML5 Ellex ROI Calculator';

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
      name: 'ALT/SLT'
    },
    {
      id: 2,
      name: 'YAG Capsulotomy'
    },
    {
      id: 3,
      name: 'Laser Peripheral Iridotomy'
    },
    {
      id: 4,
      name: 'Laser Vitreolysis'
    },
    {
      id: 5,
      name: 'Laser Peripheral Iridotomy'
    },
    {
      id: 6,
      name: 'Retina PRP'
    },
    {
      id: 7,
      name: 'Focal laser retina'
    },
    {
      id: 8,
      name: 'Repair of RD w/laser'
    },
    {
      id: 9,
      name: 'Prophylaxis for RD w/laser'
    },
    {
      id: 10,
      name: 'A-scan, Diagnostic'
    },
    {
      id: 11,
      name: 'B-scan'
    },
    {
      id: 12,
      name: 'UBM'
    },
    {
      id: 13,
      name: 'A-scan w/IOL Calculation'
    },
    {
      id: 14,
      name: 'Transluminal dilation of outflow canal, no retention of device or stent'
    },
    {
      id: 15,
      name: 'Transluminal dilation of outflow canal, with retention of device or stent'
    }
  ];

  constructor() { }
}
