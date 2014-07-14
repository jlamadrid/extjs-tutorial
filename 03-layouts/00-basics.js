Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

/**
 * sometimes we want to prevent the framework from automatically laying out so we can batch multiple operations together
 * and then manually trigger a layout when we’re done. To do this we use the suspendLayout flag on the Container to
 * prevent it from laying out while we perform our operations that would normally trigger a layout (adding or removing
 * items for example). When we’re done all we have to do is turn the suspendLayout flag off and manually trigger a
 * layout by calling the Container’s doLayout method
 */
Ext.onReady(function () {

    var containerPanel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 800,
        height: 400,
        title: 'Container Panel',
        layout: 'column',
        suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
    });

    // Add a couple of child items.  We could add these both at the same time by passing an array to add(),
    // but lets pretend we needed to add them separately for some reason.

    containerPanel.add({
        xtype: 'panel',
        title: 'Child Panel 1',
        height: 100,
        columnWidth: 0.5
    });

    containerPanel.add({
        xtype: 'panel',
        title: 'Child Panel 2',
        height: 100,
        columnWidth: 0.5
    });

    // Turn the suspendLayout flag off.
    containerPanel.suspendLayout = false;

    // Trigger a layout.
    containerPanel.doLayout();

});