Ext.define('TL.model.Trade', {
    extend: 'Ext.data.Model',
    alias: 'model.trade',

    requires: [
        'Ext.data.Field'
    ],

    proxy: {
        type: 'rest',
        url: 'data/trades.json',
        format: 'json',
        reader: {
            type: 'json',
            rootProperty: 'trades'
        }
    },

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'date_open',
            type: 'date'
        },
        {
            name: 'date_close',
            type: 'date'
        },
        'trade_number',
        'ticker',
        'long_short',
        'strategy',
        'type',
        'option',
        {
            name: 'entry',
            type: 'number'
        },
        {
            name: 'current',
            type: 'number'
        },
        {
            name: 'exit',
            type: 'number'
        },
        'status',
        {
            name: 'return',
            type: 'number'
        },
        {
            name: 'pl',
            type: 'number'
        },
        'wl'
    ]
});