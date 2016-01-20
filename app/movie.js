(function(app) {
    app.Movie = function Movie (title, season, episode, subtitles) {
        this.title = title;
        this.season = season;
        this.episode = episode;
        this.subtitles = subtitles;

        this.isDetailed = function () {
            return !!(season || episode);
        };
        this.hasSubtitle = function () {
            return this.subtitles.length > 0;
        }.bind(this);

        this.active = false;
    };
})(window.app || (window.app = {}));