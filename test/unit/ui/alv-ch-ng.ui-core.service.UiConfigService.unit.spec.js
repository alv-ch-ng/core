;(function () {
    describe("UiConfigService", function () {

        beforeEach(module('alv-ch-ng.ui-core', function () { }));

        describe('with default values', function() {

            var LABELWIDTH_DEFAULT = 2;
            var CLASSPREFIX_DEFAULT = 'alv';
            var GRID_DEFAULT_DEVICE_DEFAULT = 'md';
            var GRID_DEFAULT_COLUMNS_DEFAULT = 12;
            var PAGE_NAVIGATION_DEFAULT_COLUMNS = 2;
            var SCROLL_UP_DEFAULT = 300;
            var SCROLL_UP_BOTTOM_DEFAULT = 20;
            var SCROLL_UP_I18N_DEFAULT='common_i18n_scrollToTop';
            var DATEPICKER_CONFIG_CUSTOM={ autoclose: true, todayHighlight: true };

            it('has a labelWidth of ' + LABELWIDTH_DEFAULT, function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getLabelWidth()).toBe(LABELWIDTH_DEFAULT);
                });
            });

            it('has "' + CLASSPREFIX_DEFAULT + '" as classPrefix', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getClassPrefix()).toEqual(CLASSPREFIX_DEFAULT);
                });
            });

            it('has "' + GRID_DEFAULT_DEVICE_DEFAULT + '" as gridDefaultDevice attribute', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getGridDefaultDevice()).toEqual(GRID_DEFAULT_DEVICE_DEFAULT);
                });
            });

            it('has "' + GRID_DEFAULT_COLUMNS_DEFAULT + '" as gridDefaultColumns attribute', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getGridDefaultColumns()).toEqual(GRID_DEFAULT_COLUMNS_DEFAULT);
                });
            });

            it('has no commonSubmit fn', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getCommonSubmit()).toBeUndefined();
                });
            });

            it('has no commonCancel fn', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getCommonCancel()).toBeUndefined();
                });
            });

            it('has no titleSelect attribute', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getTitleSelect()).toBeUndefined();
                });
            });

            it('has "'+PAGE_NAVIGATION_DEFAULT_COLUMNS+'" as getPageNavigationDefaultColumns attribute ', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getPageNavigationDefaultColumns()).toEqual(PAGE_NAVIGATION_DEFAULT_COLUMNS);
                });
            });

            it('has "'+SCROLL_UP_DEFAULT+'" as getScrollUp attribute ', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUp()).toEqual(SCROLL_UP_DEFAULT);
                });
            });

            it('has "'+SCROLL_UP_BOTTOM_DEFAULT+'" as getScrollUpBottom attribute ', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUpBottom()).toEqual(SCROLL_UP_BOTTOM_DEFAULT);
                });
            });

            it('has "'+SCROLL_UP_I18N_DEFAULT+'" as getScrollUpI18n attribute ', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUpI18n()).toEqual(SCROLL_UP_I18N_DEFAULT);
                });
            });

            it('has "'+DATEPICKER_CONFIG_CUSTOM+'" as getDatepickerConfig attribute ', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getDatepickerConfig()).toEqual(DATEPICKER_CONFIG_CUSTOM);
                });
            });
        });

        describe('with custom config', function() {

            var LABEL_WIDTH_CUSTOM = 5;
            var CLASS_PREFIX_CUSTOM = 'testPrefix';
            var GRID_DEFAULT_DEVICE_CUSTOM = 'sm';
            var GRID_DEFAULT_COLUMNS_CUSTOM = 3;
            var COMMON_SUBMIT_CUSTOM = 'commonSubmitCustom';
            var COMMON_CANCEL_CUSTOM = 'commonCancelCustom';
            var TITLE_SELECT_CUSTOM = 'titleSelectCustom';
            var PAGE_NAVIGATION_DEFAULT_COLUMNS = 5;
            var SCROLL_UP_CUSTOM = 200;
            var SCROLL_UP_BOTTOM_CUSTOM = 10;
            var SCROLL_UP_I18N_CUSTOM='scrollToTop';
            var DATEPICKER_CONFIG_CUSTOM='datepickerCustom';

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

            var err_msg = '';

            beforeEach(module('alv-ch-ng.ui-core', function (UiConfigServiceProvider) {
                UiConfigServiceProvider.setConfig(customConfig);
                try {
                    UiConfigServiceProvider.setConfig(null);
                } catch (error) {
                    err_msg = error.message;
                }
            }));

            it('rejects empty config params on setConfig()', function () {
                inject(function() {});
                expect(err_msg).toEqual('Param \'config\' must not be empty!');
            });

            it('reflects the custom labelWidth config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getLabelWidth()).toBe(LABEL_WIDTH_CUSTOM);
                });
            });

            it('reflects the custom classPrefix config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getClassPrefix()).toBe(CLASS_PREFIX_CUSTOM);
                });
            });

            it('reflects the custom gridDefaultDevice config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getGridDefaultDevice()).toBe(GRID_DEFAULT_DEVICE_CUSTOM);
                });
            });

            it('reflects the custom gridDefaultColumns config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getGridDefaultColumns()).toBe(GRID_DEFAULT_COLUMNS_CUSTOM);
                });
            });

            it('reflects the custom commonSubmit config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getCommonSubmit()).toBe(COMMON_SUBMIT_CUSTOM);
                });
            });

            it('reflects the custom commonCancel config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getCommonCancel()).toBe(COMMON_CANCEL_CUSTOM);
                });
            });

            it('reflects the custom titleSelect config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getTitleSelect()).toBe(TITLE_SELECT_CUSTOM);
                });
            });

            it('reflects the custom pageNavigationDefaultColumns config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getPageNavigationDefaultColumns()).toEqual(PAGE_NAVIGATION_DEFAULT_COLUMNS);
                });
            });

            it('reflects the custom getScrollUp config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUp()).toEqual(SCROLL_UP_CUSTOM);
                });
            });

            it('reflects the custom getScrollUpI18n config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUpI18n()).toEqual(SCROLL_UP_I18N_CUSTOM);
                });
            });

            it('reflects the custom getScrollUpBottom config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getScrollUpBottom()).toEqual(SCROLL_UP_BOTTOM_CUSTOM);
                });
            });

            it('reflects the custom datepickerConfig config', function () {
                inject(function (UiConfigService) {
                    expect(UiConfigService.getDatepickerConfig()).toEqual(DATEPICKER_CONFIG_CUSTOM);
                });
            });
        });

        describe('UiConfig - throws error if theres no config ', function(){
            var config_msg = '';

            beforeEach(module('alv-ch-ng.ui-core', function (UiConfigServiceProvider) {
                try {
                    UiConfigServiceProvider.setConfig(null);
                } catch (error) {
                    config_msg = error.message;
                }
            }));

            it('checks for not allowed empty values when setters are called.', function () {
                inject(function () {});
                expect(config_msg).toEqual('Param \'config\' must not be empty!');
            });
        });

    });

}());

