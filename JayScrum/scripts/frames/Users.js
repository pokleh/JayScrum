/**
 * Created with JetBrains WebStorm.
 * User: nochtap
 * Date: 7/30/12
 * Time: 10:03 AM
 * To change this template use File | Settings | File Templates.
 */
$data.Class.define('JayScrum.Frames.Users', JayScrum.Frame, null, {
    constructor:function () {
        //register frameViews
        this.registerView('settings', new JayScrum.FrameView('usersPage-template'));
        this.registerMetaView('defaultMeta', new JayScrum.FrameView('jayAppMetaDefault'));
        this.defaultViewName='settings';
        this.selectMetaView('defaultMeta');
        this.data = ko.observable({
            name:'users',
            users:ko.observableArray(['','','','']),
            roles:ko.observableArray(['','','',''])
        });
    }
}, null);