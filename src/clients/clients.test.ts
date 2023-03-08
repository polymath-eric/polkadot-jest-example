import { connectXcm } from ".";

jest.mock("@moonbeam-network/xcm-sdk");

describe("connectXcm", () => {
  it("should not throw warnings", async () => {
    const xcm = await connectXcm();

    expect(xcm).toBeUndefined();
  });
});
