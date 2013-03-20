MODx.page.CreateDashboard = function(config) {
	config = config || {};
	Ext.applyIf(config,{
        formpanel: 'modx-panel-dashboard'
        ,actions: {
            'new': 'system/dashboards/create'
            ,edit: 'system/dashboards/update'
            ,cancel: 'system/dashboards'
        }
        ,buttons: [{
            process: 'create', text: _('save'), method: 'remote'
            ,checkDirty: false
            ,id: 'modx-btn-save'
            ,keys: [{
                key: MODx.config.keymap_save || 's'
                ,ctrl: true
            }]
        },'-',{
            text: _('cancel')
            ,handler: function() {
                MODx.loadPage('system/dashboards');
            }
        },'-',{
            text: _('help_ex')
            ,handler: MODx.loadHelpPane
        }]
		,components: [{
            xtype: 'modx-panel-dashboard'
            ,renderTo: 'modx-panel-dashboard-div'
            ,record: config.record || {}
        }]
	});
	MODx.page.CreateDashboard.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.CreateDashboard,MODx.Component);
Ext.reg('modx-page-dashboard-create',MODx.page.CreateDashboard);
