Ext.define('SolarUI.store.UserDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SolarUI.model.UserModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'UserDataStore',
            autoLoad: true,
            model: 'SolarUI.model.UserModel',
            proxy: {
                type: 'ajax',
                url: 'data/users.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});