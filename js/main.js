var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "about"             : "about",
        "highway"           : "highway",
        "transit"           : "transit",
        "highwayList"       : "highwayList",
        "butlerList"       : "butlerList",
        "transitList"       : "transitList"
    },

    initialize: function () {
        // console.log("doit");
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
        // console.log("loading.....");
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
            console.log("hey homey");
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },

    highway: function () {
        if (!this.highwayView) {
            this.highwayView = new HighwayView();
        }
        $('#content').html(this.highwayView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    highwayList: function () {
        if (!this.highwayListView) {
            this.highwayListView = new HighwayListView();
        }
        $('#content').html( this.highwayListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },
    butlerList: function () {
        if (!this.butlerListView) {
            this.butlerListView = new ButlerListView();
        }
        $('#content').html(this.butlerListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    transit: function () {
        if (!this.transitView) {
            this.transitView = new TransitView();
        }
        $('#content').html(this.transitView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    transitList: function () {
        if (!this.transitListView) {
            this.transitListView = new TransitListView();
        }
        $('#content').html(this.transitListView.el);
        this.headerView.selectMenuItem('transit-menu');
    }

});

utils.loadTemplate(['HomeView', 'HeaderView', 'AboutView', 'HighwayView', 'TransitView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});


