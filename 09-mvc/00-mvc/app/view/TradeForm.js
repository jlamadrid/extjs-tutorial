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
                            xtype: 'fieldset',
                            title: 'General',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },

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
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Entry',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name : 'entry',
                                    fieldLabel: 'Entry Price'
                                },
                                {
                                    xtype: 'datefield',
                                    name : 'date_open',
                                    fieldLabel: 'Entry Date',
                                    allowBlank: false,
                                    maxValue: new Date()
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Exit',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name : 'exit',
                                    fieldLabel: 'Exit Price'
                                },
                                {
                                    xtype: 'datefield',
                                    name : 'date_closed',
                                    fieldLabel: 'Exit Date',
                                    allowBlank: false,
                                    maxValue: new Date()
                                }

                            ]

                        },{
                            xtype: 'fieldset',
                            title: 'Results',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name : 'wl',
                                    fieldLabel: 'Win/Loss'
                                },
                                {
                                    xtype: 'textfield',
                                    name : 'pl',
                                    fieldLabel: 'profit/Loss'
                                }

                            ]

                        },
                        {
                            xtype: 'fieldset',
                            title: 'Notes',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [
                                {
                                    xtype: 'textarea',
                                    name : 'notes',
                                    fieldLabel: 'Notes'
                                }

                            ]
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
