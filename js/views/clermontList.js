var ClermontListItemView = Backbone.View.extend({
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
var ClermontListView = Backbone.View.extend({
        // el: $("#clermont"),

        initialize: function () {
            console.log("clermontlv");
            this.$el.empty();
            // var county = [{County: "Clermont"}];
            // this.collection = new clermontCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(clermontcollection.models, function (item) {
                that.renderclermontListItemView(item);
            }, this);
        },

        renderclermontListItemView: function (item) {
            var clermontListItemView = new ClermontListItemView({
                model: item
            });
            this.$el.append(clermontListItemView.render().el);
        }
    });

    //create instance of master view
var clermontListView = new ClermontListView();
