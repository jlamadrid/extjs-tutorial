Ext.define('SolarUI.view.case.CaseViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.casesViewModel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    stores: {
        casemodel: {
            autoLoad: true,
            model: 'SolarUI.model.CaseModel',
            proxy: {
                type: 'ajax',
                url: 'data/cases.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            listeners: {
                load: 'onStoreLoad'
            }
        }
    }

});
