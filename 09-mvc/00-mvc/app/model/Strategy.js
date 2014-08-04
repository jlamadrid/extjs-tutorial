Ext.define('TL.model.Strategy', {
    extend: 'Ext.data.Model',
    alias: 'model.strategy',

    requires: [
        'Ext.data.Field'
    ],


        //[0, 'Iron Condor', '2 credit spreads'],

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        }
    ]
});