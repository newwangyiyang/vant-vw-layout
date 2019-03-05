<template>
    <div class="index">
        <BetterScroll 
            :data="list"
            :pullup="true"
            @pullup="getMoreList"
        >
            <div>
                <div class="item" v-for="(item, index) in list" :key="index">{{item}}</div>
                <dir v-if="flag">数据加载中</dir>
            </div>
        </BetterScroll>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BetterScroll from '../../components/BetterScroll';
export default {
    data() {
        return {
            list: [],
            flag: true,
        }
    },
    async created() {
        //声明标题
        document.title = '首页';
        // //请求接口
        // await this.$store.dispatch('getUserInfo');
        // //传递参数
        // this.$store.dispatch('getActionParam', {a: 'abc'});
        // const { userInfo,params } = this.$store.getters;
        // console.log(userInfo.name);
        // console.log(params.a);

        // console.log(this.userInfo);
        // console.log(this.params);
        this.getMoreList();
        console.log(this.list)
    },
    components: {
        BetterScroll
    },
    computed: {
        ...mapGetters(['userInfo', 'params'])
    },
    methods: {
        getMoreList() {
            this.flag = true;
            setTimeout(() => {
                for(let i = 0; i < 10; i++) {
                    this.list.push('你好社会' + i);
                }
                this.flag = false;
            },2000)
            this.flag = true;
        }
    }
}
</script>

<style lang="less" scoped>
.index {
    .item {
        line-height: 200px;
        text-align: center;
    }
}
</style>

