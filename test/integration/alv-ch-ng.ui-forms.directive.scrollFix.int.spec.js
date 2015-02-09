;(function () {

    describe("alv-ch-ng.ui - scroll-fix", function () {
        var protractorLink = element(by.linkText('Protractor Page'));

        beforeEach(function(){
            // Load the homepage.
            browser.get('http://localhost:8889');
            // navigate to the protractor page
            protractorLink.click();
        });
/*
        it('adds a tag to form-tag element', function(){
            var typeaheadId = element(by.id('form-tag')).getAttribute('aria-owns');
            expect(element.all(by.css('div.tag')).count()).toBe(5);
            element(by.model('formTag')).sendKeys('Belfast');
            expect(element(by.id(typeaheadId))).toBeTruthy();
            element(by.model('formTag')).sendKeys(protractor.Key.ENTER);
            expect(element.all(by.css('div.tag')).count()).toBe(6);
            expect(element.all(by.css('div.tag')).last().getText()).toContain('Belfast');
        });

        it('try to add a duplicated tag to form-tag element', function(){
            var typeaheadId = element(by.id('form-tag')).getAttribute('aria-owns');
            expect(element.all(by.css('div.tag')).count()).toBe(5);

            element(by.model('formTag')).sendKeys('Belfast');
            expect(element(by.id(typeaheadId))).toBeTruthy();
            element(by.model('formTag')).sendKeys(protractor.Key.ENTER);
            expect(element.all(by.css('div.tag')).count()).toBe(6);
            expect(element.all(by.css('div.tag')).last().getText()).toContain('Belfast');

            element(by.model('formTag')).clear();

            element(by.model('formTag')).sendKeys('Belfast');
            expect(element(by.id(typeaheadId))).toBeTruthy();
            element(by.model('formTag')).sendKeys(protractor.Key.ENTER);
            expect(element.all(by.css('div.tag')).count()).toBe(6);
        });
*/
    });

}());

