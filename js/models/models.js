dojo.require('esri.map');
dojo.require('esri.tasks.query');
// window.
var HighwayModel = Backbone.Model.extend({
    defaults: {
          PID: "",
          County: "",
          Facility: "",
          Location: "",
          Description: "",
          map: null
        },

    initialize: function() {
      console.log('this model has been initialized');
      var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/0");
      var query = new esri.tasks.Query();
        query.where = "1=1";
        query.returnGeometry = false;
        query.outFields = ["*"];
        return queryTask.execute(query, function(results) {
            // var s = "";
            console.log(results.features.length);
            for (var i = 0, il=results.features.length; i<il; i++) {
                var fAttributes = results.features[i].attributes;
                
                // console.log(fAttributes);
                
                PID = fAttributes.PID;
                County = fAttributes.County;
                Facility = fAttributes.Facility;
                Location = fAttributes.Location;
                Description = fAttributes.Description;
                
                // data ={
                HighwayCollection.add ={
                    PID: PID,
                    County: County,
                    Facility: Facility,
                    Location: Location,
                    Description: Description,
                    map: null
                };
                // test the collection
                // var hc1 = new HighwayCollection();
                // console.log(hc1);
            }

        });

    }

});

// window.
var HighwayCollection = Backbone.Collection.extend({
  model: HighwayModel

});

dojo.addOnLoad(function () {
    var hc = new HighwayCollection();
    var hm = new HighwayModel();

});
