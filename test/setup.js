//Backbone.Model.prototype.relationAttribute = 'relations';

var Book = Backbone.Model.extend({
    schema: {
        "author": Backbone.Model,
        "pages" : Backbone.Collection,
        "released_on": Date
    }
});
