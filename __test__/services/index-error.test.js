const service = require("../../service");
jest.mock("axios");
describe("Service API", () => {
  it("Test GET Petition error", async () => {
    // try {
    //
    // } catch (error) {
    //   expect(error).toBeTruthy();
    // }
    expect(async () => {
      const mockError = new Error("Fallo");
      axios.get.mockRejectedValueOnce(mockError);
      const spy = jest.spyOn(service, "getDataService");
      await service.getDataService();
    }).toThrow(TypeError);
  });
});
