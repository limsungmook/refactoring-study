function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.volumeCredits;
    }
    return result;
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performances = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;

    switch (this.play.type) {
      case "tragedy": // 비극
        result = 40000;
        if (this.performances.audience > 30) {
          result += 1000 * (this.performances.audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (this.performances.audience > 20) {
          result += 10000 + 500 * (this.performances.audience - 20);
        }
        result += 300 * this.performances.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    return result;
  }
}

export { createStatementData };