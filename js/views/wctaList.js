var WctaListItemView = Backbone.View.extend({
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
var WctaListView = Backbone.View.extend({
        // el: $("#wcta"),

        initialize: function () {
            console.log("wctalv");
            this.$el.empty();
            // var county = [{County: "Wcta"}];
            // this.collection = new wctaCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(wctacollection.models, function (item) {
                that.renderwctaListItemView(item);
            }, this);
        },

        renderwctaListItemView: function (item) {
            var wctaListItemView = new WctaListItemView({
                model: item
            });
            this.$el.append(wctaListItemView.render().el);
        }
    });

    //create instance of master view
var wctaListView = new WctaListView();
