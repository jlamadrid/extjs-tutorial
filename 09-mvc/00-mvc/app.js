Ext.application({

    name: 'TL',
    appFolder: 'app',

    models: [
        //'Employee' //un-commenting generates error ???
    ],

    stores: [
        'TradesStore'
    ],

    controllers: [
        'TradesController'
    ],

    launch : function() {

        Ext.create('TL.view.MainView');
    }
});
