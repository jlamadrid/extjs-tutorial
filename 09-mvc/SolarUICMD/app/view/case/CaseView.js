Ext.define("SolarUI.view.case.CaseView",{
    extend: "Ext.panel.Panel",
    alias: 'widget.caseview',

    requires: [
        'SolarUI.view.case.CaseViewModel',
        'SolarUI.view.case.CaseViewController',
        'Ext.grid.Panel',
        'Ext.grid.filters.filter.String',
        'Ext.grid.filters.filter.List',
        'Ext.grid.filters.filter.Number',
        'Ext.grid.column.Boolean',
        'Ext.grid.filters.Filters',
        'Ext.XTemplate',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: "caseviewCtrl",

    viewModel: {
        type: "casesViewModel"
    },

    frame: true,
    height: 250,
    width: '100%',
    title: 'Cases',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            reference: 'caseGridRef',
            bind: {
                store: '{casemodel}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'case',
                    text: 'Case',
                    filter: {
                        type: 'string',
                        emptyText: 'search for case ...'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'company',
                    text: 'Company',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'case_admin',
                    text: 'Case Admin',
                    filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'sub_group',
                    text: 'Sub Group',
                    filter: {
                        type: 'number'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        //var out = Ext.util.Format.number(val, '0.00');
                        if (value == 'A') {
                            return '<span style="color:' + "#73b51e" + ';">' + value + '</span>';
                        }
                        return value;
                    },
                    dataIndex: 'group',
                    text: 'Group'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'mec',
                    text: 'MEC Status',
                    flex: 1
                }
            ],
            listeners: {
                select: 'onGridpanelSelect',
                rowdblclick: 'onGridpanelRowDblClick',
                itemcontextmenu: 'onGridpanelItemContextMenu'
            },
            plugins: [
                {
                    ptype: 'gridfilters'
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            reference: 'cardDisplayPanel',
            layout: 'card',
            title: 'Detail',
            items: [
                {
                    xtype: 'panel',
                    reference: 'detailPnlRef',
                    tpl: [
                        '<table>',
                        '  <tr>',
                        '    <td style="text-align: right"><b>Number of Lives:</b></td>',
                        '    <td>{certs}</td>',
                        '  </tr>',
                        '  <tr>',
                        '  <tr>',
                        '    <td style="text-align: right"><b>Case Admin:</b></td>',
                        '    <td>{case_admin}</td>',
                        '  </tr>',
                        '  <tr>',
                        '    <td style="text-align: right"><b>MEC:</b></td>',
                        '    <td>{mec}</td>',
                        '  </tr>',
                        '</table>'
                    ]
                },
                {
                    xtype: 'form',
                    reference: 'caseFormRef',
                    bodyPadding: 10,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Case',
                            name: 'case'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Company',
                            name: 'company'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '# of certs',
                            name: 'certs'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Group',
                            name: 'group'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Sub Group',
                            name: 'sub_group'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Case Admin',
                            name: 'case_admin',
                            displayField: 'user_name',
                            queryMode: 'local',
                            store: 'UserDataStore'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    listeners: {
                                        click: 'btnClickSave'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Cancel',
                                    listeners: {
                                        click: 'btnClickCancel'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'add'
                    }
                }
            ]
        }
    ]

});
