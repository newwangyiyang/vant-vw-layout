<template>
    <div class="share_no_way_index">
        <img src="../assets/img/404pageBG.png" alt="未找到页面提示信息">
    </div>
</template>

<script>

export default {
    name: 'ShareNoWay',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.share_no_way_index {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    background-color: #d1d8e0;
    height: 100vh;
    padding-top: 60px;
    overflow: hidden;
    img {
        width: 80%;
    }
    p {
        font-size: 18px;
        color: red;
        span {
            font-size: 24px;
            color: teal;
        }
    }
}
</style>
