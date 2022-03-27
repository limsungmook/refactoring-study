import { Province } from "../province.mjs";
import assert from "assert";
import { sampleProvinceData } from "../sampleProvinceData.mjs";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
