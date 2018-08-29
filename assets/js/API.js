/* 

    Internal API! DO NOT MODIFY unless you know what you're doing!
    If you need to add a new function to the system, or change a variable,
    theres a REALLY good chance its located in "settings.js" in the root of your 
    site installation and can be changed without modifying this file!
    
    YOU HAVE BEEN WARNED!

*/

var API = {
    getSettings: function() {
        // We use this function to load our settings.js file
        $.get('settings.js', function() {
            API.init();
        });
    },
    internal: {
        versionChecker: function() {
            $( document ).ready(function() {
                $.get(UserSettings.gitLink, function(releases) {
                    var normal
                    releases.sort(function(alpha, bravo) {
                        if( alpha.published_at > bravo.published_at ) return -1;
                        if( alpha.published_at < bravo.published_at ) return 1;
                        return 0;
                    })
                    .filter(function(rel) {
                        return !rel.draft && !rel.prerelease
                    })
                    .forEach(function(release) {
                        if( release.target_commitish == 'master' && !normal) normal = release
                    })
                    console.info('Normal href-- ' + normal.assets[0].browser_download_url);
                    console.info('Normal tag_name-- '  + normal.tag_name);
                    var publishdate = new Date(normal.published_at).toLocaleDateString();
                    console.info('Normal release_date-- ' + publishdate);
                    // Actually apply shit...
                    $('#AppButton').attr('href',normal.assets[0].browser_download_url);
                    $('#AppVersion').html("Version " + normal.tag_name + ". Released on  " + publishdate + ".");
                    $('#AppButton').removeClass('disabled');
                });
            });
        }
    },
    init: function() {
        $('title').html(UserSettings.pageTitle);
        $('#headlink').html(UserSettings.pageHeadTitle);
        $('#AppButton').html(UserSettings.downloadBtnTitle);
        $('#AboutTitle').html("About " + UserSettings.pageHeadTitle);
        $('#AboutSectionText').html(UserSettings.aboutSectionText);
        if( !UserSettings.advanced.useVersionCheck ) {
            // If its set to false.
            console.warn("[INTERNAL] [US] Version checking is disabled!");
        } else if( UserSettings.advanced.useVersionCheck ) {
            // If its set to true.
            if( !UserSettings.advanced.useInternalCheck ) {
                // If its set to false.
                UserSettings.advanced.customVersionCheck();
            } else if( UserSettings.advanced.useInternalCheck ) {
                // If its set to true.
                API.internal.versionChecker();
            }
        }
    }
};

// Self-executing function to load the user settings file, this kick-starts everything.
(function() {
    API.getSettings();
})()