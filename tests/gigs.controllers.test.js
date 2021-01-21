const GigsControllers = require('../controllers/gigs.controllers');
const gig = require('../controllers/gigs.controllers')

describe("GigsController.create", () => {
  it("should have a create function", () => {
    expect(typeof GigsControllers.create).toBe("function");
  });
});

describe("GigsController.create", () => {
  it("should have a create function", () => {
    expect(GigsControllers.create).toBeDefined();
  });
});

describe("GigsController.findAll", () => {
  it("should have a findAll function", () => {
    expect(typeof GigsControllers.findAll).toBe("function");
  });
});