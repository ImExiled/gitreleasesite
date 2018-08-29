var UserSettings = {
    // User defined settings that we can load.
    pageTitle: "BandagedBetterDiscord", // The website title.
    pageHeadTitle: "BandagedBD", // The website title that is displayed in the top left.
    downloadBtnTitle: "Download BandagedBD",
    gitLink: "https://api.github.com/repos/rauenzi/BetterDiscordApp/releases", // This is the link that grabs update information.
    advanced: {
        // Advanced site things, such as configurable functions and advanced multi-variables.
        // This is done so that almost nothing has to be edited server-side to add a new feature or
        // change something.
        useVersionCheck: true, // Enable or disable the version checker.
        useInternalCheck: true, // This flag allows the user to use either the default, included version checker or to use their own.
        customVersionCheck: function() {
            // This is where the user should write their version checker, as long as the name above
            // matches. If it doesn't, it'll throw an unrecoverable error.
            console.warn("IT WORKS!");
        }
    }
};