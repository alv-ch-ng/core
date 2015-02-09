;(function() {

describe("ScrollFixCtrl", function() {

    beforeEach(module('alv-ch-ng.ui-scroll', function () { }));

    // todo unit tests as far as possible
    describe('with default values', function() {
        var scope, controller, elem;
        var attrScrollFix= false;
        var attrScrollFixBottom= false;
        var elementTop= 0;
        var overlayTop= 'auto';
        var elementId='test';
        var elementHeight=100;
        var elementWidth='100%';

        beforeEach(inject(function ($rootScope, $compile, $controller) {
            scope = $rootScope.$new();
            controller = $controller('ScrollFixCtrl', {
                '$scope': scope
            });
            elem=angular.element('<div><div id="test" style="height:100px; width:100%">testContent</div></div>');
            scope.$digest();
        }));


        it('init with scrollFix undefined', function () {
            inject(function ($compile) {
                var param = {
                    'attrScrollFix': attrScrollFix,
                    'attrScrollFixBottom': attrScrollFixBottom,
                    'elementId':elementId,
                    'elementTop': elementTop,
                    'elementHeight':elementHeight,
                    'elementWidth': elementWidth,
                    'overlayTop': overlayTop
                };
                controller.init(elem, param);
                $compile(elem)(scope);

                scope.$digest();

                //<div scroll-fix="" style="width: 200px; top: 0px; " id="random_2" class="scroll-fixed">testContent</div><div id="scroll-fix-random_2" style="height: 0px;"></div>
                //console.log(elem.html());
                expect(elem.children('div').attr('id')).toBe('test');
            });
        });
        /*
        it('init with scrollFoxBottom', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix scroll-fix-bottom="test">testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': "test",
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                expect(controller.init(element, customParam)).toBeTruthy();
            });
        });
        it('resize', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element("<div scroll-fix>testContent</div>");
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                customParam.fixed=controller.init(element, customParam);

                controller.resize("50%");
                expect(customParam.elementWidth).toBe('50%');
                expect(element.css('width')).toBe('50%');
            });
        });
        it('scrollFix without scrollFixBottom', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };

                controller.init(element, customParam);
                controller.scrollFix();
                expect(customParam.elementWidth).toBe('100%');
                expect(element.css('position')).toBe('fixed');
                expect(element.css('width')).toBe(ELEMENT_WIDTH);
                expect(element.css('z-index')).toBe('2000');
                expect(element.css('top')).toBe(ELEMENT_TOP+"px");
                //expect(element.after()).toBe(FIX_ELEMENT);
            });
        });
        it('scrollFix with scrollFixBottom', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix scroll-fix-bottom="testBottom">testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': "testBottom",
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                customParam.fixed=controller.init(element, customParam);

                controller.scrollFix();
                expect(customParam.elementWidth).toBe('100%');
                expect(element.css('position')).toBe('fixed');
                expect(element.css('width')).toBe(ELEMENT_WIDTH);
                expect(element.css('z-index')).toBe('2000');
                expect(element.css('bottom')).toBe('0px');
                //expect(element.before()).toBe(FIX_ELEMENT);
            });
        });
        it('fix', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                customParam.fixed=controller.init(element, customParam);
                controller.fix(1000);

                expect(customParam.scrollFixTop).toBe(1000);
                expect(element.css('top')).toBe('1000px');
                expect(element.hasClass('fixed')).toBeTruthy();
            });
        });
        it('fixTop', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                customParam.fixed=controller.init(element, customParam);
                controller.fixTop();

                expect(element.css('top')).toBe('0px');
                expect(element.hasClass('fixed')).toBeTruthy();
            });
        });
        it('fixBottom', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };
                customParam.fixed=controller.init(element, customParam);
                controller.fixBottom();

                expect(element.css('bottom')).toBe('0px');
                expect(element.hasClass('fixed')).toBeTruthy();
            });
        });
        it('release', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };

                controller.init(element, customParam);
                controller.scrollFix();

                expect(customParam.elementWidth).toBe('100%');
                expect(element.css('position')).toBe('fixed');
                expect(element.css('width')).toBe(ELEMENT_WIDTH);
                expect(element.css('z-index')).toBe('2000');
                expect(element.css('top')).toBe(ELEMENT_TOP+"px");

                controller.release();
                expect(element.css('position')).toBe('');
                expect(element.css('width')).toBe('0px');
                expect(element.css('z-index')).toBe('');
                expect(element.css('top')).toBe('auto');
            });
        });
        it('releaseLimit', function () {
            inject(function ($rootScope, $controller) {
                var controller = $controller('ScrollFixCtrl');
                var element=angular.element('<div scroll-fix>testContent</div>');
                var customParam = {
                    'fixed': FIXED,
                    'scrollFix': SCROLL_FIX,
                    'scrollFixBottom': SCROLL_FIX_BOTTOM,
                    'scrollFixLimit': SCROLL_FIX_LIMIT,
                    'elementHeight': ELEMENT_HEIGHT,
                    'elementWidth': ELEMENT_WIDTH,
                    'elementTop': ELEMENT_TOP,
                    'fixElementId': FIX_ELEMENT_ID,
                    'fixElement': FIX_ELEMENT
                };

                controller.init(element, customParam);
                controller.scrollFix();

                expect(customParam.elementWidth).toBe('100%');
                expect(element.css('position')).toBe('fixed');
                expect(element.css('width')).toBe(ELEMENT_WIDTH);
                expect(element.css('z-index')).toBe('2000');
                expect(element.css('top')).toBe(ELEMENT_TOP+"px");

                controller.releaseLimit();
                expect(element.css('position')).toBe('relative');
                expect(element.css('z-index')).toBe('1000');
                expect(element.css('top')).toBe('0px');
                expect(element.hasClass('fixed')).toBeFalsy();
            });
        });
        */
    });
});

}());
