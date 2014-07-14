/**
 * http://docs.sencha.com/extjs/5.0.0/core_concepts/data_package.html
 */
Ext.onReady(function () {

    /**
     * base class for models
     */
    Ext.define('TradeApp.model.Base', {
        extend: 'Ext.data.Model',

        fields: [
            {
                name: 'id',
                type: 'int'
            }
        ],

        schema: {
            namespace: 'TradeApp.model',  // generate auto entityName

            proxy: {     // Ext.util.ObjectTemplate
                type: 'ajax',
                url: '{entityName}.json',
                reader: {
                    type: 'json',
                    rootProperty: '{entityName:lowercase}'
                }
            }
        }
    });

    /**
     * Model object representing a user
     */
    Ext.define('TradeApp.model.Trade', {
        extend: 'TradeApp.model.Base',

        fields: [
            {
                name: 'long_short',
                type: 'string'
            }, {
                name: 'ticker',
                type: 'string'
            }
        ]
    });

    /**
     * store representing in-memory cache of user model objects.
     * @type {Ext.data.Store}
     */
    var store = new Ext.data.Store ({
        model: 'TradeApp.model.Trade'
    });

    /**
     *
     */
    store.load({
        callback:function(){
            var trade = this.first();
            var ticker = trade.get('ticker');
            console.log(ticker);
        }
    });


});