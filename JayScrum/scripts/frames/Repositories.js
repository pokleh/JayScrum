/**
 * Created with JetBrains WebStorm.
 * User: nochtap
 * Date: 7/30/12
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */
$data.Class.define('JayScrum.Views.RepositorySettings', JayScrum.FrameView, null, {
    constructor:function(name, path, tplSource){
        this.templateName = name || 'repositories-template';
        this.i_scroll = null;
    },
    initializaView:function(){
        JayScrum.app.hideLoading();
        this.i_scroll = JayScrum.app.initScrollById('settingPageScroll');
    },
    tearDownView:function(){
        this.i_scroll.destroy();
        this.i_scroll = null;
    }
}, null);
$data.Class.define('JayScrum.Frames.Repositories', JayScrum.Frame, null, {
    constructor:function () {
        //register frameViews
        this.registerView('settings', new JayScrum.Views.RepositorySettings('repositories-template'));
        this.registerMetaView('defaultMeta', new JayScrum.FrameView('jayAppMetaDefault'));
        this.defaultViewName = 'settings';
        this.selectMetaView('defaultMeta');

        this.localContext = new JayScrum.Settings.RepositoryContext({ name: ['sqLite', 'indexedDb'], databaseName: 'JayScrumRepoSetting' });

        this.data = ko.observable({
            name:'settings',
            selectedSetting: ko.observable(),
            settings: ko.observableArray()
        });

    },
    _handleDefaultRepo:function(result){
        if (result && result.length > 0) {
            JayScrum.app.selectedFrame().connectTo(result[0]);
        }
        else {
            JayScrum.app.selectedFrame()._initializeRepositoriesFrame();
        }
    },

    _initializeRepositoriesFrame: function () {
        var app = this;
        this.localContext.Repositories.toArray(function (result) {
            app.data().settings(result);
            app.data().selectedSetting(null);
            app.showActionBar();

            JayScrum.app.hideLoading();
        });
    },
    _getDefaultRepository: function (callBack) {
        return this.localContext.Repositories.where(function (repo) { return repo.IsDefault === true; }, null).take(1).toArray(callBack);
    },
    _getAllRepositorySettings: function (callBack) {
        return this.localContext.Repositories.toArray(callBack);
    },
    connectTo:function(repoSetting){
        JayScrum.repository = new LightSwitchApplication.ApplicationData({ name: 'storm', url: repoSetting.Url, user: repoSetting.UserName, password: repoSetting.Password });
        JayScrum.repository.onReady(function(){
            JayScrum.app.selectFrame('MainFrame');
        });
    },
    editSetting:function(item){
        var entity = JayScrum.app.selectedFrame().localContext.Repositories.attachOrGet(item);
        JayScrum.app.selectedFrame().data().selectedSetting(entity.asKoObservable());
        JayScrum.app.selectedFrame().data().settings(null);

        JayScrum.app.selectedFrame().hideActionBar();
        JayScrum.app.selectedFrame().selectedView().i_scroll.destroy();
        JayScrum.app.selectedFrame().selectedView().i_scroll = JayScrum.app.initScrollById('settingPageScroll');
    },
    deleteSetting:function(item){
        JayScrum.app.selectedFrame().localContext.Repositories.remove(item);
        JayScrum.app.selectedFrame().localContext.saveChanges(function () {
            JayScrum.app.selectedFrame()._initializeRepositoriesFrame();
        });
    },
    addSetting:function(item){
        var newItem = new JayScrum.Settings.Repository({Title:'Repository', Url:'http://192.168.1.125:3000'});
        this.localContext.Repositories.add(newItem);
        this.data().settings(null);
        this.data().selectedSetting(newItem.asKoObservable());

        JayScrum.app.selectedFrame().hideActionBar();
        JayScrum.app.selectedFrame().selectedView().i_scroll.destroy();
        JayScrum.app.selectedFrame().selectedView().i_scroll = JayScrum.app.initScrollById('settingPageScroll');
    },
    saveSetting:function(item){
        $("div#settingPage input:focus").trigger('blur');
        JayScrum.app.selectedFrame().localContext.saveChanges(function () {
            JayScrum.app.selectedFrame()._initializeRepositoriesFrame();
        });

        JayScrum.app.selectedFrame().selectedView().i_scroll.destroy();
        JayScrum.app.selectedFrame().selectedView().i_scroll = JayScrum.app.initScrollById("settingPageScroll");
    },
    cancelSetting:function(item){
        JayScrum.app.selectedFrame().localContext.Repositories.detach(arguments[0]);
        JayScrum.app.selectedFrame().data().selectedSetting(null);
        JayScrum.app.selectedFrame()._initializeRepositoriesFrame();

        JayScrum.app.selectedFrame().hideActionBar();
        JayScrum.app.selectedFrame().selectedView().i_scroll.destroy();
        JayScrum.app.selectedFrame().selectedView().i_scroll = JayScrum.app.initScrollById("settingPageScroll");
    },
    onFrameChangingFrom: function(newFrameMeta, oldFrameMeta, initData, frame){
        JayScrum.app.showLoading();
        var self = this;
        this.localContext.onReady(function(){
            if(initData){
                self._getDefaultRepository(self._handleDefaultRepo);
            } else {
                self._initializeRepositoriesFrame();
            }
        });
    },
    showActionBar:function () {
        $('div#settingPageActionBar').addClass("opened");
    },
    hideActionBar:function () {
        $('div#settingPageActionBar').removeClass("opened");
    }
}, null);