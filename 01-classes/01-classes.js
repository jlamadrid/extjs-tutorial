Ext.onReady(function(){

    /**
     * Here we define our own class, instantiate it and call an instance method.
     */
    Ext.define('App.domain.Person', {
        name: 'Unknown',

        constructor: function(name) {
            if (name) {
                this.name = name;
            }
        },

        eat: function(foodType) {
            alert(this.name + " is eating: " + foodType);
        }
    });


    var juan = Ext.create('App.domain.Person', 'Juan');
    juan.eat("pizza");


});
