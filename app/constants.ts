export class Constants {
  public static APP_NAME: string = 'HTML5 Ellex ROI Calculator';

  public static PRODUCTS = [
    {
      productId: 1,
      productName: 'Tango',
      productProcedures: [1, 2, 3]
    },
    {
      productId: 2,
      productName: 'Solo',
      productProcedures: [1]
    },
    {
      productId: 3,
      productName: 'Ultra Q Reflex',
      productProcedures: [4, 2, 5]
    },
    {
      productId: 4,
      productName: 'Ultra Q',
      productProcedures: [2, 5]
    },
    {
      productId: 5,
      productName: 'Integre Pro Scan',
      productProcedures: [6, 5, 7, 8, 9]
    },
    {
      productId: 6,
      productName: 'Integre Pro',
      productProcedures: [6, 5, 7, 8, 9]
    },
    {
      productId: 7,
      productName: 'Solitaire',
      productProcedures: [6, 5, 7, 8, 9]
    },
    {
      productId: 8,
      productName: 'Eye Cubed',
      productProcedures: [10, 11, 12, 13]
    },
    {
      productId: 9,
      productName: 'iTrack',
      productProcedures: [14, 15]
    }
  ];

  public static PROCEDURES = [
    {
      procedureId: 1,
      procedureName: 'ALT/SLT'
    },
    {
      procedureId: 2,
      procedureName: 'YAG Capsulotomy'
    },
    {
      procedureId: 3,
      procedureName: 'Laser Peripheral Iridotomy'
    },
    {
      procedureId: 4,
      procedureName: 'Laser Vitreolysis'
    },
    {
      procedureId: 5,
      procedureName: 'Laser Peripheral Iridotomy'
    },
    {
      procedureId: 6,
      procedureName: 'Retina PRP'
    },
    {
      procedureId: 7,
      procedureName: 'Focal laser retina'
    },
    {
      procedureId: 8,
      procedureName: 'Repair of RD w/laser'
    },
    {
      procedureId: 9,
      procedureName: 'Prophylaxis for RD w/laser'
    },
    {
      procedureId: 10,
      procedureName: 'A-scan, Diagnostic'
    },
    {
      procedureId: 11,
      procedureName: 'B-scan'
    },
    {
      procedureId: 12,
      procedureName: 'UBM'
    },
    {
      procedureId: 13,
      procedureName: 'A-scan w/IOL Calculation'
    },
    {
      procedureId: 14,
      procedureName: 'Transluminal dilation of outflow canal, no retention of device or stent'
    },
    {
      procedureId: 15,
      procedureName: 'Transluminal dilation of outflow canal, with retention of device or stent'
    }
  ];

  constructor() { }
}
