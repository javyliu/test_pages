/**
 * @class Ext.form.Url
 * @extends Ext.form.Text
 * Wraps an HTML5 url field. See {@link Ext.form.FormPanel FormPanel} for example usage.
 * @xtype urlfield
 * @alternateClassName Ext.form.UrlField
 */
Ext.form.Url = Ext.extend(Ext.form.Text, {
    inputType: 'url',
    
    autoCapitalize: false
});

Ext.reg('urlfield', Ext.form.Url);

//<deprecated since=0.99>
// DEPRECATED - remove this in 1.0. See RC1 Release Notes for details
Ext.form.UrlField = Ext.extend(Ext.form.Url, {

    constructor: function() {
        console.warn("Ext.form.UrlField has been deprecated and will be removed in Sencha Touch 1.0. Please use Ext.form.Url instead");
        Ext.form.UrlField.superclass.constructor.apply(this, arguments);
    }
});
//</deprecated>