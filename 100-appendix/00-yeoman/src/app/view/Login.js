Ext.define('MyApp.view.Login', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.LoginModel',
        'MyApp.view.LoginController'
    ],
    viewModel: {type: 'login'},
    controller: 'login',
    alias: 'widget.login',
    title: MyApp.locale.LOGIN,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield'
            },
            items: [
                {
                    itemId: 'login',
                    fieldLabel: MyApp.locale.LOGIN,
                    bind: {
                        value: '{login}'
                    }
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: MyApp.locale.PASSWORD,
                    bind: {
                        value: '{password}'
                    }
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            itemId: 'cancel',
            text: MyApp.locale.CANCEL,
            handler: 'onCancelBtnClick'
        },
        {
            itemId: 'login',
            text: MyApp.locale.LOGIN,
            handler: 'onLoginBtnClick'
        }
    ]
});