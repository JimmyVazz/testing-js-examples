const { getDataService } = require("../../service");

describe("Service API", () => {
  it("Test GET Petition success", async () => {
    const data = await getDataService();
    expect(data).toBeTruthy();
  });
});
