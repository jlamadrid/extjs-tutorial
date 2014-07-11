/**
 * Here we use Ext.onReady to kick things off:
 * http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext-method-onReady
 *
 */
Ext.onReady(function(){
    console.log('onReady()');

    Ext.define('MyApp.MyPanel', {
        extend      : 'Ext.Panel',
        width       : 200,
        height      : 150,
        bodyPadding : 5
    });

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

});