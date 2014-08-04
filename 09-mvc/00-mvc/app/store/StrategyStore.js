Ext.define('TL.store.StrategyStore', {
    extend: 'Ext.data.ArrayStore',

    alias: 'store.strategies',
    storeId: 'strategiesStoreId',

    data: [
        ['iron condor', '2 credit spreads'],
        ['calendar', 'collect income from '],
        ['bull but spread', 'credit spread ... ']
    ],

    model: 'TL.model.Strategy',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};

        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){
                    console.log('Autoload strategies store ');
                }
            }

            //model: 'TL.model.Trade'

        }, cfg)]);
    }
});