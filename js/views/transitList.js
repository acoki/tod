window.TransitListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
            // console.log("hello Transit List");
        return this;
    }

});