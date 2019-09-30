<template>
    <div class="primary-box_outer-border">
        <div class="primary-box_middle-border">

            <div class="primary-box_inner_title primary-title">Memoria</div>
            <div class="primary-box_inner_controls primary-title">
                <el-button type="text" size="mini" @click="filtersVisible = !filtersVisible">
                    Filters
                </el-button>
            </div>

            <div class="primary-box_inner_content primary-scrollbar">
                <div class="primary-box_inner_toolbar" v-if="filtersVisible">
                    <el-row class="flex-wrap" type="flex" justify="space-between">
                        <el-col :span="11">
                            <el-input v-model="name" size="mini" placeholder="By Name" :clearable="true">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-col>

                        <el-col :span="11">
                            <span class="primary-box_inner_toolbar_label">By Rarity</span>
                            <el-input-number v-model="rarity" size="mini" controls-position="right" :min="0" :max="4"></el-input-number>
                        </el-col>

                        <el-col class="my-3" :span="24">
                            <el-row type="flex" justify="space-between" align="center">
                                <div class="d-flex align-items-center">
                                    <!-- <span class="primary-box_inner_toolbar_label">Type</span> -->
                                    <el-radio-group size="mini" v-model="memType">
                                        <el-radio-button label="Pasive"></el-radio-button>
                                        <el-radio-button label="Active"></el-radio-button>
                                        <el-radio-button label="Both"></el-radio-button>
                                    </el-radio-group>
                                </div>

                                <el-checkbox v-model="isPersonal">Is Personal</el-checkbox>
                                <el-checkbox v-model="notInInventory" disabled>Not in Inventory</el-checkbox>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>

                <el-row :gutter="10" justify="start">
                    <el-col class="text-center item-mosaic" :span="6" :lg="4" v-for="(memoria, index) in filteredMemorias" :key="index">
                        <img @click="setSelectedMemoria (memoria)" class="img-fluid w-100" :src="memoria.thumbnail" alt="">
                        <p @click="setSelectedMemoria (memoria)">{{memoria.name}}</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            filtersVisible: false,
            name: '',
            rarity: 0,
            memType: 'Both',
            isPersonal: false,
            notInInventory: false,
        }
    },
    methods: {
        setSelectedMemoria (memoria) {
            this.$store.commit ('setSelectedMemoria', memoria)
        }
    },
    computed: {
        ...mapGetters([
            'getMemorias',
        ]),
        filteredMemorias () {
            let memorias = this.getMemorias
            let result = memorias
            // Filtrar por nombre
            if (this.name.length > 0) {
                result = result.filter((memoria) =>{
                    return memoria.name.match(this.name)
                })
            }

            if (this.rarity > 0) {
                result = result.filter((memoria) =>{
                    return memoria.rarity == this.rarity
                })
            }

            if (this.memType != 'Both') {
                result = result.filter((memoria) =>{
                    return memoria.type.toLowerCase().match(this.memType.toLowerCase())
                })
            }

            if (this.isPersonal) {
                result = result.filter((memoria) =>{
                    return memoria.personal
                })
            }

            // if (this.isPersonal) {
            //     result = result.filter((memoria) =>{
            //         return memoria.personal
            //     })
            // }

            return result
        }
    }
}
</script>
