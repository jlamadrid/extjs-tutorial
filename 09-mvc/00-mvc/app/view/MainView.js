Ext.define('TL.view.MainView', {
    extend: 'Ext.container.Viewport',

    id: 'mainView',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Trades',
                            itemId: 'mainPanel',
                            resizable: false,
                            layout: 'border',
                            collapsed: false,
                            manageHeight: false,
                            title: 'Trades',
                            items: [
                                {
                                    xtype: 'tradesGrid',
                                    flex: 1,
                                    region: 'west',
                                    split: true
                                },
                                {
                                    flex: 1,
                                    region: 'center',
                                    split: true,
                                    id: 'detailPanel',
                                    bodyPadding: 7,
                                    bodyStyle: "background: #ffffff;",
                                    html: 'Please select a trade to see additional details.',
                                    height:200
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});