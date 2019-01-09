export default [
	{
	  path: '/',
	  redirect: '/home'
	},
	{
	  path: '/home',
	  name: 'home',
	  component: () => import('@/views/home/home')
	},
	{
	  path: '/city/:cityid',
	  name: 'cityDeatil',
	  component: () => import('@/views/city/city')
	},
    //所有商铺列表页
    {
        path: '/msite',
        component: () => import('@/views/msite/msite'),
        meta: { keepAlive: true },
    },
    //登录注册页
    {
        path: '/login',
        component: () => import('@/views/login/login'),
    },
    //修改密码页
    {
        path: '/forget',
        component: () => import('@/views/forget/forget'),
    },
    //搜索页
    {
        path: '/search/:geohash',
        component: () => import('@/views/search/search'),
    },
    //特色商铺列表页
    {
        path: '/food',
        component: () => import('@/views/food/food'),
        meta: { keepAlive: true },
    },
    //商铺详情页
    {
        path: '/shop',
        component: () => import('@/views/shop/shop'),
        children: [{
            path: 'foodDetail', //食品详情页
            component: () => import('@/views/shop/children/foodDetail'),
        }, {
            path: 'shopDetail', //商铺详情页
            component: () => import('@/views/shop/children/shopDetail'),
            children: [{
                path: 'shopSafe', //商铺安全认证页
                component: () => import('@/views/shop/children/children/shopSafe'),
            }, ]
        }]
    },
    //确认订单页
    {
        path: '/confirmOrder',
        component: () => import('@/views/confirmOrder/confirmOrder'),
        children: [{
            path: 'remark', //订单备注
            component: () => import('@/views/confirmOrder/children/remark'),
        }, {
            path: 'invoice', //发票抬头
            component: () => import('@/views/confirmOrder/children/invoice'),
        }, {
            path: 'payment', //付款页面
            component: () => import('@/views/confirmOrder/children/payment'),
        }, {
            path: 'userValidation', //用户验证
            component: () => import('@/views/confirmOrder/children/userValidation'),
        }, {
            path: 'chooseAddress', //选择地址
            component: () => import('@/views/confirmOrder/children/chooseAddress'),
            children: [{
                path: 'addAddress', //添加地址
                component: () => import('@/views/confirmOrder/children/children/addAddress'),
                children: [{
                    path: 'searchAddress', //搜索地址
                    component: () => import('@/views/confirmOrder/children/children/children/searchAddress'),
                }]
            }, ]
        }, ]
    },
    //个人信息页
    {
        path: '/profile',
        component: () => import('@/views/profile/profile'),
        children: [{
            path: 'info', //个人信息详情页
            component: () => import('@/views/profile/children/info'),
            children: [{
                path: 'setusername',
                component: () => import('@/views/profile/children/children/setusername'),
            },{
                path: 'address',
                component: () => import('@/views/profile/children/children/address'),     //编辑地址
                children:[{
                    path:'add',
                    component:() => import('@/views/profile/children/children/children/add'),
                    children:[{
                        path:'addDetail',
                        component:() => import('@/views/profile/children/children/children/children/addDetail')
                    }]
                }]
            }]
        },
        {
            path: 'service', //服务中心
            component: () => import('@/views/service/service'),
        },]
    },
    //订单列表页
    {
        path: '/order',
        component: () => import('@/views/order/order'),
        children: [{
            path: 'orderDetail', //订单详情页
            component: () => import('@/views/order/children/orderDetail'),
        }, ]
    },
    //vip卡页
    {
        path: '/vipcard',
        component: () => import('@/views/vipcard/vipcard'),
        children: [{
            path: 'invoiceRecord', //开发票
            component: () => import('@/views/vipcard/children/invoiceRecord'),
        }, {
            path: 'useCart', //购买会员卡
            component: () => import('@/views/vipcard/children/useCart'),
        }, {
            path: 'vipDescription', //会员说明
            component: () => import('@/views/vipcard/children/vipDescription'),
        },]
    },
    //发现页
    {
        path: '/find',
        component: () => import('@/views/find/find')
    },
    //下载页
    {
        path: '/download',
        component: () => import('@/views/download/download')
    },
    //服务中心
    {
        path: '/service',
        component: () => import('@/views/service/service'),
         children: [{
            path: 'questionDetail', //订单详情页
            component: () => import('@/views/service/children/questionDetail')
        }, ]
    },
    //余额
    {
        path: '/balance',
        component: () => import('@/views/balance/balance'),
        children: [{
            path: 'detail', //余额说明
            component: () => import('@/views/balance/children/detail'),
        }, ]
    },
    //我的优惠页
    {
        path: '/benefit',
        component: () => import('@/views/benefit/benefit'),
        children: [{
            path: 'coupon', //代金券说明
            component: () => import('@/views/benefit/children/coupon'),
        }, {
            path: 'hbDescription', //红包说明
            component: () => import('@/views/benefit/children/hbDescription'),
        }, {
            path: 'hbHistory', //历史红包
            component: () => import('@/views/benefit/children/hbHistory'),
        }, {
            path: 'exchange', //兑换红包
            component: () => import('@/views/benefit/children/exchange'),
        }, {
            path: 'commend', //推荐有奖
            component: () => import('@/views/benefit/children/commend'),
        },]
    },
    //我的积分页
    {
        path: '/points',
        component: () => import('@/views/points/points'),
        children: [{
            path: 'detail', //积分说明
            component: () => import('@/views/points/children/detail'),
        }, ]
    },
]
