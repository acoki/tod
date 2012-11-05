window.HighwayMapView = Backbone.View.extend({

        initialize: function() {
                
                this.render();
        },

        render: function() {
                
                // console.log("hmap");
                
                
                $(this.el).html(this.template());
                return this;
        }

});


