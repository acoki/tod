var KentonListItemView = Backbone.View.extend({
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
var KentonListView = Backbone.View.extend({
        // el: $("#kenton"),

        initialize: function () {
            // console.log("kentonlv");
            this.$el.empty();
            // var county = [{County: "Kenton"}];
            // this.collection = new kentonCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(kentoncollection.models, function (item) {
                that.renderkentonListItemView(item);
            }, this);
        },

        renderkentonListItemView: function (item) {
            var kentonListItemView = new KentonListItemView({
                model: item
            });
            this.$el.append(kentonListItemView.render().el);
        }
    });

    //create instance of master view
var kentonListView = new KentonListView();
