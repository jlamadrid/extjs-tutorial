Ext.define('SolarUI.store.CertDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SolarUI.model.CertModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CertDataStore',
            autoLoad: true,
            model: 'SolarUI.model.CertModel',
            proxy: {
                type: 'ajax',
                url: 'data/certs.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});