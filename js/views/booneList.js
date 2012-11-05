var BooneListItemView = Backbone.View.extend({
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
var BooneListView = Backbone.View.extend({
        // el: $("#boone"),

        initialize: function () {
            // console.log("boonelv");
            this.$el.empty();
            // var county = [{County: "Boone"}];
            // this.collection = new booneCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(boonecollection.models, function (item) {
                that.renderbooneListItemView(item);
            }, this);
        },

        renderbooneListItemView: function (item) {
            var booneListItemView = new BooneListItemView({
                model: item
            });
            this.$el.append(booneListItemView.render().el);
        }
    });

    //create instance of master view
var booneListView = new BooneListView();
