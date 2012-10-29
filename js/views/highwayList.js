var HighwayListItemView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#highwayListView").html(),
        // template: _.template($("#highwayListView").html()),

        render: function () {
            console.log("hliv");
            // var tmpl = "hi";
            var tmpl = _.template(this.template);
            console.log(tmpl);
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
var HighwayListView = Backbone.View.extend({
        el: $("#highwayListView"),

        initialize: function () {
            console.log("hlv");
            // this.collection = new HighwayCollection(hc);
            // console.log(this.collection);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(hc.models, function (item) {
                that.renderHighwayListItemView(item);
            }, this);
        },

        renderHighwayListItemView: function (item) {
            var highwayListItemView = new HighwayListItemView({
                model: item
            });
            this.$el.append(highwayListItemView.render().el);
        }
    });

    //create instance of master view
var highwayListView = new HighwayListView();

// window.HighwayListView = Backbone.View.extend({
//     initialize:function () {
//         this.render();
//     },

//     render:function () {
//       // var highway = this.hc;
//       console.log("hc", hc);
//       var len = hc.length;
//       console.log("len", len);
//         $(this.el).html('<ul class="thumbnails"></ul>');

//         // for (var i = 0, il=len; i<il; i++) {
//         //     $('.thumbnails', this.el).append(new HighwayListItemView({model: hc[i]}).render().el);
//         // }
//         return this;
//     }

// });

// window.HighwayListItemView = Backbone.View.extend({

//     tagName: "li",

//     initialize: function () {
//         this.model.bind("change", this.render, this);
//         this.model.bind("destroy", this.close, this);
//     },

//     render: function () {
//         $(this.el).html(this.template(this.model.toJSON()));
//         return this;
//     }

// });

// var HighwayListView;
// window.HighwayListView = Backbone.View.extend({
//     el: $("#sidebar>ul"),
//     tagName: "ul",
//     initialize: function() {
//       // return
//       // this.collection = HighwayCollection;
//       this.render();
//     },
//     events: {
//       "click a": "clicked"
//     },
//     clicked: function(evt) {
//       var cid;
//       evt.preventDefault();
//       cid = $(evt.currentTarget).data("id");
//       return this.collection.zoomByCid(cid);
//     },
//     render: function() {
//       var data, template;
//       // console.log(HighwayCollection);
//       // var data;
//       data = {
//         highway: this.hc,
//         _: _
//       };
//       // console.log("list", hc);
//       // template = _.template(viewTemplate, data);
//       $(this.el).html("");
//       return $(this.el).append(HighwayListView);
//     //   $(this.el).html(this.template());
//     //     console.log("hello Highway List");
//     //     return this;
//     }
//   });



// return new HighwayListView();

