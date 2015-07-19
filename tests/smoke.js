describe("a-test", function() {
  it("should run a test", function() {
    var ok = 1;
  });

  it("should require a file", function() {
    var f = require("../src/smoke");
    if(f() !== 53) throw new Error("module didn't export ok");
  });

  it("should use loaders", function() {
    var f = require("../src/index.coffee");
    if(f() !== 53) throw new Error("module didn't export ok");
  });
});