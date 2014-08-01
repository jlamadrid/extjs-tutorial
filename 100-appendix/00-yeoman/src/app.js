Ext.application({
    name: 'MyApp',

    //

    launch: function(){
        Ext.create('MyApp.view.Login').show();
    }
});