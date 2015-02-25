Ext.define('SolarUI.model.CaseModel', {
    extend: 'Ext.data.Model',
    alias: 'model.case',
    
    fields: [
        { name: 'case', type: 'auto' },
        { name: 'company', type: 'auto' },
        { name: 'certs', type: 'int' },
        { name: 'case_admin', type: 'auto' },
        { name: 'group', type: 'auto' },
        { name: 'sub_group', type: 'auto' },
        { name: 'mec', type: 'boolean' }

    ]
});
