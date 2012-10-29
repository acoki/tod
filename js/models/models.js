dojo.require('esri.map');
dojo.require('esri.tasks.query');
function init () {
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
                
                data ={
                // this.hc.add ={
                    PID: PID,
                    County: County,
                    Facility: Facility,
                    Location: Location,
                    Description: Description,
                    map: null
                };
                // data ={
                this.hc.add({
                    PID: PID,
                    County: County,
                    Facility: Facility,
                    Location: Location,
                    Description: Description,
                    map: null
                });
                // this.hcbutler.add({
                //     PID: PID,
                //     County: County,
                //     Facility: Facility,
                //     Location: Location,
                //     Description: Description,
                //     map: null
                // });

                // console.log(data);
            }

        });
}

window.HighwayModel = Backbone.Model.extend({
    defaults: {
          PID: "",
          County: "",
          Facility: "",
          Location: "",
          Description: "",
          map: null
        },

    initialize: function() {
      // console.log('this model has been initialized');
    }
    
});

window.HighwayCollection = Backbone.Collection.extend({
  model: HighwayModel
  
});

dojo.addOnLoad(init);
this.hc = new HighwayCollection();
this.hm = new HighwayModel();
console.log(hc);
// this.hcbutler = new HighwayCollection(
//     _.where(this.hc, {County: 'Butler'})
//     );
// console.log("hcbutler", hcbutler);





