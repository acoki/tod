dojo.require("esri.map");
dojo.addOnLoad(makemap);
function makemap () {
        var map;
        // var initExtent = new esri.geometry.Extent({
        //         "xmin": -17731,
        //         "ymin": 6710077,
        //         "xmax": -12495,
        //         "ymax": 6712279,
        //         "spatialReference": {
        //                 "wkid": 102100
        //         }
        // });
        // map = new esri.Map("map", {
        //         extent: initExtent
        // });

        // var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer");
        // map.addLayer(basemap);

        // dojo.connect(map, 'onLoad', function(theMap) {
        //         //resize the map when the browser resizes
        //         dojo.connect(window, 'resize', map, map.resize);
        // });
}
window.HighwayMapView = Backbone.View.extend({

        initialize: function() {
                
                this.render();
        },

        render: function() {
                
                console.log("hmap");
                
                
                $(this.el).html(this.template());
                return this;
        }

});


