<template>
    <el-row class="h-100 pb-3" justify="space-between" type="flex">
        <el-col :span="12" :lg="12" :xl="12">

            <MemGrid :memorias="memorias"></MemGrid>

        </el-col>
        <el-col :span="10" :lg="10" :xl="8">
            <MemViewer></MemViewer>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

import Aside from '../components/Aside'
import MemViewer from '../components/MemViewer'
import MemGrid from '../components/MemGrid'

export default {
    components: {
        Aside,
        MemViewer,
        MemGrid,
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
    },
    computed: {
        ...mapGetters({
            memorias: 'getMemorias',
        }),
    }
}
</script>


<style scoped lang="scss">

</style>
