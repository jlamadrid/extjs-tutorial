/**
 * This output is the same as previous, just showing the use of Ext.application
 * this is typically used on full mvc single page applications.
 *
 * http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext-method-application
 * http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext.app.Application
 */
Ext.define('MyApp.MyPanel', {
    extend      : 'Ext.Panel',
    width       : 200,
    height      : 150,
    bodyPadding : 5
});

Ext.application({
    name   : 'MyApp',

    launch : function() {

        Ext.create('MyApp.MyPanel', {
            renderTo :Ext.getBody(),
            title    : 'My First Panel',
            html     : 'My First Panel'
        });

        Ext.create('MyApp.MyPanel', {
            renderTo : Ext.getBody(),
            title    : 'My Second Panel',
            html     : 'My Second Panel'
        });
    }
});