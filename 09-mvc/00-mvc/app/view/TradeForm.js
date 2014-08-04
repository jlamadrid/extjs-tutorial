Ext.define('TL.view.TradeForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.tradeform',

    requires: ['Ext.form.Panel'],

    title : 'Trade',
    layout: 'fit',
    autoShow: true,
    width: 550,
    itemId: 'tradeFormItemId',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',

                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelWidth: 90
                    },

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    bodyPadding: 5,
                    border: false,

                    style: 'background-color: #fff;',

                    items: [
                        {
                            xtype: 'textfield',
                            name : 'ticker',
                            fieldLabel: 'Ticker'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Strategies',
                            name: 'strategy',
                            store: {
                                type: 'strategies'
                            },
                            valueField: 'name',
                            displayField: 'name',
                            typeAhead: true,
                            queryMode: 'local',
                            emptyText: 'Select a strategy...'
                        },
                        {
                            xtype: 'textfield',
                            name : 'type',
                            fieldLabel: 'Type'
                        },
                        {
                            xtype: 'textfield',
                            name : 'option',
                            fieldLabel: 'Option'
                        },
                        {
                            xtype: 'textarea',
                            name : 'notes',
                            fieldLabel: 'Notes'
                        }
                    ]
                }
            ],

            buttons:[
                {
                    text: 'Save',
                    action: 'save'
                },
                {
                    text: 'Cancel',
                    scope: this,
                    handler: this.close
                }
            ]

        });

        me.callParent(arguments);
    }
});
