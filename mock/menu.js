/*
 * @Author: siwenfeng
 * @Date: 2020-07-06 17:41:56
 * @LastEditTime: 2020-07-13 10:02:24
 * @Description: this is ....
 */
const top = [
  {
    'row': 1,
    'createdBy': 'system',
    'updatedBy': 'system',
    'createdTime': '2020-04-02 10:00:53',
    'updatedTime': '2020-05-07 11:15:52',
    'deleted': 0,
    'authId': 1,
    'menuId': '001',
    'menuPid': '0',
    'name': 'system',
    'path': '',
    'hidden': true,
    'redirect': 'noredirect',
    'component': null,
    'alwaysShow': true,
    'title': 'system',
    'icon': 'pollution',
    'noCache': true,
    'buttonAuthority': false,
    'children': [
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
        'path': 'pollution',
        'hidden': false,
        'redirect': null,
        'component': 'Layout',
        'alwaysShow': true,
        'title': 'Pollution',
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
      }
    ]
  },
  {
    'row': 2,
    'createdBy': 'system',
    'updatedBy': 'system',
    'createdTime': '2020-04-02 10:14:59',
    'updatedTime': '2020-05-07 14:26:39',
    'deleted': 0,
    'authId': 2,
    'menuId': '002',
    'menuPid': '0',
    'name': 'onemap',
    'path': '',
    'hidden': true,
    'redirect': '',
    'component': null,
    'alwaysShow': true,
    'title': 'onemap',
    'icon': 'tending',
    'noCache': true,
    'buttonAuthority': false,
    'children': [
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
        'name': 'monitor',
        'path': 'kuosan',
        'hidden': false,
        'redirect': null,
        'component': 'Layout1',
        'alwaysShow': true,
        'title': 'monitor',
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
          'title': 'Analysis',
          'updatedBy': 'system',
          'updatedTime': '2020-04-07 18:12:15'
        }]
      }
    ]
  }]

module.exports = [

  // user logout
  {
    url: '/user/getTopRoutes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: top
      }
    }
  }
]
