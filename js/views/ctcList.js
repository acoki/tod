var CtcListItemView = Backbone.View.extend({
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
var CtcListView = Backbone.View.extend({
        // el: $("#ctc"),

        initialize: function () {
            // console.log("ctclv");
            this.$el.empty();
            // var county = [{County: "Ctc"}];
            // this.collection = new ctcCollection(_.where(hc, county));
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(ctccollection.models, function (item) {
                that.renderctcListItemView(item);
            }, this);
        },

        renderctcListItemView: function (item) {
            var ctcListItemView = new CtcListItemView({
                model: item
            });
            this.$el.append(ctcListItemView.render().el);
        }
    });

    //create instance of master view
var ctcListView = new CtcListView();
