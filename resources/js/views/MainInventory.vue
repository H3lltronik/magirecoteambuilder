<template>
    <el-container class="viewport-height">
        <el-aside class="aside_container" width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-main class="">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from '../components/Aside'
import MemViewer from '../components/MemViewer'
import MemGrid from '../components/MemGrid'

export default {
    components: {
        Aside,
        MemViewer,
        MemGrid,
    },
    created () {
    },
    data () {
        return {
        }
    },
    methods: {
    },
    computed: {

    }
}
</script>


<style scoped lang="scss">

</style>
