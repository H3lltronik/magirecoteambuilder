<template>
    <el-container class="h-100" direction="vertical">
        <div class="aside_logo_container">
            <img class="aside_logo" src="imgs/magiarecord_logo-chido.png" alt="">
        </div>
        <el-col class="aside_body_container">

            <el-menu class="aside_body" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>Magical Girls Selector</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span>Memoria Selector</span>
            </el-menu-item>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Inventory</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">Memoria</el-menu-item>
                    <el-menu-item index="3-2">Magical Girls</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Export</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span>Share</span>
            </el-menu-item>
            </el-menu>

        </el-col>
    </el-container>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>
