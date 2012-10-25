var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "about"             : "about",
        "highway"           : "highway",
        "transit"           : "transit",
        "highwayList"       : "highwayList",
        "transitList"       : "transitList",
        "transitListView"       : "transitListView"
    },

    initialize: function () {
        console.log("doit");
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
        console.log("loading.....");
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
        var highway = new HighwayCollection();
        $("#content").html(new HighwayListView({model: highway}).el);
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

utils.loadTemplate(['HomeView', 'HeaderView', 'AboutView', 'HighwayView', 'HighwayListView','TransitView', 'TransitListView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
// utils.loadHighwayModel();
// list: function(page) {
//         var p = page ? parseInt(page, 10) : 1;
//         var wineList = new WineCollection();
//         wineList.fetch({success: function(){
//             $("#content").html(new WineListView({model: wineList, page: p}).el);
//         }});
//         this.headerView.selectMenuItem('home-menu');
//     },

