const axios = require("axios");
const service = require("../../service");
jest.mock("axios");
describe("Service API", () => {
  it("Test GET Petition error", async () => {
    axios.get.mockRejectedValueOnce("Fallo");
    try {
      await service.getDataService();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
