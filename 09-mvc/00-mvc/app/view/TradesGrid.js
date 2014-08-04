Ext.define('TL.view.TradesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tradesGrid',

    store: 'TradesStore',
    itemId: 'tradeGridItemId',


    initComponent: function() {

        var me = this;

        // **************  GRID Related functions and plugins
        function renderOption(value, p, record) {
            return Ext.String.format(
                //'<a href="http://sencha.com/forum/showthread.php?p={1}" target="_blank">{0}</a>',value, record.getId()
                '{0}',value, record.getId()
            );
        }

        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        /**
         * instead of using a default grouping feature: see features attribute in grid.
         * http://try.sencha.com/extjs/4.0.7/examples/grid/groupgrid/viewer.html
         * @type {Ext.grid.feature.Grouping}
         */
        var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: 'Trade: {name} ({rows.length} Trade{[values.rows.length > 1 ? "s" : ""]})'
        });
        // **************  END GRID Related functions and plugins

        // define a template to use for the detail view
        var bookTplMarkup = [
            'W/L: {wl}<br/>',
            'Status: {status}<br/>',
            'Return: {return}<br/>'
        ];

        var bookTpl = Ext.create('Ext.Template', bookTplMarkup);


        Ext.applyIf(me, {


            /**
             * Default grouping feature, alternativly you can use groupingFeature defined above
             */
            /*
             features: [
                //{ftype:'grouping'}
                groupingFeature
             ],
             */

            features: [
                //{ftype:'grouping'}
                {
                    id: 'group',
                    ftype: 'groupingsummary',
                    groupHeaderTpl: 'Trade: {name} ({rows.length} Trade{[values.rows.length > 1 ? "s" : ""]})',
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],

            /** plugins & features */
            plugins: [
                cellEditing,
                {
                    ptype: 'rowexpander',
                    rowBodyTpl : new Ext.XTemplate(
                        '<p><b>Notes:</b> {notes}</p>'
                    )
                }
            ],

            columns: [
                {
                    text: "Date Open"
                    ,width: 160
                    ,dataIndex: 'date_open'
                    ,sortable: true
                    ,renderer: Ext.util.Format.dateRenderer('m/d/Y')
                    //Ext.util.Format.dateRenderer('n/j/Y g:i A')
                    //Ext.util.Format.dateRenderer('m/d/Y'),
                },
                {
                    text: "Ticker",
                    width: 60,
                    dataIndex: 'ticker',
                    sortable: true
                },
                {
                    text: "Strategy"
                    ,width: 100
                    ,dataIndex: 'strategy'
                    ,sortable: true
                },
                {
                    text: "Option",
                    flex: 1,
                    dataIndex: 'option',
                    sortable: false,
                    renderer: renderOption //custom and separately defined renderer
                },
                {
                    text: "Return"
                    ,dataIndex: 'return'
                    ,sortable: true
                    ,groupable: false

                    /**
                     * custom render function to apply a calc and some formatting.
                     * @param value
                     * @param metaData
                     * @param record
                     * @param rowIdx
                     * @param colIdx
                     * @param store
                     * @param view
                     * @returns {*}
                     */
                    ,renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {

                        return Ext.util.Format.number(record.get('return') * 100, '0.00') + '%';
                        //return Ext.util.Format.usMoney(record.get('estimate') * record.get('rate'));
                    }
                },
                {
                    text: "Type"
                    ,dataIndex: 'type'
                    ,sortable: true
                },
                {
                    text: "W/L"
                    ,dataIndex: 'wl'
                    ,sortable: true
                },
                {
                    text: "P/L"
                    ,dataIndex: 'pl'
                    ,sortable: true
                    ,groupable: false
                    ,summaryType: function(records, values) {
                        var i = 0,
                            length = records.length,
                            total = 0,
                            record;

                        for (; i < length; ++i) {
                            record = records[i];
                            total += record.get('pl');
                        }
                        return total;
                    }
                    ,renderer :  function(val) {
                        var money = Ext.util.Format.usMoney(val);
                        if (val > 0) {
                            return '<span style="color:green;">' + money + '</span>';
                        } else if (val < 0) {
                            return '<span style="color:red;">' + money + '</span>';
                        }
                        return val;
                    }
                    /*
                     ,summaryRenderer: function(value, summaryData, dataIndex) {
                     return value + ' bucks';
                     }
                     */
                    ,summaryRenderer: Ext.util.Format.usMoney
                }
            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    hidden: false,
                    itemId: 'tradesToolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'deleteButton',
                            icon: 'extjs/application_delete.gif',
                            text: 'Delete'
                        },
                        {
                            xtype: 'button',
                            itemId: 'createButton',
                            icon: 'extjs/application_create.gif',
                            text: 'New'
                        }
                        /*
                        ,{
                            text:'Ungroup',
                            iconCls: 'icon-clear-group',
                            handler : function(){
                                groupingFeature.disable();
                            }
                        }
                        */
                    ]
                }
            ]
        });


        // update panel body on selection change
        me.getSelectionModel().on('selectionchange', function (sm, selectedRecord) {
            if (selectedRecord.length) {
                var detailPanel = Ext.getCmp('detailPanel'); //search by id
                detailPanel.update(bookTpl.apply(selectedRecord[0].data));
            }
        });

        me.callParent(arguments);
    }

});