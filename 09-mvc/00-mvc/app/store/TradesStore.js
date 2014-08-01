Ext.define('TL.store.TradesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TL.model.Trade',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){
                    console.log('Autoload trades store ');
                }
            },

            autoSync: false,
            model: 'TL.model.Trade',
            storeId: 'tradeStoreId',

            groupField: 'type',

            proxy: {
                type: 'rest',
                url : 'data/trades.json',

                reader: {
                    type: 'json',
                    rootProperty: 'trades'
                },

                /**
                 *needed to add writer to control how form submits are posted. Specifically
                 * needed to set writeAllFields to true so spring data repository does not update
                 * entity with a bunch of blank fields. Rails was able to detect the fact
                 * that some fields were not changed. Spring on the other hand makes them all null.
                 */
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    rootProperty: 'trades',
                    encode: false
                },
                listeners: {
                    exception: function(proxy, response, operation){
                        Ext.MessageBox.show({
                            title: 'REMOTE EXCEPTION',
                            msg: operation.getError(),
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                }
            },

            /**
             * listeners
             */
            listeners: {
                write: function(store, operation){
                    var record = operation.getRecords()[0],
                        name = Ext.String.capitalize(operation.action),
                        verb;

                    if (name == 'Destroy') {
                        verb = 'Destroyed';
                    } else {
                        verb = name + 'd';
                    }

                    Ext.Msg.alert(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
                }
            }
        }, cfg)]);
    }
});