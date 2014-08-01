Ext.define('TL.view.TradeForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.tradeform',

    requires: ['Ext.form.Panel'],

    title : 'Trade',
    layout: 'fit',
    autoShow: true,
    width: 450,
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
                            xtype: 'textfield',
                            name : 'strategy',
                            fieldLabel: 'Strategy'
                        },
                        {
                            xtype: 'textfield',
                            name : 'type',
                            fieldLabel: 'Type'
                        },
                        {
                            xtype: 'textarea',
                            name : 'option',
                            fieldLabel: 'Option',
                            // Setting flex to 1 for textarea when no other component has flex
                            // is effectively tells the layout to strech the textarea vertically,
                            // taking all the space left after the fields above have been laid out.
                            flex: 1
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
