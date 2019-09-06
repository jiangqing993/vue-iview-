// 门店
const store = [
  {
    path: '/store/storeManege',
    name: 'store-manege',
    title: '门店-门店管理',
    component: () => {
      return import('@/pages/index-system/store/storeManage/StoreManage')
    },
    children: [
      {
        path: '/store/storeManege/list',
        name: 'store-list',
        title: '门店列表',
        component: () => {
          return import(
            '@/pages/index-system/store/storeManage/StoreManageList'
          )
        }
      }
    ]
  },
  {
    path: '/store/clerkManage',
    name: 'clerk-manege',
    title: '门店-店员管理',
    component: () => {
      return import('@/pages/index-system/store/clerkManage/ClerkManage')
    },
    children: [
      {
        path: '/store/clerkManage/list',
        name: 'clerk-list',
        title: '店员列表',
        component: () => {
          return import(
            '@/pages/index-system/store/clerkManage/ClerkManageList'
          )
        }
      }
    ]
  }
]

export default store
