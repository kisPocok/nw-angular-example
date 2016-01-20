(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'MyApp',
            templateUrl: 'views/ng-list.html',
            //directives: [ng.NgFor, ng.NgIf]
        })
        .Class({
            constructor: function() {
                this.movies = [
                    new app.Movie('The Walking dead', 6, 7, []),
                    new app.Movie('Man in the High Castle', 1, 2, [
                        new app.Subtitle('man.in.the.high.castle.xvid-PROPHET.srt', 'hu'),
                        new app.Subtitle('man.in.the.high.castle.xvid.eng.srt', 'gb'),
                        new app.Subtitle('man.in.the.high.castle.1080p.DOLBY.srt', 'hu'),
                    ]),
                    new app.Movie('The Leftovers', 3, 4, []),
                    new app.Movie('Star Wars', null, null, []),
                ];

                this.movieClick = function (event, movie) {
                    event.preventDefault();
                    if (movie.hasSubtitle()) {
                        movie.active = !movie.active;
                    }
                };
            }
        });
})(window.app || (window.app = {}));