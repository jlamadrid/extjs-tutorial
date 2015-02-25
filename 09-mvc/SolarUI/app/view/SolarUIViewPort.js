/*
 * File: app/view/SolarUIViewPort.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SolarUI.view.SolarUIViewPort', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.solaruiviewport',

    requires: [
        'SolarUI.view.SolarUIViewPortViewModel',
        'SolarUI.view.case.CaseView',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'solaruiviewport'
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