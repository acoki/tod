var CampbellListItemView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#highwayLV").html(),
        
        render: function () {
            // console.log("hliv");
            var tmpl = _.template(this.template);
            // console.log(tmpl);
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
var CampbellListView = Backbone.View.extend({
        // el: $("#campbell"),

        initialize: function () {
            console.log("campbelllv");
            this.$el.empty();
            // var county = [{County: "Campbell"}];
            // this.collection = new campbellCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(campbellcollection.models, function (item) {
                that.rendercampbellListItemView(item);
            }, this);
        },

        rendercampbellListItemView: function (item) {
            var campbellListItemView = new CampbellListItemView({
                model: item
            });
            this.$el.append(campbellListItemView.render().el);
        }
    });

    //create instance of master view
var campbellListView = new CampbellListView();
