/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    viewport: {
        autoMaximize: true,
        preventZooming: true
    },

    views: [
        'MyMap',
        'MyTabPanel'
    ],
    controllers: [
        'MyController'
    ],
    name: 'MyApp',
    startupImage: {
        '320x460': 'resources/startup/splashScreen.jpg'
    },

    launch: function() {
//        Ext.Viewport.setMasked({
//            xtype: 'loadmask',
//            message: 'Loading, please wait'
//        });

        new Ext.util.DelayedTask(function () {
//            Ext.Viewport.setMasked(false);
            Ext.create('MyApp.view.MyMap', {fullscreen: true});
        }).delay(1500);

    }

});
