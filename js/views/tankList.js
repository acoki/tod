var TankListItemView = Backbone.View.extend({
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
var TankListView = Backbone.View.extend({
        // el: $("#tank"),

        initialize: function () {
            console.log("tanklv");
            this.$el.empty();
            // var county = [{County: "Tank"}];
            // this.collection = new tankCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(tankcollection.models, function (item) {
                that.rendertankListItemView(item);
            }, this);
        },

        rendertankListItemView: function (item) {
            var tankListItemView = new TankListItemView({
                model: item
            });
            this.$el.append(tankListItemView.render().el);
        }
    });

    //create instance of master view
var tankListView = new TankListView();
