dojo.require('esri.map');
dojo.require('esri.tasks.query');
function init () {
var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/1");
      var query = new esri.tasks.Query();
        query.where = "County = 'Clermont'";
        query.returnGeometry = false;
        query.outFields = ["*"];
        return queryTask.execute(query, function(results) {
            // console.log(results.features.length);
            for (var i = 0, il=results.features.length; i<il; i++) {
                var fAttributes = results.features[i].attributes;
                
                // console.log(fAttributes);
                
                PID = fAttributes.PID;
                County = fAttributes.County;
                Sponsor = fAttributes.Sponsor;
                Facility = fAttributes.Facility;
                Location = fAttributes.Location;
                Description = fAttributes.Description;
                Project_Type = fAttributes.Project_Type;
                AQ_Conformity = fAttributes.AQ_Conformity;
                Future_Sale_Date = fAttributes.Future_Sale_Date;
                FY12 = fAttributes.FY12;
                FY13 = fAttributes.FY13;
                FY14 = fAttributes.FY14;
                FY15 = fAttributes.FY15;
                TotalCost = fAttributes.TotalCost;

                data ={
                    PID: PID,
                    County: County,
                    Sponsor: Sponsor,
                    Facility: Facility,
                    Location: Location,
                    Description: Description,
                    Project_Type: Project_Type,
                    AQ_Conformity: AQ_Conformity,
                    Future_Sale_Date: Future_Sale_Date,
                    FY12: FY12,
                    FY13: FY13,
                    FY14: FY14,
                    FY15: FY15,
                    TotalCost: TotalCost,
                    map: null
                };
                
                this.clermontcollection.add({
                    PID: PID,
                    County: County,
                    Sponsor: Sponsor,
                    Facility: Facility,
                    Location: Location,
                    Description: Description,
                    Project_Type: Project_Type,
                    AQ_Conformity: AQ_Conformity,
                    Future_Sale_Date: Future_Sale_Date,
                    FY12: FY12,
                    FY13: FY13,
                    FY14: FY14,
                    FY15: FY15,
                    TotalCost: TotalCost,
                    map: null
                });
            }

        });
}

window.ClermontModel = Backbone.Model.extend({
    defaults: {
        PID: "",
        County: "",
        Sponsor: "",
        Facility: "",
        Location: "",
        Description: "",
        Project_Type: "",
        AQ_Conformity: "",
        Future_Sale_Date: "",
        FY12: "",
        FY13: "",
        FY14: "",
        FY15: "",
        TotalCost: "",
        map: null
        },

    initialize: function() {
      // console.log('this model has been initialized');
    }
    
});

window.ClermontCollection = Backbone.Collection.extend({
  model: ClermontModel,
  comparator: function(clermontmodel) {
    return clermontmodel.get("PID");
      
  }
  
});

dojo.addOnLoad(init);
this.clermontcollection = new ClermontCollection();
this.clermontmodel = new ClermontModel();
// console.log(hc);






