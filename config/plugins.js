module.exports = {
    "rest-cache": {
    config: {
        provider: {
            name: "memory",
            options: {
                max: 0,
                maxAge: 0,
            },
        },
        strategy: {
        contentTypes: [
                // list of Content-Types UID to cache
                // "api::category.category",
                // "api::article.article",
                // "api::global.global",
                // "api::homepage.homepage",
            ],
        },
    },
    },
};