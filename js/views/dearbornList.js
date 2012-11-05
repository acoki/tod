var DearbornListItemView = Backbone.View.extend({
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
var DearbornListView = Backbone.View.extend({
        // el: $("#dearborn"),

        initialize: function () {
            // console.log("dearbornlv");
            this.$el.empty();
            // var county = [{County: "Dearborn"}];
            // this.collection = new dearbornCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(dearborncollection.models, function (item) {
                that.renderdearbornListItemView(item);
            }, this);
        },

        renderdearbornListItemView: function (item) {
            var dearbornListItemView = new DearbornListItemView({
                model: item
            });
            this.$el.append(dearbornListItemView.render().el);
        }
    });

    //create instance of master view
var dearbornListView = new DearbornListView();
