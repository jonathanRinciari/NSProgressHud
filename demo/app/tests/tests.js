var NSProgressHud = require("nativescript-NSProgressHud").NSProgressHud;
var nSProgressHud = new NSProgressHud();

describe("greet function", function() {
    it("exists", function() {
        expect(nSProgressHud.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nSProgressHud.greet()).toEqual("Hello, NS");
    });
});