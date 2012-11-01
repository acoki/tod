var MtsListItemView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#transitLV").html(),
        
        render: function () {
            // console.log("hliv");
            var tmpl = _.template(this.template);
            // console.log(tmpl);
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
var MtsListView = Backbone.View.extend({
        // el: $("#mts"),

        initialize: function () {
            console.log("mtslv");
            this.$el.empty();
            // var county = [{County: "Mts"}];
            // this.collection = new mtsCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(mtscollection.models, function (item) {
                that.rendermtsListItemView(item);
            }, this);
        },

        rendermtsListItemView: function (item) {
            var mtsListItemView = new MtsListItemView({
                model: item
            });
            this.$el.append(mtsListItemView.render().el);
        }
    });

    //create instance of master view
var mtsListView = new MtsListView();
