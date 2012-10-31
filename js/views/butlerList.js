var ButlerListItemView = Backbone.View.extend({
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
var ButlerListView = Backbone.View.extend({
        // el: $("#butler"),

        initialize: function () {
            console.log("butlerlv");
            this.$el.empty();
            // var county = [{County: "Boone"}];
            // this.collection = new butlerCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(butlercollection.models, function (item) {
                that.renderbutlerListItemView(item);
            }, this);
        },

        renderbutlerListItemView: function (item) {
            var butlerListItemView = new ButlerListItemView({
                model: item
            });
            this.$el.append(butlerListItemView.render().el);
        }
    });

    //create instance of master view
var butlerListView = new ButlerListView();
