Ext.define('SolarUI.view.case.CaseViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.caseviewCtrl',

    showView: function(view) {
        var references = this.getReferences();

        var display = references.cardDisplayPanel;
        var layout = display.getLayout();

        var viewRef = this.lookupReference(view);

        layout.setActiveItem(viewRef);

    },

    select: function(rowmodel, record, index, eOpts) {
        // Set selected record
        var viewModel = this.getViewModel();
        viewModel.set('record', record);

        // Show details
        this.showView('detailPnlRef');
    },

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
        // Set selected record
        this.getViewModel().set('record', record);

        // grab a reference to the detailPanel
        // http://www.sencha.com/blog/using-viewcontrollers-in-ext-js-5

        var detailPanel = this.lookupReference('detailPnlRef');

        // update the detailPanel with data - this will trigger the tpl to become updates
        detailPanel.update(record.data);

        // Show form
        this.showView('detailPnlRef');

    },

    onGridpanelRowDblClick: function(tableview, record, tr, rowIndex, e, eOpts) {
        var formPanel = this.getReferences().caseFormRef,
            form = formPanel.getForm(),
            record = this.getViewModel().get('record');

        // Load record model into form
        form.loadRecord(record);

        // Set title
        formPanel.setTitle('Edit Case');

        // Show form
        this.showView('caseFormRef');

    },

    onGridpanelItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        e.stopEvent();
        //this.mnuContext.showAt(e.getXY());
        var car = Ext.create('car',{
            name: 'george'
        });

        car.toConsole();

    },

    btnClickSave: function(button, e, eOpts) {

        var form = this.getReferences().caseFormRef.getForm(),
            record = form.getRecord(),
            store = this.getStore('casemodel'),
            now = new Date();

        // Valid
        if (form.isValid()) {

            // Update associated record with values
            form.updateRecord();

            // Set updated date/time
            //record.set('updatedAt', now);

            // Add to store if new record
            if (record.phantom) {

                // Set created date/time
                //record.set('createdAt', now);

                // TODO: Assign the record's ID from data source
                // Normally, this value would be auto-generated,
                // or returned from the server
                var id = store.count() + 1;
                record.set('id', id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.commitChanges();

            // Display record
            this.select(this, record);

        }
    },

    btnClickCancel: function(button, e, eOpts) {
        // Show details
        this.showView('detailPnlRef');
    },

    add: function(button, e, eOpts) {
        var references = this.getReferences(),
            formPanel = this.getReferences().caseFormRef,
            form = formPanel.getForm();

        //create a new model using alias
        var newRecord = Ext.create('model.case');

        // Clear form
        form.reset();

        // Set record
        form.loadRecord(newRecord);

        // Set title
        formPanel.setTitle('Add Case');

        // Show form
        this.showView('caseFormRef');
    },

    onStoreLoad: function(store, records, successful, eOpts) {
        store.data.each(function(data){
            console.log('Case:' + data.data['case']);
        });
    }

});
