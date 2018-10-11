<template>
    <div>
        <h1>{{$store.getters.userInfo.name}}</h1>
        <h1>{{$store.getters.params.a}}</h1>
    </div>
</template>

<script>
export default {
    async created() {
        //声明标题
        document.title = '首页';
        //请求接口
        await this.$store.dispatch('getUserInfo');
        //传递参数
        this.$store.dispatch('getActionParam', {a: 'abc'});
        const { userInfo,params } = this.$store.getters;
        console.log(userInfo.name);
        console.log(params.a);
    }
}
</script>

<style>

</style>

