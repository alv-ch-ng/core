;(function () {
describe('table of content (toc) spy directive', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.ui-core', function ($translateProvider) {
        $translateProvider.translations('en', {
            common_i18n_contents:'Contents',
            testTitle:'EN Title'
        })
        .translations('de', {
            common_i18n_contents:'Inhalt',
                testTitle:'DE Title'
        });
        $translateProvider.preferredLanguage('en');
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        elem = angular.element('<div>'+
                                   '<toc selector="h1"></toc>'+
                                   '<div>'+
                                        '<h1>Title 1</h1>'+
                                        '<h1>Title 2</h1>'+
                                        '<h1 id="title3" translate="testTitle"></h1>'+
                                   '</div>'+
                               '</div>');
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('renders the element as required.',
        function() {
            inject(function () {
                scope.$digest();
                expect(elem.children('#toc')).toBeTruthy();
                expect(elem.children('#toc').children('span')).toContainText('Contents');
                expect(elem.find('#title3')).toContainText('EN Title');
                expect(elem.children('#toc').children('.toc-list')).toBeTruthy();
                expect(elem.children('#toc').children('.toc-list').children('li')).toBeTruthy();
            });
        }
    );

    it('check scrollToc function.', function () {
        spyOn(scope, '$broadcast').and.callThrough();
        scope.scrollToc('title1');
        scope.$digest();
        expect(scope.$broadcast).toHaveBeenCalledWith('alv-ch-ng:dom-manipulate', {'id':'toc','event':'toc:scrollToc'});
    });

    it('renders the element as required (language changed from en to de).',
        function() {
            inject(function ($translate) {
                $translate.use('de');
                scope.$digest();
                /*
                var broadCastedLanguage;
                I18nPropertyService.registerLanguageChangeListener(function (newLanguage) {
                    broadCastedLanguage = newLanguage;
                });
                I18nPropertyService.setCurrentLanguage('de');
                expect(broadCastedLanguage).toEqual('de');
                scope.$digest();
                */
                expect(elem.children('#toc')).toBeTruthy();
                expect(elem.children('#toc').children('span')).toContainText('Inhalt');
                expect(elem.find('#title3')).toContainText('DE Title');
                expect(elem.children('#toc').children('.toc-list')).toBeTruthy();
                expect(elem.children('#toc').children('.toc-list').children('li')).toBeTruthy();
            });
        }
    );

    it('renders the element with default selector as required.',
        function() {
            inject(function ($compile) {
                elem = angular.element('<div>'+
                                          '<toc></toc>'+
                                          '<div>'+
                                            '<h1 class="toc-item">Title 1</h1>'+
                                            '<h1 class="toc-item">Title 2</h1>'+
                                          '</div>'+
                                       '</div>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem.children('#toc')).toBeTruthy();
                expect(elem.children('#toc').children('span')).toContainText('Contents');
                expect(elem.children('#toc').children('.toc-list')).toBeTruthy();
                expect(elem.children('#toc').children('.toc-list').children('li')).toBeTruthy();
            });
        }
    );
});
}());