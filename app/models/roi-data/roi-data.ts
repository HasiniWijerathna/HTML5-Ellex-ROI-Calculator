export class ROIData {

  public static RESULT_WEEKLY = 1;
  public static RESULT_MONTHLY = 4;
  public static RESULT_ANNUALY = 48;

  // Attributes
  // Practice Overview
  public product = null;
  public procedures = [];

  // reimbursement
  public region = null;
  public state = null;

  // revenue-snapshot
  public totalWeeklyResult = null;
  public totalMonthlyResult = null;
  public totalAnnualResult = null;

  // financial Snapshot
  public unitPrice = null;
  public warrantyCost = null;
  public totalPurchasingPrice = null;
  public downPayment = null;
  public purchaseMethod = [];
  public leasingAmount = null;
  public interestRate = null;
  public leasePeriod = null;
  public leaseFactorResidual = null;
  public residual = null;
  public monthlyPay = null;

  // roi Calculation
  public totalWeeklyCost = null;
  public totalMonthlyCost = null;
  public totalAnnualCost = null;
  public leaseCost = null;

  constructor() {
  }

  /**
   * Returns the calculated cost
   * @param  value             selected procedure option value
   * @param  fee               Patient fee
   * @param  numberOfPatients  number of patients per week
   * @param  resultPeriod      Period (ROIData.RESULT_WEEKLY/ROIData.RESULT_MONTHLY/ROIData.RESULT_ANNUALY)
   * @return {number}          The calculated total weekly cost
   */
  public calculateResult(numberOfPatients, fee, value, resultPeriod): number {
    let weeklyResult = (parseFloat(value) + parseFloat(fee) * (parseFloat(numberOfPatients) * parseFloat(resultPeriod)));

    return weeklyResult;
  }

  /**
   * Returns the calculated Total Price
   * @param  unitPrice           unit price value
   * @param  warrantyCost        warrantyCost value
   * @return {number}            The calculated total purchase Price
   */
  public calculateTotalPrice(unitPrice, warrantyCost): number {
    let totalPurchasingPrice = (parseFloat(unitPrice) + parseFloat(warrantyCost));

    return totalPurchasingPrice;
  }

  /**
   * Returns the calculated Leasing Amount
   * @param  totalPurchasingPrice  calculated total purchase price
   * @param  downPayment           down payment value
   * @return {number}              The calculated leasing amount
   */
  public calculateLeasingAmount(totalPurchasingPrice, downPayment): number {
    let leasingAmount = (parseFloat(totalPurchasingPrice) - parseFloat(downPayment));

    return leasingAmount;
  }

  /**
   * Returns the calculated Resudual
   * @param  leasingAmount        calculated leasing Amount
   * @param  leaseFactorResidual  lease factor residual value
   * @return {number}             The calculated residual
   */
  public calculateResidual(leasingAmount, leaseFactorResidual): number {

    let residual = Math.floor((parseFloat(leasingAmount) *
      (parseFloat(leaseFactorResidual) / 100)) * 100) / 100;
    return residual;
  }

  /**
   * Returns the calculated monthly payment
   * @param  interestRate         interest rate
   * @param  residual             calculated residual value
   * @param  leasingAmount        calculated leasing Amount
   * @param  leasePeriod          lease Period (no of months)
   * @return {number}             The calculated monthly payment
   */
  public calculateMonthlyPay(interestRate, residual, leasingAmount, leasePeriod): number {

    let moneyFactor = interestRate / 2400;
    let interest = (residual + leasingAmount) * moneyFactor;
    let monthlyPay = Math.floor(((leasingAmount - residual) / leasePeriod) + interest);
    return monthlyPay;
  }

  public getProcedureFees() {
    let procedures = this.procedures;

    procedures.forEach((procedure) => {
      let fee = procedure.fees;
      let option = procedure.option;
      let value = procedure.value[this.region.id][option.id];

      let weeklyValue = Math.floor(fee * value);
      let monthlyValue = Math.floor((weeklyValue * 52) / 12);
      let anualValue = Math.floor(monthlyValue * 12);

      this.totalWeeklyCost = weeklyValue;
      this.totalMonthlyCost = monthlyValue;
      this.totalAnnualCost = anualValue;
    });
    let leaseCost = (this.monthlyPay * this.leasePeriod);
    this.leaseCost = leaseCost;
  }
}
