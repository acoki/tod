window.utils = {
    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },

    displayValidationErrors: function (messages) {
        for (var key in messages) {
            if (messages.hasOwnProperty(key)) {
                this.addValidationError(key, messages[key]);
            }
        }
        this.showAlert('Warning!', 'Fix validation errors and try again', 'alert-warning');
    },

    addValidationError: function (field, message) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.addClass('error');
        $('.help-inline', controlGroup).html(message);
    },

    removeValidationError: function (field) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.removeClass('error');
        $('.help-inline', controlGroup).html('');
    },

    showAlert: function(title, text, klass) {
        $('.alert').removeClass("alert-error alert-warning alert-success alert-info");
        $('.alert').addClass(klass);
        $('.alert').html('<strong>' + title + '</strong> ' + text);
        $('.alert').show();
    },

    hideAlert: function() {
        $('.alert').hide();
    }
    // loadHighwayModel: function() {

    //     console.log("loading.....");
    //     var HighwayModel, HighwayCollection;
    //     var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/0");
    //     var query = new esri.tasks.Query();
    //       query.where = "1=1";
    //       query.returnGeometry = false;
    //       query.outFields = ["*"];
    //       return queryTask.execute(query, function(results) {
    //           // var s = "";
    //           console.log(results.features.length);
    //           for (var i = 0, il=results.features.length; i<il; i++) {
    //               var fAttributes = results.features[i].attributes;
    //               console.log(fAttributes);
    //               PID = fAttributes.PID;
    //               County = fAttributes.County;
    //               Facility = fAttributes.Facility;
    //               data ={
    //                   PID: PID,
    //                   County: County,
    //                   Facility: Facility,
    //                   map: null
    //               };
    //               console.log(PID, data);
    //               // HighwayCollection.add({
    //               // PID: fAttributes.PID,
    //               // County: fAttributes.County,
    //               // Facility: fAttributes.Facility,
    //               // map: null
    //               // });
    //           // console.log("HighwayCollection", HighwayCollection);
    //           }
    //           // HighwayCollection.comparator = function(highway) {
    //           //     return highway.get(PID);
    //           // };
    //           // HighwayCollection.sort();
    //           // console.log("2", HighwayCollection);
    //           // return list.render();
    //       });

    // }

};