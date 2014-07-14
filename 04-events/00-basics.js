/**
 * Event handlers
 */
Ext.onReady(function () {

    /**
     * Event handlers can be specified inline during component creation or added using the 'on' handler
     * @type {Ext.Button}
     */
    var button = Ext.create('Ext.Button', {
        text: 'Button',
        /**
         * defining multiple listeners inline
         */
        listeners: {
            focus: function() {
                console.log('button has focus.');
            },
            click: function() {
                Ext.Msg.alert('Button clicked A');
            }
        }
    });

    /**
     * Listeners can also be added after component creation using the 'on' handler
     */
    button.on('mouseover', function() {
        console.log('Moused over.');
    });

    var panel = Ext.create('Ext.panel.Panel', {

        title: 'Main Panel',
        width: 600,
        height: 400,
        renderTo: Ext.getBody(),

        layout: {
            type: 'vbox',       // Arrange child items vertically
            align: 'stretch',    // Each takes up full width
            padding: 5
        },

        items: [
            {   // Results grid specified as a config object with an xtype of 'grid'
                xtype: 'grid',

                // One header just for show. There's no data,
                columns: [
                    {header: 'Column One'}
                ],

                store: Ext.create('Ext.data.ArrayStore', {}), // A dummy empty data store

                flex: 1 // Use 1/3 of Container's height (hint to Box layout)
            },
            {
                xtype: 'splitter'   // A splitter between the two child items
            },
            {   // Details Panel specified as a config object (no xtype defaults to 'panel').
                title: 'Details',
                bodyPadding: 5,
                // An array of form fields
                items: [
                    {
                        fieldLabel: 'Data item',
                        xtype: 'textfield'
                    }
                ],

                flex: 2 // Use 2/3 of Container's height (hint to Box layout)
            },
            button
        ],

        /**
         * Listerner defined inline during component creation
         */
        listeners: {

            afterrender: function() {
                Ext.Msg.alert('Panel rendered');
            }
        }
    });

});