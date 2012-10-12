dojo.require('esri.map');
dojo.require('esri.tasks.query');
// window.MapModel = Backbone.Model.extend({
// 	initialize: function() {
//         var initialExtent = new esri.geometry.Extent({ xmin: -9446123, ymin: 4721099, xmax: -9377329, ymax :4766961, spatialReference: { 'wkid': 102100} });
//         this.map = new esri.Map('map', { extent: initialExtent });
//         var tiledMapServiceLayer = new esri.layers.ArcGISTiledMapServiceLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer');
//         this.map.addLayer(tiledMapServiceLayer);
//     }
// });
window.HotModel = Backbone.Model.extend({
	initialize: function () {
        var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/0");
        // console.log(queryTask);
        var query = new esri.tasks.Query();
        query.where = "1=1";
        query.returnGeometry = false;
        query.outFields = ["*"];
        queryTask.execute(query, function(results) {
            var s = "";
            for (var i = 0, il=results.features.length; i<il; i++) {
                var featureAttributes = results.features[i].attributes;
                // console.log(featureAttributes);
            }
            
        });
        // console.log(query);
      }
});
dojo.addOnLoad(function () {
});

