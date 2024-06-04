module.exports = ({ env }) => ({
    "rest-cache": {
    config: {
        provider: {
            name: "memory",
            options: {
                max: 0,
                maxAge: 3600000,
            },
        },
        strategy: {
            contentTypes: [
                // list of Content-Types UID to cache
                "api::message.message",
                "api::project.project",
                "api::team.team",
                "api::about.about",
                "api::contact-page.contact-page",
                "api::homepage.homepage",
                "api::project-page.project-page",
            ],
        },
    },
    },
});