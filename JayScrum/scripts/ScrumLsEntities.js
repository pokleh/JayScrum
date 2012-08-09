﻿////////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                             oData v2                                    /////////
////////////////////////////////////////////////////////////////////////////////////////

(function (global, $data, undefined) {
    function registerEdmTypes() {

        function Edm_Boolean() {
        }

        ;
        $data.Container.registerType('Edm.Boolean', Edm_Boolean);
        $data.Container.mapType(Edm_Boolean, $data.Boolean);

        function Edm_Binary() {
        }

        ;
        $data.Container.registerType('Edm.Binary', Edm_Binary);
        $data.Container.mapType(Edm_Binary, $data.Blob);

        function Edm_DateTime() {
        }

        ;
        $data.Container.registerType('Edm.DateTime', Edm_DateTime);
        $data.Container.mapType(Edm_DateTime, $data.Date);

        function Edm_DateTimeOffset() {
        }

        ;
        $data.Container.registerType('Edm.DateTimeOffset', Edm_DateTimeOffset);
        $data.Container.mapType(Edm_DateTimeOffset, $data.Integer);

        function Edm_Time() {
        }

        ;
        $data.Container.registerType('Edm.Time', Edm_Time);
        $data.Container.mapType(Edm_Time, $data.Integer);

        function Edm_Decimal() {
        }

        ;
        $data.Container.registerType('Edm.Decimal', Edm_Decimal);
        $data.Container.mapType(Edm_Decimal, $data.Number);

        function Edm_Single() {
        }

        ;
        $data.Container.registerType('Edm.Single', Edm_Single);
        $data.Container.mapType(Edm_Single, $data.Number);

        function Edm_Double() {
        }

        ;
        $data.Container.registerType('Edm.Double', Edm_Double);
        $data.Container.mapType(Edm_Double, $data.Number);

        function Edm_Guid() {
        }

        ;
        $data.Container.registerType('Edm.Guid', Edm_Guid);
        $data.Container.mapType(Edm_Guid, $data.String);

        function Edm_Int16() {
        }

        ;
        $data.Container.registerType('Edm.Int16', Edm_Int16);
        $data.Container.mapType(Edm_Int16, $data.Integer);

        function Edm_Int32() {
        }

        ;
        $data.Container.registerType('Edm.Int32', Edm_Int32);
        $data.Container.mapType(Edm_Int32, $data.Integer);

        function Edm_Int64() {
        }

        ;
        $data.Container.registerType('Edm.Int64', Edm_Int64);
        $data.Container.mapType(Edm_Int64, $data.Integer);

        function Edm_Byte() {
        }

        ;
        $data.Container.registerType('Edm.Byte', Edm_Byte);
        $data.Container.mapType(Edm_Byte, $data.Integer);

        function Edm_String() {
        }

        ;
        $data.Container.registerType('Edm.String', Edm_String);
        $data.Container.mapType(Edm_String, $data.String);

        function Edm_ObjectID() {
        }

        ;
        $data.Container.registerType('Edm.ObjectID', Edm_ObjectID);
        $data.Container.mapType(Edm_ObjectID, $data.ObjectID);

    }

    ;
    registerEdmTypes();
    $data.Entity.extend('LightSwitchApplication.WorkItem', {
        'Id':{ key:true, type:'Edm.String', nullable:false, computed:true },
        'RowVersion':{ type:'Edm.Binary', nullable:false, concurrencyMode:$data.ConcurrencyMode.Fixed, computed:true },
        'Title':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'Type':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'Description':{ type:'Edm.String', maxLength:255 },
        'CreatedDate':{ type:'Edm.DateTime', nullable:false, required:true },
        'CreatedBy':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'ChangedDate':{ type:'Edm.DateTime', nullable:false, required:true },
        'ChangedBy':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'Priority':{ type:'Edm.Int32' },
        'AssignedTo':{ type:'Edm.String', maxLength:255 },
        'ParentName':{ type:'Edm.String', maxLength:255 },
        'ProjectName':{ type:'Edm.String', maxLength:255 },
        'SprintName':{ type:'Edm.String', maxLength:255},
        'State':{ type:'Edm.String', maxLength:255 },
        'Effort':{ type:'Edm.Int32' },
        'BusinessValue':{ type:'Edm.Int32' },
        'IsBlocked':{ type:'Edm.Boolean' },
        'RemainingWork':{ type:'Edm.Int32' },
        'WorkItem_Project':{ type:'Edm.String' },
        'WorkItem_Sprint':{ type:'Edm.String' },
        'WorkItem_WorkItem':{ type:'Edm.String' },
        'Reason':{ type:'Edm.String', maxLength:255 }
        //'Project': { type: 'LightSwitchApplication.Project', inverseProperty: 'WorkItems' },
        //'Sprint': { type: 'LightSwitchApplication.Sprint', inverseProperty: 'WorkItems' },
        //'Parent': { type: 'LightSwitchApplication.WorkItem', inverseProperty: 'Children' },
        //'Children': { type: 'Array', elementType: 'LightSwitchApplication.WorkItem', inverseProperty: 'Parent' }
    });
    $data.Entity.extend('LightSwitchApplication.Project', {
        'Id':{ key:true, type:'Edm.String', nullable:false, computed:true },
        'RowVersion':{ type:'Edm.Binary', nullable:false, concurrencyMode:$data.ConcurrencyMode.Fixed, computed:true },
        'Name':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'Description':{ type:'Edm.String', maxLength:255 }
        //'WorkItems': { type: 'Array', elementType: 'LightSwitchApplication.WorkItem', inverseProperty: 'Project' }
    });
    $data.Entity.extend('LightSwitchApplication.Sprint', {
        'Id':{ key:true, type:'Edm.String', nullable:false, computed:true },
        'RowVersion':{ type:'Edm.Binary', nullable:false, concurrencyMode:$data.ConcurrencyMode.Fixed, computed:true },
        'Name':{ type:'Edm.String', nullable:false, required:true, maxLength:255 },
        'StartDate':{ type:'Edm.DateTime', nullable:false, required:true },
        'FinishDate':{ type:'Edm.DateTime', nullable:false, required:true }
        //'WorkItems': { type: 'Array', elementType: 'LightSwitchApplication.WorkItem', inverseProperty: 'Sprint' }
    });
    $data.EntityContext.extend('LightSwitchApplication.ApplicationData', {
        WorkItems:{ type:$data.EntitySet, elementType:LightSwitchApplication.WorkItem },
        Projects:{ type:$data.EntitySet, elementType:LightSwitchApplication.Project },
        Sprints:{ type:$data.EntitySet, elementType:LightSwitchApplication.Sprint }/*,
         Microsoft_LightSwitch_GetCanInformation: $data.EntityContext.generateServiceOperation({ serviceName: 'Microsoft_LightSwitch_GetCanInformation', returnType: 'Edm.String', params: [{ dataServiceMembers: 'Edm.String' }], method: 'GET' })*/
    });
    ///Security
    /* $data.Entity.extend('Microsoft.LightSwitch.Security.UserRegistration', {
     'UserName': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 256 },
     'FullName': { type: 'Edm.String', nullable: false, required: true, maxLength: 256, concurrencyMode: $data.ConcurrencyMode.Fixed },
     'Password': { type: 'Edm.String', maxLength: 128, concurrencyMode: $data.ConcurrencyMode.Fixed },
     'RoleAssignments': { type: 'Array', elementType: 'Microsoft.LightSwitch.Security.RoleAssignment', inverseProperty: 'User' },
     'DerivingRoleAssignments': { type: 'Array', elementType: 'Microsoft.LightSwitch.Security.RoleAssignment', inverseProperty: 'SourceAccount' }
     });
     $data.Entity.extend('Microsoft.LightSwitch.Security.Role', {
     'Name': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 128 },
     'RoleAssignments': { type: 'Array', elementType: 'Microsoft.LightSwitch.Security.RoleAssignment', inverseProperty: 'Role' },
     'RolePermissions': { type: 'Array', elementType: 'Microsoft.LightSwitch.Security.RolePermission', inverseProperty: 'Role' }
     });
     $data.Entity.extend('Microsoft.LightSwitch.Security.RoleAssignment', {
     'UserName': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 256 },
     'RoleName': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 128 },
     'SourceAccountName': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 256 },
     'User': { type: 'Microsoft.LightSwitch.Security.UserRegistration', required: true, inverseProperty: 'RoleAssignments' },
     'SourceAccount': { type: 'Microsoft.LightSwitch.Security.UserRegistration', required: true, inverseProperty: 'DerivingRoleAssignments' },
     'Role': { type: 'Microsoft.LightSwitch.Security.Role', required: true, inverseProperty: 'RoleAssignments' }
     });
     $data.Entity.extend('Microsoft.LightSwitch.Security.Permission', {
     'Id': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 322 },
     'Name': { type: 'Edm.String', nullable: false, required: true, maxLength: 64, concurrencyMode: $data.ConcurrencyMode.Fixed },
     'RolePermissions': { type: 'Array', elementType: 'Microsoft.LightSwitch.Security.RolePermission', inverseProperty: 'Permission' }
     });
     $data.Entity.extend('Microsoft.LightSwitch.Security.RolePermission', {
     'RoleName': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 128 },
     'PermissionId': { key: true, type: 'Edm.String', nullable: false, required: true, maxLength: 322 },
     'Role': { type: 'Microsoft.LightSwitch.Security.Role', required: true, inverseProperty: 'RolePermissions' },
     'Permission': { type: 'Microsoft.LightSwitch.Security.Permission', required: true, inverseProperty: 'RolePermissions' }
     });
     $data.EntityContext.extend('Microsoft.LightSwitch.Security.SecurityData', {
     UserRegistrations: { type: $data.EntitySet, elementType: Microsoft.LightSwitch.Security.UserRegistration },
     Roles: { type: $data.EntitySet, elementType: Microsoft.LightSwitch.Security.Role },
     RoleAssignments: { type: $data.EntitySet, elementType: Microsoft.LightSwitch.Security.RoleAssignment },
     Permissions: { type: $data.EntitySet, elementType: Microsoft.LightSwitch.Security.Permission },
     RolePermissions: { type: $data.EntitySet, elementType: Microsoft.LightSwitch.Security.RolePermission },
     Microsoft_LightSwitch_GetCanInformation: $data.EntityContext.generateServiceOperation({ serviceName: 'Microsoft_LightSwitch_GetCanInformation', returnType: 'Edm.String', params: [{ dataServiceMembers: 'Edm.String' }], method: 'GET' }),
     ChangePassword: $data.EntityContext.generateServiceOperation({ serviceName: 'ChangePassword', returnType: null, params: [{ userName: 'Edm.String' }, { oldPassword: 'Edm.String' }, { newPassword: 'Edm.String' }], method: 'POST' }),
     IsValidPassword: $data.EntityContext.generateServiceOperation({ serviceName: 'IsValidPassword', returnType: 'Edm.Boolean', params: [{ password: 'Edm.String' }], method: 'POST' }),
     GetWindowsUserInfo: $data.EntityContext.generateServiceOperation({ serviceName: 'GetWindowsUserInfo', returnType: 'Edm.String', params: [{ userName: 'Edm.String' }], method: 'GET' })
     });*/

    //Microsoft.LightSwitch.Security.context = new Microsoft.LightSwitch.Security.SecurityData({ name: 'oData', oDataServiceHost: 'http://localhost/JayScrumServer_ls/Microsoft.LightSwitch.SecurityData.svc' });


})(window, $data);

function testData() {
    var ctx = new LightSwitchApplication.ApplicationData({ name:'oData', oDataServiceHost:'http://192.168.1.142:3000' });
    //'hajni' = 'admin';
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 1', StartDate:moment().add('days', -30).utc().toDate(), FinishDate:moment().add('days', -23).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 2', StartDate:moment().add('days', -26).utc().toDate(), FinishDate:moment().add('days', -19).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 3', StartDate:moment().add('days', -22).utc().toDate(), FinishDate:moment().add('days', -15).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 4', StartDate:moment().add('days', -18).utc().toDate(), FinishDate:moment().add('days', -11).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 5', StartDate:moment().add('days', -14).utc().toDate(), FinishDate:moment().add('days', -7).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 6', StartDate:moment().add('days', -10).utc().toDate(), FinishDate:moment().add('days', -3).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 7', StartDate:moment().add('days', -6).utc().toDate(), FinishDate:moment().add('days', 1).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 8', StartDate:moment().add('days', -2).utc().toDate(), FinishDate:moment().add('days', 5).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 9', StartDate:moment().add('days', 2).utc().toDate(), FinishDate:moment().add('days', 9).utc().toDate() }));
    ctx.Sprints.add(new LightSwitchApplication.Sprint({ Name:'Sprint 10', StartDate:moment().add('days', -1).utc().toDate(), FinishDate:moment().add('days', 6).utc().toDate() }));

    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 1', Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt neque eget dolor rhoncus in vehicula dolor imperdiet. In hac habitasse platea dictumst. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 2', Description:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean mattis egestas lectus a sodales. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 3', Description:'ed lorem mauris, pellentesque et aliquet eget, dapibus quis erat. In dignissim orci nec est fermentum sed dignissim ipsum sodales. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 4', Description:'Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 5', Description:'Fusce varius cursus libero, quis rhoncus ligula facilisis ac. Duis adipiscing congue justo eu bibendum. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 6', Description:'Phasellus vitae purus lorem. Duis lobortis, velit et dignissim congue, nibh ante gravida ipsum, quis luctus enim sapien vitae turpis. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 7', Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt neque eget dolor rhoncus in vehicula dolor imperdiet. In hac habitasse platea dictumst. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 8', Description:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean mattis egestas lectus a sodales. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 9', Description:'ed lorem mauris, pellentesque et aliquet eget, dapibus quis erat. In dignissim orci nec est fermentum sed dignissim ipsum sodales. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 10', Description:'Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 11', Description:'Fusce varius cursus libero, quis rhoncus ligula facilisis ac. Duis adipiscing congue justo eu bibendum. ' }));
    ctx.Projects.add(new LightSwitchApplication.Project({ Name:'Project 12', Description:'Phasellus vitae purus lorem. Duis lobortis, velit et dignissim congue, nibh ante gravida ipsum, quis luctus enim sapien vitae turpis. ' }));

    //'hajni' = '';

    var allSprints = null;
    var allProjects = null;


    ctx.saveChanges(function () {
        console.log('Sprint and projects save OK');
        ctx.Sprints.toArray(function (sprintResult) {
            console.log('Get Sprints OK');
            ctx.Projects.toArray(function (projectResult) {
                console.log('Get Projects OK');

                console.log(sprintResult[5].Id);

                var ustoSprint = function (sprintId, projectId, index, context) {
                    for (var i = 0; i < 15; i++) {
                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"User Story 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"UserStory",
                            WorkItem_Sprint:sprintId,
                            WorkItem_Project:projectId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:"", State:"New"
                        }));
                    }
                };

                var taskToSprint = function (sprintId, userStoryId, index, context) {
                    for (var i = 0; i < 15; i++) {
                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'To Do', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));
                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'To Do', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));
                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'To Do', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));

                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'In Progress', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));
                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'In Progress', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));

                        context.WorkItems.add(new LightSwitchApplication.WorkItem({
                            Title:"Task 1" + index++, Description:"Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio.Donec est orci, molestie ac pellentesque in, lacinia et dui. Morbi vitae facilisis enim. Aliquam eu ullamcorper odio. ",
                            Priority:Math.floor(Math.random() * 30), Effort:Math.floor(Math.random() * 100), BusinessValue:Math.floor(Math.random() * 1000), Type:"Task",
                            State:'Done', RemainingWork:Math.floor(Math.random() * 11),
                            WorkItem_Sprint:sprintId,
                            WorkItem_WorkItem:userStoryId,
                            CreatedDate:new Date().toISOString(), CreatedBy:'hajni', ChangedDate:new Date().toISOString(), ChangedBy:'hajni', AssignedTo:""
                        }));
                    }
                }

                ustoSprint(null, null, 0, ctx);
                ustoSprint(sprintResult[5].Id, projectResult[0].Id, 15, ctx);
                ustoSprint(sprintResult[6].Id, projectResult[1].Id, 30, ctx);
                ustoSprint(sprintResult[7].Id, projectResult[0].Id, 45, ctx);
                ustoSprint(sprintResult[8].Id, projectResult[1].Id, 60, ctx);

                ctx.saveChanges(function(){
                    console.log('UserStories save OK');
                        ctx.WorkItems.toArray(function(userStoryResult){
                            console.log('Get userStories OK');
                            taskToSprint(null, null, 0, ctx);
                            console.log(sprintResult[5].Name + userStoryResult[35].Title);
                            taskToSprint(sprintResult[5].Id, userStoryResult[35].Id, 15, ctx);
                            console.log(sprintResult[6].Name + userStoryResult[36].Title);
                            taskToSprint(sprintResult[6].Id, userStoryResult[36].Id, 30, ctx);
                            console.log(sprintResult[7].Name + userStoryResult[50].Title);
                            taskToSprint(sprintResult[7].Id, userStoryResult[50].Id, 45, ctx);
                            console.log(sprintResult[8].Name + userStoryResult[51].Title);
                            taskToSprint(sprintResult[8].Id, userStoryResult[51].Id, 60, ctx);
                            ctx.saveChanges(function () {
                                console.log('ALL OK');
                            });
                        });
                });
            });
        });
    });
}
function migraTfsToLs(from, to) {
    var iterationStep = 300;

    var From = from || 0;
    var To = to || iterationStep;

    var d = new LightSwitchApplication.ApplicationData({ name:'oData', oDataServiceHost:'http://' + location.host + '/ODataTFS.Web/DefaultCollection' });

    d.WorkItems.filter(function (c) {
        return c.Project == $data.Model.settingPage.loginSettings.ProjectName;
    }).skip(From).take(To).toArray(function (res) {
        res.forEach(function (r) {
            r.Id = undefined;
            if (r.Description)
                r.Description = r.Description.length > 250 ? r.Description.substr(0, 250) : r.Description;

            if (r.ReproSteps)
                r.ReproSteps = r.ReproSteps.length > 250 ? r.ReproSteps.substr(0, 250) : r.ReproSteps;

            r.RowVersion = '';
            r.ResolvedBy = r.ResolvedBy || '??';
            r.Title = r.Title || r.IterationPath;

            r.StartDate = r.StartDate < new Date(1980) ? new Date(1980) : r.StartDate;
            r.FinishDate = r.FinishDate < new Date(1980) ? new Date(1980) : r.FinishDate;

            LightSwitchApplication.context.WorkItems.add(r);
        });

        LightSwitchApplication.context.saveChanges(function () {
            console.log('done ' + To);
            if (res.length === iterationStep) {
                console.log('next ' + iterationStep);
                migraTfsToLs(From + iterationStep, To + iterationStep);
            }

        });
    })
}