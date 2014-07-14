Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

/**
 * This example shows 2 ways to create widgets: the first is immediate instantiation, and the 2nd (preferred) is
 * deferred or lazy instantiation using xtypes.
 */
Ext.onReady(function () {

    /**
     *
     * @type {Ext.panel.Panel}
     */
    var childPanel1 = Ext.create('Ext.panel.Panel', {
        title: 'Child Panel 1',
        html: 'A Panel'
    });

    var childPanel2 = Ext.create('Ext.panel.Panel', {
        title: 'Child Panel 2',
        html: 'Another Panel'
    });

    /**
     *
     * @type {Ext.tab.Panel}
     */
    var tabs = Ext.create('Ext.tab.Panel', {

        height: 100,
        width: 200,
        items: [
            {
                /**
                 * Explicitly define the xtype of this Component configuration.
                 * This tells the Container (the tab panel in this case)
                 * to instantiate a Ext.panel.Panel when it deems necessary
                 */
                xtype: 'panel',
                title: 'Tab One',
                html: 'The first tab',
                listeners: {
                    render: function() {
                        Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
                    }
                }
            },
            {
                /**
                 * The alert for the second tab does not get displayed until the tab is clicked on.
                 * This shows that the tab was not rendered until needed, since the render event
                 * did not fire until the tab was activated.
                 */
                // xtype for all Component configurations in a Container
                title: 'Tab Two',
                html: 'The second tab',
                listeners: {
                    render: function() {
                        Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
                    }
                }
            }
        ]
    });

    /**
     * Use a view port to render our UI. Viewports use all available screen space.
     */
    Ext.create('Ext.container.Viewport', {
        items: [ childPanel1, childPanel2, tabs ]
    });

});