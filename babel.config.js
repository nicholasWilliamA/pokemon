module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        env: {
            production: {
                plugins: ['react-native-paper/babel'],
            },
        },
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@Components': './components',
                        '@Constants': './constants',
                        '@Functions': './functions',
                        '@Interfaces': './interfaces',
                        '@Contexts': './contexts',
                        '@Enums' : './enums',
                    },
                },
            ],
            ['nativewind/babel'],
        ],
    };
};
