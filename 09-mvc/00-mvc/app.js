Ext.application({

    name: 'TL',
    appFolder: 'app',

    models: [
        //'Employee' //un-commenting generates error ???
    ],

    stores: [
        'TradesStore',
        'StrategyStore'
    ],

    controllers: [
        'TradesController'
    ],

    launch : function() {

        Ext.create('TL.view.MainView');
    }
});
