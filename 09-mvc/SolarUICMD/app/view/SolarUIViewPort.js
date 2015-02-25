
Ext.define("SolarUI.view.SolarUIViewPort",{
    extend: "Ext.container.Viewport",
    alias: 'widget.solaruiviewport',

    requires: [
        'SolarUI.view.SolarUIViewPortModel',
        'SolarUI.view.case.CaseView',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    controller: "solaruiviewportCtrl",
    viewModel: {
        type: "solaruiviewportModel"
    },
    layout: 'border',

    items: [
        {
            xtype: 'tabpanel',
            region: 'west',
            resizable: true,
            width: 250,
            collapsible: true,
            title: 'Navigation',
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Recent Cases'
                },
                {
                    xtype: 'panel',
                    title: 'Activity'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            activeTab: 0,
            items: [
                {
                    xtype: 'caseview',
                    title: 'Case View'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'south',
            height: 150,
            resizable: true,
            collapsible: true,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Summary'
                },
                {
                    xtype: 'panel',
                    title: 'Events'
                },
                {
                    xtype: 'panel',
                    title: 'Notifications'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'east',
            resizable: true,
            width: 350,
            collapsible: true,
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Properties',
                    items: [
                        {
                            xtype: 'panel',
                            height: 150,
                            layout: 'accordion',
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Basic'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Advanced'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Misc'
                }
            ]
        }
    ]

});
