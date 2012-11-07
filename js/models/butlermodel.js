dojo.require('esri.map');
dojo.require('esri.tasks.query');
function init () {
var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/1");
      var query = new esri.tasks.Query();
        query.where = "County = 'Butler'";
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
                
                this.butlercollection.add({
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
function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

window.ButlerModel = Backbone.Model.extend({
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

window.ButlerCollection = Backbone.Collection.extend({
  model: ButlerModel,
  comparator: function(butlermodel) {
    return butlermodel.get("PID");
      
  }
  
});

dojo.addOnLoad(init);
this.butlercollection = new ButlerCollection();
this.butlermodel = new ButlerModel();
// console.log(hc);






