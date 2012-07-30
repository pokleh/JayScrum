$data.Class.define('JayScrum.Frame', null, null, {
    constructor:function (name) {
        this.name = name;
        this.metaData = new JayScrum.FrameMetadata('jayAppMetaDefault', { name:'FrameMeta' });
    },
    name:{ dataType:$data.String },
    data:{ dataType:$data.Object },
    views:{ dataType:$data.Object},
    metaViews:{ dataType:$data.Object},
    selectedView:{ dataType:$data.Object },
    selectedMetaView:{ dataType:$data.Object },
    frameApp:{dataType:'JayScrum.FrameApp'},
    registerChildFrame:function (frame) {
        if (!this.childFrames) {
            this.childFrames = ko.observableArray();
        }
        this.childFrames.push(frame);
    },
    registerView:function (name, view) {
        if (!this.views) {
            this.views = {};
        }
        this.views[name] = view;
    },
    registerMetaView:function (name, view) {
        if (!this.metaViews) {
            this.metaViews = {};
        }
        this.metaViews[name] = view;
    },
    selectView:function (name) {
        if (this.selectedView === undefined) {
            this.selectedView = ko.observable();
        }
        this.selectedView(this.views[name]);
    },
    selectMetaView:function (name) {
        if (this.selectedMetaView === undefined) {
            this.selectedMetaView = ko.observable();
        }
        this.selectedMetaView(this.metaViews[name]);
    },
    frameRegistredApp:function (app) {
        this.frameApp = app;
    },
    onFrameChangingTo:function (newFrameData, oldFrameData, frame) {

    },
    onFrameChangingFrom:function (newFrameData, oldFrameData, frame) {
        this.frameApp.visibleLoadingScreen(true);
    },
    onFrameChangedTo:function (newFrameData, oldFrameData, frame) {

    },
    onFrameChangedFrom:function (newFrameData, oldFrameData, frame) {
        this.frameApp.visibleLoadingScreen(false);
    }

}, null);

$data.Class.define('JayScrum.FrameMetadata', null, null, {
    viewName:{ value:ko.observable() },
    data:{ value:ko.observable() },
    constructor:function (name, meta) {
        this.viewName(name);
        this.data(meta);
    }

}, null);