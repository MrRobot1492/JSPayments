describe("Hello World Test", function () {
    it("should test the main page", function () {
		browser.manage().window().maximize();
        browser.get("http://localhost:8080/");
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        browser.sleep(500);

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Hello World");
        browser.sleep(500);

        browser.get("http://localhost:8080/#!/show");
        expect(browser.getTitle()).toEqual("AngularJS Hello World");
        browser.sleep(500);

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Show The World");
        browser.sleep(500);

        browser.get("http://localhost:8080/#!/addCustomer");
        element(by.id("cName")).sendKeys("tester");
        browser.sleep(500);
        element(by.id("cCity")).sendKeys("Atlanta");
        browser.sleep(500);
        element(by.id("f1")).click();
        browser.get("http://localhost:8080/#!/addedCustomer/tester/Atlanta");
        var msg = element(by.binding("customerName")).getText();
        expect(msg).toEqual("Customer Name: tester");
        browser.sleep(500);

        var msg = element(by.binding("customerCity")).getText();
        expect(msg).toEqual("Customer City: Atlanta");
        browser.sleep(500);
    });
});
