import { Province } from "../province.mjs";
import { sampleProvinceData } from "../sampleProvinceData.mjs";
import { expect } from "chai";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
