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
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="MGLevel" :min="1" :max="maxLvl"></el-input-number>
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
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="MGSlots" :min="1" :max="4"></el-input-number>
                                </el-row>
                            </el-col>
                        </el-row>

                        <el-row class="" justify="center">
                            <el-col :span="24">
                                <el-row type="flex">
                                    <div class="mx-auto">Rarity</div>
                                </el-row>
                            </el-col>
                            <el-col :span="24">
                                <el-row type="flex">
                                    <el-input-number :disabled="defaultValues.default" class="mx-auto" size="medium" v-model="MGRarity" :min="1" :max="5"></el-input-number>
                                </el-row>
                            </el-col>
                        </el-row>

                        <el-row justify="center">
                            <el-row type="flex">
                                <el-button class="mx-auto" type="primary" @click="addMagicalGirl ()" :disabled="defaultValues.default">
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
            MGLevel: 1,
            MGSlots: 1,
            MGRarity: 1,
        }
    },
    methods: {
        addMagicalGirl () {
            let newMagicalGirl = this.magicalGirl

            newMagicalGirl.level = this.memLevel
            newMagicalGirl.slots = this.memSlots

            this.$store.commit('addMagicalGirl', newMagicalGirl)

            this.$notify({
                title: 'Success',
                message: `A magical girls were added yo your inventory!`,
                type: 'success'
            });
        }
    },
    computed: {
        ...mapGetters({
            magicalGirl: 'getSelectedMagicalGirl',
        }),
        defaultValues () {
            if (!this.magicalGirl) {
                return {
                    name: 'Madoka Senpai ~nwn~',
                    image: 'https://magiarecord.gamepress.gg/sites/magiarecord/files/2019-06/salt.png',
                    default: true,
                }
            } else {
                this.MGRarity = this.magicalGirl.rarity
                return this.magicalGirl
            }
        },
        maxLvl () {
            let maxLvl = 50
            switch (this.MGRarity) {
                case 1: {
                    maxLvl = 40
                    break;
                }
                case 2: {
                    maxLvl = 50
                    break;
                }
                case 3: {
                    maxLvl = 60
                    break;
                }
                case 4: {
                    maxLvl = 80
                    break;
                }
                case 5: {
                    maxLvl = 100
                    break;
                }
            }
            return maxLvl
        }
    }
}
</script>
