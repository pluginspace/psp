var PuruSidAppHandler = {
    install: function (baseAppURL) {
        await fetch('/sw-conf.json').then((res) => {
            res.text().then(async (text) => {
                var temp_config = JSON.parse(text);
                var cache = caches.open(config.cache_name)
            });
        });
        await fetch(`${baseAppURL}/purusid_conf.json`).then((response) => {
            response.text().then(async (text) => {
                var config = JSON.parse(text);
                await cache.addAll(config.assets_cache);
            });
        });
    };
    open: function(){};
}
