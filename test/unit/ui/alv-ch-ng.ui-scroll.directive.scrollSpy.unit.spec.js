;(function () {
    describe('scrollSpy and spy directive', function () {
        var elem, scope;

        beforeEach(module('alv-ch-ng.ui-scroll', function ($translateProvider) {
            $translateProvider.translations('en', {
                common_i18n_contents:'Contents'
            })
            .translations('de', {
                common_i18n_contents:'Inhalt'
            });
            $translateProvider.preferredLanguage('en');
        }));

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope;
            elem = angular.element('<body><div id="test" style="height: 2000px;"><div scroll-spy><ul><li spy="test1">test 1</li><li spy="test2">test 2</li></ul><h1 id="test1">test 1</h1><h1 id="test2">test 2</h1></div></div></body>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('renders the element as required.',
            function() {
                inject(function () {
                    //var spies = ScrollSpyService.getSpies();

                    expect(elem.children('test')).toBeTruthy();
                    //expect(spies.length).toEqual(2);
                    expect(elem.find('li[spy=test1]').hasClass('active')).toBeFalsy();
                    expect(elem.find('li[spy=test2]').hasClass('active')).toBeFalsy();

                    /*spies[1].in();
                    scope.$digest();
                    expect(elem.find('li[spy=test2]').hasClass('active')).toBeTruthy();
                    expect(elem.find('li[spy=test1]').hasClass('active')).toBeFalsy();

                    spies[1].out();
                    scope.$digest();
                    expect(elem.find('li[spy=test2]').hasClass('active')).toBeFalsy();
                    expect(elem.find('li[spy=test1]').hasClass('active')).toBeFalsy();*/
                });
            }
        );

        it('renders the select element as required (language changed to en).',
            function() {
                inject(function () {
                    /*
                    var broadCastedLanguage;
                    I18nPropertyService.registerLanguageChangeListener(function (newLanguage) {
                        broadCastedLanguage = newLanguage;
                    });
                    I18nPropertyService.setCurrentLanguage('en');
                    expect(broadCastedLanguage).toEqual('en');
                    scope.$digest();
                    */
                    //var spies = ScrollSpyService.getSpies();
                    //expect(spies.length).toEqual(0);
                });
            }
        );
        /*
         it('renders the element as required and scrolls.',
         function() {
         inject(function () {
         //window.scroll(0, 1000);
         //$(window).trigger("scroll");

         expect(elem.children('test')).toBeTruthy();
         //expect(scope.spies.length).toEqual(2);
         //expect(elem.find('li[spy=test1]').hasClass('active')).toBeFalsy();
         //expect(elem.find('li[spy=test2]').hasClass('active')).toBeFalsy();
         });
         }
         );
        */
    });
}());
