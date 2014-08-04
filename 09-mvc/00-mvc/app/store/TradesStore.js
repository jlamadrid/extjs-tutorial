Ext.define('TL.store.TradesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TL.model.Trade',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    data: {
        "success": "true",
        "trades": [
            {
                "id": 1,
                "date_open": "01/01/2015",
                "date_closed": "02/01/2015",
                "trade_number": 125,
                "ticker": "IBM",
                "long_short": "long",
                "strategy": "iron condor",
                "type": "close",
                "option": "Buy to OPEN RUT SEPT +1080 / - 1145 / +1210 CALL's",
                "entry": 13,
                "current": 14,
                "exit": 23,
                "status": "open",
                "return": .25,
                "wl": "w",
                "pl": 800.56,
                notes: ""
            },
            {
                "id": 2,
                "date_open": "02/01/2015",
                "date_closed": "02/01/2015",
                "trade_number": 127,
                "ticker": "IBM",
                "long_short": "long",
                "strategy": "calendar",
                "type": "open",
                "option": "Buy to OPEN RUT SEPT +1080 / - 1145 / +1210 CALL's",
                "entry": 13,
                "current": 14,
                "exit": 23,
                "status": "working",
                "return": .35,
                "wl": "w",
                "pl": 400.56,
                notes: ""
            },
            {
                "id": 3,
                "date_open": "04/01/2015",
                "date_closed": "02/01/2015",
                "trade_number": 127,
                "ticker": "ORCL",
                "long_short": "long",
                "strategy": "bull put spread",
                "type": "open",
                "option": "Buy to OPEN RUT SEPT +1080 / - 1145 / +1210 CALL's",
                "entry": 13,
                "current": 14,
                "exit": 23,
                "status": "working",
                "return": .75,
                "wl": "w",
                "pl": -300.56,
                notes: ""
            }
        ]
    },

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

            groupField: 'strategy',

            proxy: {
                type: 'memory',
                //url : 'data/trades.json',

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

                    Ext.Msg.alert(name, Ext.String.format("{0} record: {1}", verb, record.getId()));
                }
            }
        }, cfg)]);
    }
});