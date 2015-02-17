;(function () {
    'use strict';

    module.exports = function (grunt) {
        require('load-grunt-tasks')(grunt, {
            pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
        });
        require('time-grunt')(grunt);

        // Project configuration.
        grunt.initConfig({

            // Metadata.
            pkg: grunt.file.readJSON("package.json"),
            banner: '/* ' +
                '<%= pkg.title || pkg.name %> - <%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> - ' +
                'Copyright (c) <%= grunt.template.today("yyyy") %> Informatik der Arbeitslosenversicherung; */\n',

            // Task configurations.
            clean: {
                all: ['dist', 'build'],
                dist: ['dist'],
                build: ['build'],
                demo: ['demo']
            },
            ngtemplates:  {
                'alv-ch-ng.security':        {
                    cwd:      'src/ng/',
                    src:      'template/security/**.html',
                    dest:     'src/ng/alv-ch-ng.security.templates.js'
                },
                'alv-ch-ng.ui-navigation':        {
                    cwd:      'src/ng/',
                    src:      'template/navigation/**.html',
                    dest:     'src/ng/alv-ch-ng.ui-navigation.templates.js'
                },
                'alv-ch-ng.ui-forms':        {
                    cwd:      'src/ng/',
                    src:      ['template/typeahead/**.html', 'template/tooltip/**.html'],
                    dest:     'src/ng/alv-ch-ng.ui-forms.templates.js'
                },
                'alv-ch-ng.ui-core':        {
                    cwd:      'src/ng/',
                    src:      ['template/core/**.html'],
                    dest:     'src/ng/alv-ch-ng.ui-core.templates.js'
                }
            },
            concat: {
                options: {
                    separator: ';',
                    banner: '<%= banner %>'
                },
                security: {
                    src: ['src/ng/alv-ch-ng.security.js', 'src/ng/alv-ch-ng.security.templates.js'],
                    dest: 'dist/alv-ch-ng.security.js'
                },
                navigation: {
                    src: ['src/ng/alv-ch-ng.ui-navigation.js', 'src/ng/alv-ch-ng.ui-navigation.templates.js'],
                    dest: 'dist/alv-ch-ng.ui-navigation.js'
                },
                forms: {
                    src: ['src/ng/alv-ch-ng.ui-forms.js', 'src/ng/alv-ch-ng.ui-forms.templates.js','lib/ng-lodash/build/ng-lodash.js','lib/bootstrap-datepicker/js/locales/bootstrap-datepicker.de.js','lib/bootstrap-datepicker/js/locales/bootstrap-datepicker.fr-CH.js','lib/bootstrap-datepicker/js/locales/bootstrap-datepicker.it-CH.js','lib/bootstrap-datepicker/js/locales/bootstrap-datepicker.en-GB.js'],
                    dest: 'dist/alv-ch-ng.ui-forms.js'
                },
                core: {
                    src: ['src/ng/alv-ch-ng.ui-core.js', 'src/ng/alv-ch-ng.ui-core.templates.js'],
                    dest: 'dist/alv-ch-ng.ui-core.js'
                }
            },
            copy: {
                prod: {
                    options: {
                        banner: '<%= banner %>'
                    },
                    files: [
                        {
                            expand: true,
                            flatten: true,
                            src: [
                                'src/js/alv-ch-ng.common.js',
                                'src/ng/alv-ch-ng.ui-scroll.js'
                            ],
                            dest: 'dist',
                            filter: 'isFile'
                        }
                    ]
                },
                demo: {
                    files: [
                        {
                            expand: true,
                            flatten: false,
                            cwd: 'lib/alv-ch-ng.demo/dist/',
                            src: [
                                '**/*'
                            ],
                            dest: 'demo',
                            filter: 'isFile'
                        },
                        {
                            expand: true,
                            cwd: 'lib/bootstrap/',
                            src: 'fonts/*',
                            dest: 'demo/lib/bootstrap/'
                        },
                        {
                            expand: true,
                            cwd: 'lib/bootstrap-select/dist/',
                            src: '**/*',
                            dest: 'demo/lib'
                        },
                        {
                            expand: true,
                            cwd: 'lib/bootstrapaccessibilityplugin/plugins/css/',
                            src: '**/bootstrap-accessibility.css',
                            dest: 'demo/lib'
                        },
                        {
                            expand: true,
                            cwd: 'lib/octicons/octicons/',
                            src: '**/*',
                            dest: 'demo/lib/octicons'
                        },
                        {
                            expand: true,
                            cwd: 'lib/highlightjs/styles/',
                            src: '**/github.css',
                            dest: 'demo/lib'
                        },
                        {
                            expand: true,
                            cwd: 'lib/track.js',
                            src: '**/*.js',
                            dest: 'demo/lib'
                        },
                        {
                            expand: true,
                            cwd: 'private/fonts',
                            src: '**/*',
                            dest: 'demo/fonts'
                        }
                    ]
                }
            },
            uglify: {
                options: {
                    banner: '<%= banner %>'
                },
                prod: {
                    files: {
                        'dist/alv-ch-ng.security.min.js': ['dist/alv-ch-ng.security.js'],
                        'dist/alv-ch-ng.ui-core.min.js': ['dist/alv-ch-ng.ui-core.js'],
                        'dist/alv-ch-ng.ui-navigation.min.js': ['dist/alv-ch-ng.ui-navigation.js'],
                        'dist/alv-ch-ng.ui-forms.min.js': ['dist/alv-ch-ng.ui-forms.js'],
                        'dist/alv-ch-ng.ui-scroll.min.js': ['dist/alv-ch-ng.ui-scroll.js'],
                        'dist/alv-ch-ng.common.min.js': ['dist/alv-ch-ng.common.js']
                    }
                },
                demo: {
                    options: {
                        'mangle': false
                    },
                    files: {
                        'demo/lib/lib.min.js': [
                            'lib/jquery/dist/jquery.js',
                            'lib/bootstrap/dist/js/bootstrap.js',
                            'lib/bootstrap-select/dist/js/**/*.js',
                            'lib/bootstrapaccessibilityplugin/plugins/js/bootstrap-accessibility.js',
                            'lib/bootstrap-datepicker/js/**/*.js',
                            'lib/angular/angular.js',
                            'lib/autofill-event/src/autofill-event.js',
                            'lib/angular-cookies/angular-cookies.js',
                            'lib/angular-route/angular-route.js',
                            'lib/angular-sanitize/angular-sanitize.js',
                            'lib/angular-scroll/angular-scroll.js',
                            'lib/angular-ui-bootstrap/src/bindHtml/bindHtml.js',
                            'lib/angular-ui-bootstrap/src/position/position.js',
                            'lib/angular-ui-bootstrap/src/tabs/tabs.js',
                            'lib/angular-ui-bootstrap/src/tooltip/tooltip.js',
                            'lib/angular-ui-bootstrap/src/typeahead/typeahead.js',
                            'lib/angular-translate/angular-translate.js',
                            'lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                            'lib/angular-translate-storage-local/angular-translate-storage-local.js',
                            'lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                            'lib/ng-dev/dist/ng-dev.js',
                            'lib/highlightjs/highlight.pack.js',
                            'src/ng/alv-ch-ng.security.js',
                            'src/ng/alv-ch-ng.security.templates.js',
                            'src/ng/alv-ch-ng.ui-core.js',
                            'src/ng/alv-ch-ng.ui-core.templates.js',
                            'src/ng/alv-ch-ng.ui-forms.js',
                            'src/ng/alv-ch-ng.ui-forms.templates.js',
                            'src/ng/alv-ch-ng.ui-navigation.js',
                            'src/ng/alv-ch-ng.ui-navigation.templates.js',
                            'src/ng/alv-ch-ng.ui-scroll.js',
                            'src/js/alv-ch-ng.common.js'
                        ]
                    }
                }
            },
            less: {
                prod: {
                    options: {
                        paths: ['src/less'],
                        compress: false,
                        cleancss: true,
                        ieCompat: true
                    },
                    files: {
                        'dist/css/alv-ch-bootstrap.css': ['src/less/alv-ch.less'],
                        'dist/css/frutiger.css': ['src/less/typo/frutiger.less'],
                        'dist/css/admin-symbols.css': ['src/less/typo/admin-symbols.less']
                    }
                },
                development: {
                    options: {
                        paths: ['src/less'],
                        ieCompat: true
                    },
                    files: {
                        'dist/css/alv-ch-bootstrap.css': ['src/less/alv-ch.less'],
                        'dist/css/frutiger.css': ['src/less/typo/frutiger.less'],
                        'dist/css/admin-symbols.css': ['src/less/typo/admin-symbols.less']
                    }
                },
                demo: {
                    options: {
                        paths: ['src/less'],
                        compress: false,
                        cleancss: true,
                        ieCompat: true
                    },
                    files: {
                        'demo/lib/alv-ch-bootstrap.css': ['src/less/alv-ch.less'],
                        'demo/lib/frutiger.css': ['src/less/typo/frutiger.less'],
                        'demo/lib/admin-symbols.css': ['src/less/typo/admin-symbols.less']
                    }
                }
            },
            cssbeautifier: {
                options: {
                    banner: '<%= banner %>'
                },
                prod: {
                    files: {
                        'dist/css/alv-ch-bootstrap.css': ['dist/css/alv-ch-bootstrap.css'],
                        'dist/css/frutiger.css': ['dist/css/frutiger.css'],
                        'dist/css/admin-symbols.css': ['dist/css/admin-symbols.css']
                    }
                }
            },
            cssmin: {
                options: {
                    banner: '<%= banner %>'
                },
                prod: {
                    files: {
                        'dist/css/alv-ch-bootstrap.min.css': ['dist/css/alv-ch-bootstrap.css'],
                        'dist/css/frutiger.min.css': ['dist/css/frutiger.css'],
                        'dist/css/admin-symbols.min.css': ['dist/css/admin-symbols.css']
                    }
                }
            },
            compress: {
                main: {
                    options: {
                        mode: 'gzip'
                    },
                    files: [
                        { src: ['dist/alv-ch-ng.common.min.js'], dest: 'dist/alv-ch-ng.common.min.js' },
                        { src: ['dist/alv-ch-ng.security.min.js'], dest: 'dist/alv-ch-ng.security.min.js' },
                        { src: ['dist/alv-ch-ng.ui-core.min.js'], dest: 'dist/alv-ch-ng.ui-core.min.js' },
                        { src: ['dist/alv-ch-ng.ui-scroll.min.js'], dest: 'dist/alv-ch-ng.ui-scroll.min.js' },
                        { src: ['dist/alv-ch-ng.ui-navigation.min.js'], dest: 'dist/alv-ch-ng.ui-navigation.min.js' },
                        { src: ['dist/alv-ch-ng.ui-forms.min.js'], dest: 'dist/alv-ch-ng.ui-forms.min.js' },
                        { src: ['dist/css/admin-symbols.min.css'], dest: 'dist/css/admin-symbols.min.css' },
                        { src: ['dist/css/alv-ch-bootstrap.min.css'], dest: 'dist/css/alv-ch-bootstrap.min.css' },
                        { src: ['dist/css/frutiger.min.css'], dest: 'dist/css/frutiger.min.css' }
                    ]
                }
            },
            jasmine: {
                unit: {
                    src: [
                        'src/ng/*.js'
                    ],
                    options: {
                        specs: ['test/unit/**/*.unit.spec.js'],
                        helpers: 'test/unit/helpers/*.helper.js',
                        vendor: [
                            'lib/jquery/dist/jquery.js',
                            'lib/jasmine-jquery/lib/jasmine-jquery.js',
                            'lib/angular/angular.js',
                            'lib/angular-mocks/angular-mocks.js',
                            'lib/angular-translate/angular-translate.js',
                            'lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                            'lib/angular-translate-storage-local/angular-translate-storage-local.js',
                            'lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                            'lib/bootstrap-select/dist/js/**/*.js',
                            'lib/bootstrap-datepicker/js/**/*.js',
                            'lib/mailcheck/src/mailcheck.min.js',
                            'lib/angular-ui-bootstrap/src/typeahead/typeahead.js',
                            'lib/angular-ui-bootstrap/src/tooltip/tooltip.js',
                            'lib/angular-ui-bootstrap/src/position/position.js',
                            'lib/angular-ui-bootstrap/src/bindHtml/bindHtml.js',
                            'lib/ng-lodash/build/ng-lodash.js',
                            'node_modules/grunt-contrib-jasmine/vendor/jasmine-2.0.0/jasmine.js'
                        ],
                        version: '2.0.0',
                        template: require('grunt-template-jasmine-istanbul'),
                        templateOptions: {
                            coverage: 'build/coverage/coverage.json',
                            report: [
                                {
                                    type: 'html',
                                    options: {
                                        dir: 'build/coverage/reports/html'
                                    }
                                },
                                {
                                    type: 'lcov',
                                    options: {
                                        dir: 'build/coverage/reports/lcov'
                                    }
                                },
                                {
                                    type: 'text-summary'
                                }
                            ]
                        }
                    }
                }
            },
            coveralls: {
                options: {
                    force: false
                },
                all: {
                    src: 'build/coverage/reports/lcov/lcov.info'
                }
            },
            push: {
                options: {
                    files: ['package.json'],
                    updateConfigs: [],
                    releaseBranch: 'master',
                    add: true,
                    addFiles: ['*.*', 'dist/**', 'src/**', 'test/**'], // '.' for all files except ignored files in .gitignore
                    commit: true,
                    commitMessage: 'Release v%VERSION%',
                    commitFiles: ['*.*', 'dist/**', 'src/**', 'test/**'], // '-a' for all files
                    createTag: true,
                    tagName: 'v%VERSION%',
                    tagMessage: 'Version %VERSION%',
                    push: false,
                    npm: false,
                    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
                }
            },
            jshint: {
                gruntfile: {
                    options: {
                        jshintrc: '.jshintrc'
                    },
                    src: 'Gruntfile.js'
                },
                src: {
                    options: {
                        jshintrc: '.jshintrc'
                    },
                    src: ['src/**/*.js']
                },
                test: {
                    options: {
                        jshintrc: 'test/.jshintrc'
                    },
                    src: ['test/**/*.js', '!test/dev/*.js', '!test/**/helpers/*.helper.js', '!test/e2e/**']
                }
            },
            lesslint: {
                options: {
                    csslint: {
                        csslintrc: '.csslintrc'
                    },
                    imports: ['src/less/**/*.less']
                },
                src: ['src/less/alv-ch.less']
            },
            htmlhint: {
                options: {
                    htmlhintrc: '.htmlhintrc'
                },
                templates: {
                    src: ['src/ng/template/**/*.html']
                }
            },
            watch: {
                templates: {
                    files: 'src/ng/template/**/*.html',
                    tasks: ['ngtemplates']
                },
                less: {
                    files: 'src/less/**/*.less',
                    tasks: ['less:demo']
                },
                jshint: {
                    files: 'src/**/*.js',
                    tasks: ['jshint-test','uglify:demo']
                },
                jasmine: {
                    files: 'src/ng/**/*.js',
                    tasks: ['unit-test']
                }
            },
            browserSync: {
                dev: {
                    bsFiles: {
                        src : 'demo/**/*'
                    },
                    options: {
                        watchTask: true
                    }
                }
            }
        });

        // Tests
        grunt.registerTask('unit-test', ['jasmine']);
        grunt.registerTask('jshint-test', ['jshint']);
        grunt.registerTask('lesslint-test', ['lesslint']);

        grunt.registerTask('all-test', ['lesslint-test', 'htmlhint:templates', 'jshint-test', 'unit-test']);
        // CI
        grunt.registerTask('travis', ['jshint', 'clean:build', 'unit-test', 'coveralls']);
        // Templates
        grunt.registerTask('templates', ['ngtemplates']);

        // DEV
        grunt.registerTask('prepare', ['clean:demo','copy:demo','build']);
        grunt.registerTask('build', ['ngtemplates','less:demo','jshint-test','uglify:demo']);
        grunt.registerTask('dev', ['build', 'browserSync','watch']);

        // Default task.
        grunt.registerTask('default', ['clean:all','templates','all-test','less:prod','cssbeautifier','cssmin','concat','copy:prod','uglify:prod']);
    };


})();