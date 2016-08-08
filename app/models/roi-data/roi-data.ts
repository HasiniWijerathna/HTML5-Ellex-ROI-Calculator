export class ROIData {

  public static RESULT_WEEKLY = 1;
  public static RESULT_MONTHLY = 4;
  public static RESULT_ANNUALY = 48;

  // Attributes
  // Practice Overview
  public product = null;
  public procedures = [];

  //reimbursement
  public region = null;
  public state = null;

  //revenue-snapshot
  public totalWeeklyResult = null;
  public totalMonthlyResult = null;
  public totalAnnualResult = null;

  constructor() {
  }

  /**
   * Returns the calculated weekly cost
   * @param  value             selected procedure option value
   * @param  fee               Patient fee
   * @param  numberOfPatients  number of patients per week
   * @param  resultPeriod      Period (ROIData.RESULT_WEEKLY/ROIData.RESULT_MONTHLY/ROIData.RESULT_ANNUALY)
   * @return {number}          The calculated total weekly cost
   */
  public calculateResult(numberOfPatients, fee, value, resultPeriod): number {
    let weeklyResult = (value + fee) * numberOfPatients * resultPeriod;

    return weeklyResult;
  }

  public calculateTotal(procedureId, weeklyResult) {

  }
}
) {

}
}
