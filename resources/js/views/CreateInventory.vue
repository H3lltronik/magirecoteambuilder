<template>
    <el-container class="viewport-height">
        <el-aside class="aside_container" width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-main class="">
                <el-row class="h-100 pb-3" justify="space-between" type="flex">
                    <el-col :span="12" :lg="12" :xl="12">

                        <MemGrid></MemGrid>

                        <!-- <el-dialog custom-class="custom-el-dialog primary-box_outer-border" :show-close="false"
                        :visible.sync="dialogFormVisible">

                                <div class="primary-box_middle-border">

                                    <div class="primary-box_inner_title primary-title">Filters</div>

                                    <div class="primary-box_inner_controls primary-title">
                                        <el-button type="text" icon="el-icon-close" size="mini" @click="dialogFormVisible = false"></el-button>
                                    </div>

                                    <div class="primary-box_inner_content primary-scrollbar">
                                        <el-row>
                                            <el-input placeholder="Name">
                                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                            </el-input>
                                        </el-row>
                                    </div>
                                </div>

                        </el-dialog> -->

                    </el-col>
                    <el-col :span="10" :lg="10" :xl="8">
                        <MemViewer></MemViewer>
                    </el-col>
                </el-row>
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
