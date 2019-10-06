<template>
    <div class="primary-box_outer-border">
        <div class="primary-box_middle-border">

            <div class="primary-box_inner_title primary-title">Magical Girls</div>
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
                                <div class="d-flex align-items-center mx-auto">
                                    <!-- <span class="primary-box_inner_toolbar_label">Type</span> -->
                                    <el-radio-group size="mini" v-model="MGType">
                                        <el-radio-button label="Light"></el-radio-button>
                                        <el-radio-button label="Dark"></el-radio-button>
                                        <el-radio-button label="Aqua"></el-radio-button>
                                        <el-radio-button label="Flame"></el-radio-button>
                                        <el-radio-button label="Forest"></el-radio-button>
                                        <el-radio-button label="Void"></el-radio-button>
                                        <el-radio-button label="All"></el-radio-button>
                                    </el-radio-group>
                                </div>
                            </el-row>
                        </el-col>

                        <el-col class="my-3" :span="24">
                            <el-row type="flex" justify="space-between" align="center">
                                <el-checkbox v-model="notInInventory" disabled>Not in Inventory</el-checkbox>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>

                <el-row :gutter="10" justify="start" class="d-flex flex-wrap justify-content-center">
                    <div class="text-center mg-item-mosaic mr-1" v-for="(magicalGirl, index) in filteredMagicalGirls" :key="index">
                        <img @click="setSelectedMagicalGirl (magicalGirl)" class="mg-item-mosaic_image img-fluid" :src="magicalGirl.thumbnail" alt="">
                        <p @click="setSelectedMagicalGirl (magicalGirl)">{{magicalGirl.name}}</p>
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        magicalGirls: {
            type: Array,
        }
    },
    data () {
        return {
            filtersVisible: false,
            name: '',
            rarity: 0,
            MGType: 'All',
            notInInventory: false,
        }
    },
    methods: {
        setSelectedMagicalGirl (magicalGirl) {
            this.$store.commit ('setSelectedMagicalGirl', magicalGirl)
        }
    },
    computed: {
        filteredMagicalGirls () {
            let magicalGirls = this.magicalGirls
            let result = magicalGirls
            // Filtrar por nombre
            if (this.name.length > 0) {
                result = result.filter((magicalGirl) =>{
                    return magicalGirl.name.match(this.name)
                })
            }

            if (this.rarity > 0) {
                result = result.filter((magicalGirl) =>{
                    return magicalGirl.rarity == this.rarity
                })
            }

            if (this.MGType != 'All') {
                result = result.filter((magicalGirl) =>{
                    return magicalGirl.type.toLowerCase().match(this.MGType.toLowerCase())
                })
            }

            return result
        }
    }
}
</script>
