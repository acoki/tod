var BcrtaListItemView = Backbone.View.extend({
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
var BcrtaListView = Backbone.View.extend({
        // el: $("#bcrta"),

        initialize: function () {
            console.log("bcrtalv");
            this.$el.empty();
            // var county = [{County: "Bcrta"}];
            // this.collection = new bcrtaCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(bcrtacollection.models, function (item) {
                that.renderbcrtaListItemView(item);
            }, this);
        },

        renderbcrtaListItemView: function (item) {
            var bcrtaListItemView = new BcrtaListItemView({
                model: item
            });
            this.$el.append(bcrtaListItemView.render().el);
        }
    });

    //create instance of master view
var bcrtaListView = new BcrtaListView();
