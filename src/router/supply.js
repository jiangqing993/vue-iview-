// 供应
const supply = [
  {
    path: '/supply/productManage',
    name: 'supply-manege',
    title: '供应-货品管理',
    component: () => {
      return import('@/pages/index-system/supply/productMange/ProductManage')
    },
    children: [
      {
        path: '/supply/productMange/list',
        name: 'productMange-list',
        title: '货品管理',
        component: () => {
          return import(
            '@/pages/index-system/supply/productMange/ProductManageList'
          )
        }
      }
    ]
  }
]

export default supply
