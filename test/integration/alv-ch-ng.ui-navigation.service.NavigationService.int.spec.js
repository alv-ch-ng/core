;(function () {

    describe("NavigationServiceProvider", function () {
        var protractorLink = element(by.linkText('Protractor Page'));

        beforeEach(function(){
            // Load the homepage.
            browser.get('http://localhost:8889');
            // navigate to the protractor page
            protractorLink.click();
        });

        /*it('Hello Julie!', function() {
            // Find the element with ng-model matching 'yourName' - this will
            // find the <input type="text" ng-model="yourName"/> element - and then
            // type 'Julie' into it.
            element(by.model('yourName')).sendKeys('Julie');

            // Find the element with binding matching 'yourName' - this will
            // find the <h1>Hello {{yourName}}!</h1> element.
            var greeting = element(by.binding('yourName'));

            // Assert that the text element has the expected value.
            // Protractor patches 'expect' to understand promises.
            expect(greeting.getText()).toEqual('Hello Julie!');
        });*/
        it('checks global navigation', function(){
            expect(element(by.css('ul.nav.navbar-nav'))).toBeTruthy();
            expect(element.all(by.css('ul.nav.navbar-nav li')).count()).toBeGreaterThan(0);
            expect(element(by.css('ul.nav.navbar-nav li.active')).element(by.linkText('Protractor Page'))).toBeTruthy();
        });

        it('checks breadcrumbs', function(){
            expect(element(by.css('ol.breadcrumb'))).toBeTruthy();
            expect(element.all(by.css('ol.breadcrumb li')).count()).toBe(2);

            expect(element.all(by.css('ol.breadcrumb li')).first().element(by.css('a')).getAttribute('class')).toNotContain('ng-hide');
            expect(element.all(by.css('ol.breadcrumb li')).first().element(by.css('span')).getAttribute('class')).toContain('ng-hide');

            expect(element.all(by.css('ol.breadcrumb li')).last().element(by.css('a')).getAttribute('class')).toContain('ng-hide');
            expect(element.all(by.css('ol.breadcrumb li')).last().element(by.css('span')).getAttribute('class')).toNotContain('ng-hide');
            expect(element.all(by.css('ol.breadcrumb li')).last().getAttribute('class')).toContain('active');
        });
    });

}());

