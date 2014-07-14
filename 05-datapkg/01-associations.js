/**
 * http://docs.sencha.com/extjs/5.0.0/core_concepts/data_package.html
 * http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext.data.Model
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

        idProperty: 'id',

        /**
         *
         */
        schema: {
            namespace: 'TradeApp.model',  // generate auto entityName

            /**
             * This created a proxy for each entity
             */
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
     * Model object representing a trade
     */
    Ext.define('TradeApp.model.Trade', {
        extend: 'TradeApp.model.Base',

        fields: [
            {
                name: 'journal_id',
                reference: 'TradeJournal'
            },
            {
                name: 'long_short',
                type: 'string'
            }, {
                name: 'ticker',
                type: 'string'
            }
        ],

        belongsTo: 'TradeJournal'
    });

    /**
     * Model object representing a Trade Journal
     */
    Ext.define('TradeApp.model.TradeJournal', {
        extend: 'TradeApp.model.Base',

        fields: [
            {
                name: 'name',
                type: 'string'
            }
        ],
        hasMany: 'Trade'
    });

    /**
     * store representing in-memory cache of user model objects.
     * @type {Ext.data.Store}
     */
    var store = new Ext.data.Store ({
        model: 'TradeApp.model.Trade'
    });

    /**
     * Here we load the entire store
     */
    store.load({
        callback:function(){
            var trade = this.first();
            var ticker = trade.get('ticker');
            console.log(ticker);
        }
    });

    /**
     * Here we use entity proxy to load a specific entity.
     */
    var trade = TradeApp.model.Trade.load(1, {
        callback: function(trade) {
            console.log('Trade: ' + trade.get('ticker'));

            //TODO: comes back undefined!
            var journal = trade.getTradeJournal();
            if(journal) {
                console.log("JOURNAL: " + journal.get('name'));
            }
        }
    });

    /**
     * Here we traverse the entity associations.
     */
    TradeApp.model.TradeJournal.load(1, {
        callback: function(tradeJournal) {
            console.log('trade Journal name: ' + tradeJournal.get('name'));

            tradeJournal.trades(function(trades){
                trades.each(function(trade){
                    console.log('Trade: ' + trade.get('ticker'));
                });
            });
        }
    });


});