var HamiltonListItemView = Backbone.View.extend({
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
var HamiltonListView = Backbone.View.extend({
        // el: $("#hamilton"),

        initialize: function () {
            // console.log("hamiltonlv");
            this.$el.empty();
            // var county = [{County: "Hamilton"}];
            // this.collection = new hamiltonCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(hamiltoncollection.models, function (item) {
                that.renderhamiltonListItemView(item);
            }, this);
        },

        renderhamiltonListItemView: function (item) {
            var hamiltonListItemView = new HamiltonListItemView({
                model: item
            });
            this.$el.append(hamiltonListItemView.render().el);
        }
    });

    //create instance of master view
var hamiltonListView = new HamiltonListView();
