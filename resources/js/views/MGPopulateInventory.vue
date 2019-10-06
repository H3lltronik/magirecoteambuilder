<template>
    <el-row class="h-100 pb-3" justify="space-between" type="flex">
        <el-col :span="12" :lg="12" :xl="12">

            <MGGrid :magicalGirls="magicalGirls"></MGGrid>

        </el-col>
        <el-col :span="10" :lg="10" :xl="8">
            <MGViewer></MGViewer>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

import Aside from '../components/Aside'
import MGViewer from '../components/MGViewer'
import MGGrid from '../components/MGGrid'

export default {
    components: {
        Aside,
        MGViewer,
        MGGrid,
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
            magicalGirls: 'getMagicalGirls',
        }),
    }
}
</script>


<style scoped lang="scss">

</style>
