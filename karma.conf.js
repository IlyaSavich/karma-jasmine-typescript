module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-typescript',
            'karma-spec-reporter',
        ],
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json',
        },
        client: {
            clearContext: false,
        },
        files: [{ pattern: 'src/**/*.ts' }, { pattern: 'test/**/*.ts' }],
        preprocessors: {
            'src/**/*.ts': ['karma-typescript'],
            'test/**/*.ts': ['karma-typescript'],
        },
        reporters: ['spec', 'karma-typescript'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        browsers: ['ChromeHeadless'],
    });
};
