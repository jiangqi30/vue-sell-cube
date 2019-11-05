import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'

// 注册商家详情页组件弹窗API,cube-UI:createAPI(Vue, Component, [events, single])
createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCartList)
