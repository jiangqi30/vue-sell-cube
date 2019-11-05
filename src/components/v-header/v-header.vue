<template>
    <div class="header" @click="showDetail">
        <!--头部内容-->
        <div class="content-wrapper">
            <!--头像-->
            <div class="avatar">
                <img class="avatar-img" :src="seller.avatar">
            </div>
            <!--文本内容-->
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">{{seller.description}}/{{seller.deliveryTime}}分送达</div>
                <div class="support" v-if="seller.supports">
                    <support-ico :size=1 :type="seller.supports[0].type"></support-ico>
                    <span class="support-description">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <!--活动个数-->
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <!--公告-->
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span>
            <div class="bulletin-text">{{seller.bulletin}}</div>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <!--背景图-->
        <div class="background">
            <img class="background-img" :src="seller.avatar">
        </div>
    </div>
</template>

<script>
    import SupportIco from 'components/support-ico/support-ico'
    export default {
        name: 'v-header',
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            // 利用cube-UI框架的API式调用组件
            showDetail() {
                this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
                    // 传参
                    $props: {
                            seller: 'seller'
                        }
                    })
                // 调用组件中的方法
                this.headerDetailComp.show()
            }
        },
        components: {
            SupportIco
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"

    .header
        position: relative
        overflow: hidden
        background: $color-background-ss
        color: $color-white
        .content-wrapper
            position: relative
            display: flex
            align-items: center
            padding: 24px 12px 18px 24px
            .avatar
                flex: 0 0 64px
                width: 64px
                margin-right: 16px
                .avatar-img
                    width: 64px
                    height: 64px
                    border-radius: 2px
            .content
                flex: 1
                .title
                    display: flex
                    align-items: center
                    margin-bottom: 8px
                    .brand
                        width: 30px
                        height: 18px
                        margin-right: 6px
                        bg-image('brand')
                        background-size: 30px 18px
                        background-repeat: no-repeat
                    .name
                        font-size: $fontsize-large
                        font-weight: bold
                        line-height: 18px
                .description
                    font-size: $fontsize-small
                    font-weight: 200
                    line-height: 12px
                    margin-bottom: 10px
                .support
                    display : flex
                    align-items: center
                    .support-description
                        font-size: $fontsize-small-s
                        font-weight: 200
                        line-height: 12px
                        margin-left: 4px
            .support-count
                position: absolute
                right: 12px
                bottom: 14px
                display: flex
                align-items: center
                padding: 0 8px
                height: 24px
                line-height: 24px
                text-align: center
                border-radius: 14px
                background: $color-background-sss
                .count
                    font-size: $fontsize-small-s
                .icon-keyboard_arrow_right
                    margin-left: 2px
                    line-height: 24px
                    font-size: $fontsize-small-s
        .bulletin-wrapper
            position: relative
            display: flex
            height: 28px
            line-height: 28px
            padding: 0 12px
            background: $color-background-sss
            align-items: center
            .bulletin-title
                flex: 0 0 22px
                width: 22px
                height: 12px
                margin-right: 4px
                bg-image('bulletin')
                background-size: 22px 12px
                background-repeat: no-repeat
            .bulletin-text
                flex: 1
                font-size: $fontsize-small-s
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
            .icon-keyboard_arrow_right
                margin-left: 4px
                font-size: $fontsize-small-s
        .background
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
            filter: blur(10px)
            .background-img
                width: 100%
</style>
