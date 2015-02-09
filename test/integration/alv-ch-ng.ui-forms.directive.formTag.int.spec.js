;(function () {

    describe("alv-ch-ng.ui - autocompleter and form-tag", function () {
        var protractorLink = element(by.linkText('Protractor Page'));

        beforeEach(function(){
            // Load the homepage.
            browser.get('http://localhost:8889');
            // navigate to the protractor page
            protractorLink.click();
        });

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
            element(by.id(typeaheadId)).element(by.linkText('Belfast')).click();
            expect(element.all(by.css('div.tag')).count()).toBe(6);
            expect(element.all(by.css('div.tag')).last().getText()).toContain('Belfast');

            element(by.model('formTag')).clear();

            element(by.model('formTag')).sendKeys('Belfast');
            expect(element(by.id(typeaheadId))).toBeTruthy();
            element(by.id(typeaheadId)).element(by.linkText('Belfast')).click();
            expect(element.all(by.css('div.tag')).count()).toBe(6);
        });

        it('adds a tag to form-tag element by clicking the autocompleter link', function(){
            var typeaheadId = element(by.id('form-tag')).getAttribute('aria-owns');
            expect(element.all(by.css('div.tag')).count()).toBe(5);
            element(by.model('formTag')).sendKeys('Be');
            expect(element(by.id(typeaheadId))).toBeTruthy();

            element(by.id(typeaheadId)).element(by.linkText('Bern')).click();

            expect(element.all(by.css('div.tag')).count()).toBe(6);
        });

        it('adds a tag to form-tag element by choosing dropdown item', function(){
            expect(element.all(by.css('div.tag')).count()).toBe(5);
            element(by.buttonText('Berufsgruppen ')).click(); //add space because directives add one
            expect(element(by.css('div.btn-group.open'))).toBeTruthy();
            element(by.linkText('Bauhandwerk')).click();
            expect(element.all(by.css('div.tag')).count()).toBe(6);
            expect(element.all(by.css('div.tag')).last().getText()).toContain('Bauhandwerk');
        });
    });

}());

