/**
 *
 */
Ext.define('TL.controller.TradesController', {
    extend: 'Ext.app.Controller',

    stores: [
        'TradesStore'
    ],

    views: [
        'TradesGrid',
        'TradeForm'
    ],

    refs: [

    ],

    config: {
        selectedApplication: null
    },

    init: function(application) {

        this.control({

            "#tradesToolbar #createButton": {
                click: this.addTrade
            },

            '#tradeFormItemId button[action=save]': {
                click: this.saveTrade
            },

            "#tradeGridItemId": {
                itemdblclick: this.editTrade
                //selectionchange: this.selectedApplication
            }

        });

    },

    addTrade: function(target) {

        var formWindow = Ext.create('widget.tradeform'),	// Create new form window
            form = formWindow.down('form').getForm(),		    // Get form within window
            model = Ext.create('model.trade');			// Create new Record model - alias: 'model.trade',

        // Associate model with form
        form.loadRecord(model);

        // Show window
        formWindow.show();

    },


    editTrade: function(grid, record) {
        var edit = Ext.create('widget.tradeform').show();
        edit.down('form').loadRecord(record);
    },

    saveTrade: function(button) {

        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues(),
            store  = this.getTradesStoreStore();

        if (form.isValid()) {

            record.set(values);

            //if type is a string it is a new record with an extjs generated id.
            var isNew = (typeof record.get('id') === 'string');

            // Add to store if new record
            if (isNew) {
                //need to set id to null to replace extjs generated string id for new entity.
                record.set('id',null);
                record.set('date_open', new Date());

                store.add(record);
            }

            store.sync();
            win.close();

        } else { // Invalid

            // Show errors on form
            form.markInvalid(errors);

        }
    }

});