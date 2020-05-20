import Layout from '@/layout/index'
import i18n from '@/i18n/i18n'

export default {
  path: '/xpack',
  component: Layout,
  redirect: '/applications/remote-apps/',
  name: 'Xpack',
  meta: { title: 'Xpack', icon: 'th' },
  children: [
    {
      path: 'interface-setting',
      component: () => import('@/views/xpack/InterfaceSettings.vue'),
      name: 'InterfaceSetting',
      meta: { title: i18n.t('xpack.InterfaceSettings') }
    },
    {
      path: 'license',
      component: () => import('@/views/xpack/License.vue'),
      name: 'License',
      meta: { title: 'License' }
    },
    {
      path: 'gathered-users',
      component: () => import('@/views/xpack/GatheredUser/GatheredUserList'),
      name: 'GatherUserList',
      meta: { title: i18n.t('xpack.GatherUserList') }
    },
    {
      path: 'gathered-users/tasks',
      component: () => import('@/views/xpack/GatheredUser/TaskList'),
      name: 'GatherUserTaskList',
      meta: { title: i18n.t('xpack.GatherUserTaskList') },
      hidden: true
    },
    {
      path: 'gathered-users/tasks/create',
      component: () => import('@/views/xpack/GatheredUser/TaskCreateUpdate'),
      name: 'GatherUserTaskCreate',
      meta: { title: i18n.t('xpack.GatherUserTaskCreate') },
      hidden: true
    },
    {
      path: 'gathered-users/tasks/update',
      component: () => import('@/views/xpack/GatheredUser/TaskCreateUpdate'),
      name: 'GatherUserTaskUpdate',
      meta: { title: i18n.t('xpack.GatherUserTaskUpdate'), action: 'update' },
      hidden: true
    }
  ]
}