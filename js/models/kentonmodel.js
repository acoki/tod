dojo.require('esri.map');
dojo.require('esri.tasks.query');
function init () {
var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/1");
      var query = new esri.tasks.Query();
        query.where = "County = 'Kenton'";
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
                FY12 = "$"+addCommas(fAttributes.FY12);
                FY13 = "$"+addCommas(fAttributes.FY13);
                FY14 = "$"+addCommas(fAttributes.FY14);
                FY15 = "$"+addCommas(fAttributes.FY15);
                TotalCost = "$"+addCommas(fAttributes.TotalCost);

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
                
                this.kentoncollection.add({
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

window.KentonModel = Backbone.Model.extend({
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

window.KentonCollection = Backbone.Collection.extend({
  model: KentonModel,
  comparator: function(kentonmodel) {
    return kentonmodel.get("PID");
      
  }
  
});

dojo.addOnLoad(init);
this.kentoncollection = new KentonCollection();
this.kentonmodel = new KentonModel();
// console.log(hc);






