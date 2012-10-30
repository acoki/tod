var HighwayListItemView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#highwayListView").html(),
        
        render: function () {
            // console.log("hliv");
            var tmpl = _.template(this.template);
            // console.log(tmpl);
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
var HighwayListView = Backbone.View.extend({
        el: $("#highway"),

        initialize: function () {
            // console.log("hlv");
            // var county = [{County: "Boone"}];
            // this.collection = new HighwayCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(hc.models, function (item) {
                that.renderHighwayListItemView(item);
            }, this);
        },

        renderHighwayListItemView: function (item) {
            var highwayListItemView = new HighwayListItemView({
                model: item
            });
            this.$el.append(highwayListItemView.render().el);
        }
    });

    //create instance of master view
var highwayListView = new HighwayListView();
