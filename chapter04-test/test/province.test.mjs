import { Province } from "../province.mjs";
import { sampleProvinceData } from "../sampleProvinceData.mjs";
import { expect } from "chai";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
});
