window.HighwayListView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },

    render:function () {
      this.collection = HighwayCollection;
      var highway = this.collection.models;
      var len = highway.length;
      console.log("len", len);
        $(this.el).html('<ul class="thumbnails"></ul>');

        for (var i = 0, il=347; i<il; i++) {
            $('.thumbnails', this.el).append(new HighwayListItemView({model: highway[i]}).render().el);
        }
        return this;
    }

});

window.HighwayListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

// var HighwayListView;
// window.HighwayListView = Backbone.View.extend({
//     // el: $("#sidebar>ul"),
//     // tagName: "ul",
//     initialize: function() {
//       // return
//       this.collection = HighwayCollection;
//       this.render();
//     },
//     // events: {
//     //   "click a": "clicked"
//     // },
//     // clicked: function(evt) {
//     //   var cid;
//     //   evt.preventDefault();
//     //   cid = $(evt.currentTarget).data("id");
//     //   return this.collection.zoomByCid(cid);
//     // },
//     render: function() {
//       // var data, template;
//       // console.log(HighwayCollection);
//       var data;
//       data = {
//         highway: this.collection.models,
//         _: _
//       };
//       console.log("list", collection);
//       // template = _.template(viewTemplate, data);
//       // $(this.el).html("");
//       // return $(this.el).append(template);
//       $(this.el).html(this.template());
//         console.log("hello Highway List");
//         return this;
//     }
//   });



// // return new HighwayListView();

