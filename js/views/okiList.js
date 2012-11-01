var OkiListItemView = Backbone.View.extend({
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
var OkiListView = Backbone.View.extend({
        // el: $("#oki"),

        initialize: function () {
            console.log("okilv");
            this.$el.empty();
            // var county = [{County: "Oki"}];
            // this.collection = new okiCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(okicollection.models, function (item) {
                that.renderokiListItemView(item);
            }, this);
        },

        renderokiListItemView: function (item) {
            var okiListItemView = new OkiListItemView({
                model: item
            });
            this.$el.append(okiListItemView.render().el);
        }
    });

    //create instance of master view
var okiListView = new OkiListView();
