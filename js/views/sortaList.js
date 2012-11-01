var SortaListItemView = Backbone.View.extend({
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
var SortaListView = Backbone.View.extend({
        // el: $("#sorta"),

        initialize: function () {
            console.log("sortalv");
            this.$el.empty();
            // var county = [{County: "Sorta"}];
            // this.collection = new sortaCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(sortacollection.models, function (item) {
                that.rendersortaListItemView(item);
            }, this);
        },

        rendersortaListItemView: function (item) {
            var sortaListItemView = new SortaListItemView({
                model: item
            });
            this.$el.append(sortaListItemView.render().el);
        }
    });

    //create instance of master view
var sortaListView = new SortaListView();
