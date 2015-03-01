;(function () {
    describe("UiRenderService", function () {

        var LABEL_WIDTH_CUSTOM = 5;
        var CLASS_PREFIX_CUSTOM = 'testPrefix';
        var GRID_DEFAULT_DEVICE_CUSTOM = 'sm';
        var GRID_DEFAULT_COLUMNS_CUSTOM = 3;
        var COMMON_SUBMIT_CUSTOM = 'commonSubmitCustom';
        var COMMON_CANCEL_CUSTOM = 'commonCancelCustom';
        var TITLE_SELECT_CUSTOM = 'titleSelectCustom';
        var PAGE_NAVIGATION_DEFAULT_COLUMNS = 2;
        var SCROLL_UP_CUSTOM = 200;
        var SCROLL_UP_BOTTOM_CUSTOM = 10;
        var SCROLL_UP_I18N_CUSTOM='common_i18n_scrollToTop';
        var DATEPICKER_CONFIG_CUSTOM='testDatepickerConfig';

        var customConfig = {
            'labelWidth': LABEL_WIDTH_CUSTOM,
            'classPrefix': CLASS_PREFIX_CUSTOM,
            'gridDefaultDevice': GRID_DEFAULT_DEVICE_CUSTOM,
            'gridDefaultColumns': GRID_DEFAULT_COLUMNS_CUSTOM,
            'commonSubmit': COMMON_SUBMIT_CUSTOM,
            'commonCancel': COMMON_CANCEL_CUSTOM,
            'titleSelect': TITLE_SELECT_CUSTOM,
            'pageNavigationDefaultColumns': PAGE_NAVIGATION_DEFAULT_COLUMNS,
            'scrollUp':SCROLL_UP_CUSTOM,
            'scrollUpBottom':SCROLL_UP_BOTTOM_CUSTOM,
            'scrollUpI18n':SCROLL_UP_I18N_CUSTOM,
            'datepickerConfig':DATEPICKER_CONFIG_CUSTOM
        };

        beforeEach(module('alv-ch-ng.core', function (UiConfigServiceProvider) {
            UiConfigServiceProvider.setConfig(customConfig);
        }));

        it('provides correct gridLabelClasses', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getFormGridLabelClass()).toEqual('col-'+GRID_DEFAULT_DEVICE_CUSTOM+'-' + LABEL_WIDTH_CUSTOM);
            });
        });

        it('provides correct gridLabelClasses when an offset is given', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getFormGridLabelClass(5)).toEqual('col-'+GRID_DEFAULT_DEVICE_CUSTOM+'-offset-' + LABEL_WIDTH_CUSTOM);
            });
        });

        it('renders a div as simple form grid content', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getFormGridContent().hasClass('col-'+GRID_DEFAULT_DEVICE_CUSTOM+'-' + (12-LABEL_WIDTH_CUSTOM) )).toBeTruthy();
            });
        });

        it('renders a div as simple form grid ', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getFormGrid()).toEqual('<div class="col-'+GRID_DEFAULT_DEVICE_CUSTOM+'-' + (12-LABEL_WIDTH_CUSTOM) + '"></div>');
            });
        });

        it('provides a commonSubmit getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getCommonSubmit()).toEqual(COMMON_SUBMIT_CUSTOM);
            });
        });

        it('provides a commonCancel getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getCommonCancel()).toEqual(COMMON_CANCEL_CUSTOM);
            });
        });

        it('provides a classPrefix getter that is prepended to the param class', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getClassPrefix('testClass')).toEqual(CLASS_PREFIX_CUSTOM + '-testClass');
            });
        });

        it('provides a titleSelect getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getTitleSelect()).toEqual(TITLE_SELECT_CUSTOM);
            });
        });

        it('provides a gridDefaultDevice getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getGridDefaultDevice()).toEqual(GRID_DEFAULT_DEVICE_CUSTOM);
            });
        });

        it('provides a gridDefaultColumns getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getGridDefaultColumns()).toEqual(GRID_DEFAULT_COLUMNS_CUSTOM);
            });
        });

        it('provides a getHelptext getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getHelptext('testValue').attr('translate')).toEqual("testValue");
                expect(UiRenderService.getHelptext('testValue').hasClass('help-block')).toBeTruthy();
            });
        });

        it('provides a getPageNavigationDefaultColumns getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getPageNavigationDefaultColumns()).toEqual(PAGE_NAVIGATION_DEFAULT_COLUMNS);
            });
        });

        it('provides a getScrollUp getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getScrollUp()).toEqual(SCROLL_UP_CUSTOM);
            });
        });

        it('provides a getScrollUpBottom getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getScrollUpBottom()).toEqual(SCROLL_UP_BOTTOM_CUSTOM);
            });
        });

        it('provides a getScrollUpI18n getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getScrollUpI18n()).toEqual(SCROLL_UP_I18N_CUSTOM);
            });
        });

        it('provides a getDatepickerConfig getter', function () {
            inject(function (UiRenderService) {
                expect(UiRenderService.getDatepickerConfig()).toEqual(DATEPICKER_CONFIG_CUSTOM);
            });
        });
    });

}());

