var UserSettings = {
    // User defined settings that we can load.
    pageTitle: "BandagedBetterDiscord", // The website title.
    pageHeadTitle: "BandagedBD", // The website title that is displayed in the top left.
    downloadBtnTitle: "Download BandagedBD", // Leave blank if logo
    bgImage: "assets/img/bg2.png",
    aboutSectionText: "BandagedBD (Bandaged BetterDiscord) is a fork of the original BetterDiscord by Jiiks. This has a number of improvements over the original which is currently undergoing a full rewrite. In the interim, the current version has been unmaintained hence this fork existing. I will continue to maintain this fork until BDv2 comes out. I am helping to develop BDv2 as well so as release gets closer this fork will become less and less active.", // Text for about section...
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
        },
        imageItems: [ // This is where you should add any and all images to be put in the image thing.
            "assets/img/bg.png",
            "assets/img/bg2.png",
            "assets/img/DC.png",
            "assets/img/DCWL.png"
        ],
    }
};