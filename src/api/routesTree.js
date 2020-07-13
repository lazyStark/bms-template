/*
 * @Author: siwenfeng
 * @Date: 2020-07-04 18:29:56
 * @LastEditTime: 2020-07-10 14:48:48
 * @Description: this is ....
 */
export default [

  {
    'row': 6,
    'createdBy': 'system',
    'updatedBy': 'system',
    'createdTime': '2020-04-02 10:22:21',
    'updatedTime': '2020-04-02 23:19:14',
    'deleted': 0,
    'authId': null,
    'menuId': '001001',
    'menuPid': '001',
    'name': 'Pollution',
    'path': '/pollution',
    'hidden': false,
    'redirect': null,
    'component': 'Layout',
    'alwaysShow': true,
    'title': '污染源',
    'icon': 'email',
    'noCache': true,
    'buttonAuthority': false,
    'children': [{
      'row': 66,
      'createdBy': 'system',
      'updatedBy': 'system',
      'createdTime': '2020-04-02 10:22:21',
      'updatedTime': '2020-04-02 23:19:14',
      'deleted': 0,
      'authId': null,
      'menuId': '001001001',
      'menuPid': '001001',
      'name': 'GIS',
      'path': 'gismap',
      'hidden': false,
      'redirect': null,
      'component': 'cesium/index',
      'alwaysShow': false,
      'title': 'GIS',
      'icon': 'link',
      'noCache': true,
      'buttonAuthority': false,
      'children': []
    }]
  },
  {
    'row': 10,
    'createdBy': 'system',
    'updatedBy': 'system',
    'createdTime': '2020-04-02 10:24:45',
    'updatedTime': '2020-05-27 05:36:01',
    'deleted': 0,
    'authId': null,
    'menuId': '002003',
    'menuPid': '002',
    'name': '扩散监控',
    'path': '/kuosan',
    'hidden': false,
    'redirect': null,
    'component': 'Layout1',
    'alwaysShow': true,
    'title': '扩散监控',
    'icon': 'excel',
    'noCache': true,
    'buttonAuthority': false,
    'children': [{
      'alwaysShow': false,
      'authId': null,
      'buttonAuthority': false,
      'children': [],
      'component': 'kuosan/index',
      'createdBy': 'system',
      'createdTime': '2020-04-02 17:51:47',
      'deleted': 0,
      'hidden': false,
      'icon': 'money',
      'menuId': '003001001',
      'menuPid': '002003',
      'name': 'Analysis',
      'noCache': true,
      'path': 'role',
      'redirect': null,
      'row': 29,
      'title': '扩散分析',
      'updatedBy': 'system',
      'updatedTime': '2020-04-07 18:12:15'
    }]
  }

]
