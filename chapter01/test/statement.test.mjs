import { statement, htmlStatement } from "../statement.mjs";
import assert from "assert";

describe("statement", function () {
  it("예제와 동일한 output 이 출력되어야 합니다", function () {
    const result = statement(
      {
        customer: "BigCo",
        performances: [
          {
            playID: "hamlet",
            audience: 55
          },
          {
            playID: "as-like",
            audience: 35
          },
          {
            playID: "othello",
            audience: 40
          }
        ]
      },
      {
        hamlet: { name: "Hamlet", type: "tragedy" },
        "as-like": { name: "As You Like It", type: "comedy" },
        othello: { name: "Othello", type: "tragedy" }
      }
    );
    assert.equal(
      result,
      `청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`
    );
    console.log(result);
  });

  it("예제와 동일한 html output 이 출력되어야 합니다", function () {
    const result = htmlStatement(
      {
        customer: "BigCo",
        performances: [
          {
            playID: "hamlet",
            audience: 55
          },
          {
            playID: "as-like",
            audience: 35
          },
          {
            playID: "othello",
            audience: 40
          }
        ]
      },
      {
        hamlet: { name: "Hamlet", type: "tragedy" },
        "as-like": { name: "As You Like It", type: "comedy" },
        othello: { name: "Othello", type: "tragedy" }
      }
    );
    assert.equal(
      result,
      `<h1>청구 내역 (고객명: BigCo)</h1>
<table>
<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr> <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td><tr>
 <tr><td>As You Like It</td><td>(35석)</td><td>$580.00</td><tr>
 <tr><td>Othello</td><td>(40석)</td><td>$500.00</td><tr>
</table>
<p>총액: <em>$1,730.00</em></p>
<p>적립 포인트: <em>47</em>점</p>
`
    );
    console.log(result);
  });
});
