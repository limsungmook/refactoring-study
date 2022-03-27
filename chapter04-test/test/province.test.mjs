import { Province } from "../province.mjs";
import { sampleProvinceData } from "../sampleProvinceData.mjs";
import { expect } from "chai";

describe("province", function () {
  const asia = new Province(sampleProvinceData());
  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
