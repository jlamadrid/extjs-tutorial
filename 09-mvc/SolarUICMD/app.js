Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'CaseModel',
        'CertModel',
        'UserModel'
    ],
    stores: [
        'CertDataStore',
        'UserDataStore'
    ],
    views: [
        'case.CaseView',
        'SolarUIViewPort'
    ],
    name: 'SolarUI',

    launch: function() {
        Ext.create('SolarUI.view.SolarUIViewPort');
    }

});
