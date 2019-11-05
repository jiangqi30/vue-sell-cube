<template>
    <transition name="fade">
        <div v-show="visible" class="detail">
            <div class="detail-wrapper clear-fix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                        <li v-for="(item,index) in seller.supports" class="supports-item" :key="index">
                            <support-ico :size=2 :type="item.type"></support-ico>
                            <span class="description">{{item.description}}</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <div class="bulletin-text">{{seller.bulletin}}</div>
                    </div>
                </div>
            </div>
            <div class="detail-close" @click="close">
                <i class="icon-close"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    import SupportIco from 'components/support-ico/support-ico'
    import Star from 'components/star/star'

    export default {
        name: 'header-detail',
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true
            },
            close() {
                this.visible = false
            }
        },
        components: {
            SupportIco,
            Star
        }
    }
</script>

<style lang="stylus" scoped>
    .detail
        position: fixed
        z-index: 100
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: auto
        background: rgba(7, 17, 27, 0.8)
        backdrop-filter: blur(10px)
        color: $color-white
        &.fade-enter,&.fade-leave-to
            opacity: 0
            background: rgba(7, 17, 27, 0.8)
        &.fade-enter-active,&.fade-leave-active
            transition: all 1s
        .detail-wrapper
            display: inline-block
            width: 100%
            min-height: 100%
            .detail-main
                margin-top: 64px
                padding-bottom: 64px
                .name
                    text-align: center
                    line-height: 16px
                    font-size: $fontsize-large
                    font-weight: 700
                .star-wrapper
                    margin-top: 16px
                    text-align: center
                .title
                    display: flex
                    width: 80%
                    margin: 28px auto 24px auto
                    .line
                        flex: 1
                        position: relative
                        top: -6px
                        border-bottom: 1px solid rgba(255, 255, 255, .2)
                    .text
                        margin: 0 12px
                        font-weight: 700
                .supports
                    width: 80%
                    margin: 0 auto
                    .supports-item
                        display: flex
                        padding: 0 12px
                        align-items: center
                        margin-bottom: 12px
                        &.last-child
                            margin-bottom: 0
                        .description
                            margin-left: 6px
                            font-size: 12px
                            line-height: 12px
                            font-weight: 200
                .bulletin
                    width: 80%
                    margin: 0 auto
                    .bulletin-text
                        padding: 0 12px
                        font-size: $fontsize-small
                        line-height: 24px
        .detail-close
            position: relative
            width: 32px
            height: 32px
            margin: -64px auto 0 auto
            clear: both
            font-size: 32px
</style>
