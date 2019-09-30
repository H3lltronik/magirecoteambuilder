<template>
    <div class="primary-box_outer-border">
        <div class="primary-box_middle-border">

            <div class="primary-box_inner_title primary-title">Inspector</div>
            <div class="primary-box_inner_content primary-scrollbar no-scroll">
                <el-row class="h-50" justify="center">
                    <el-col class="h-100" :lg="24" :xl="24">
                        <el-row class="h-100 flex-column" type="flex">
                            <p class="mx-auto" style="height: 10%">{{defaultValues.name}}</p>
                            <img class="img-fluid mx-auto" :src="defaultValues.image" alt="" style="height: 90%">
                        </el-row>
                    </el-col>

                </el-row>
                <el-row class="h-50" >
                    <el-col class="h-100 pt-3 d-flex flex-column justify-content-between" :lg="24" :xl="24">
                        <el-row justify="center">
                            <el-col :span="24">
                                <el-row type="flex">
                                    <div class="mx-auto">Level</div>
                                </el-row>
                            </el-col>
                            <el-col :span="24">
                                <el-row type="flex">
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="memLevel" :min="1" :max="defaultValues.maxLvl"></el-input-number>
                                </el-row>
                            </el-col>
                        </el-row>

                        <el-row class="" justify="center">
                            <el-col :span="24">
                                <el-row type="flex">
                                    <div class="mx-auto">Slots</div>
                                </el-row>
                            </el-col>
                            <el-col :span="24">
                                <el-row type="flex">
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="memSlots" :min="1" :max="4"></el-input-number>
                                </el-row>
                            </el-col>
                        </el-row>

                        <el-row class="" justify="center">
                            <el-col :span="24">
                                <el-row type="flex">
                                    <div class="mx-auto">Copies</div>
                                </el-row>
                            </el-col>
                            <el-col :span="24">
                                <el-row type="flex">
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="memCopies" :min="1"></el-input-number>
                                </el-row>
                            </el-col>
                        </el-row>

                        <el-row justify="center">
                            <el-row type="flex">
                                <el-button class="mx-auto" type="primary" @click="addMemoria ()" :disabled="defaultValues.default">
                                    Add
                                </el-button>
                            </el-row>
                        </el-row>
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
            memLevel: 1,
            memSlots: 1,
            memCopies: 1,
        }
    },
    methods: {
        addMemoria () {
            let newMemoria = this.getSelectedMemoria

            for (let i = 0; i < this.memCopies; i++) {
                newMemoria.level = this.memLevel
                newMemoria.slots = this.memSlots

                this.$store.commit('addMemoria', newMemoria)
            }
        }
    },
    computed: {
        ...mapGetters([
            'getSelectedMemoria'
        ]),
        defaultValues () {
            if (!this.getSelectedMemoria) {
                return {
                    name: 'Madoka Senpai ~nwn~',
                    image: 'https://magiarecord.gamepress.gg/sites/magiarecord/files/2019-06/salt.png',
                    default: true,
                }
            } else {
                return this.getSelectedMemoria
            }
        }
    }
}
</script>
