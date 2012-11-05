var WarrenListItemView = Backbone.View.extend({
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
var WarrenListView = Backbone.View.extend({
        // el: $("#warren"),

        initialize: function () {
            // console.log("warrenlv");
            this.$el.empty();
            // var county = [{County: "Warren"}];
            // this.collection = new warrenCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(warrencollection.models, function (item) {
                that.renderwarrenListItemView(item);
            }, this);
        },

        renderwarrenListItemView: function (item) {
            var warrenListItemView = new WarrenListItemView({
                model: item
            });
            this.$el.append(warrenListItemView.render().el);
        }
    });

    //create instance of master view
var warrenListView = new WarrenListView();
