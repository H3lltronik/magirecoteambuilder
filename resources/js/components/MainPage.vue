<template>
    <div class="row justify-content-center viewport-height">
        <div class="col-12 col-md-8 col-xxl-6 d-flex">
            <div class="main-card align-self-center flex-grow-1">
                <div class="main-logo_container mx-md-3 my-md-2 p-md-3">
                    <img class="main-logo img-fluid" src="imgs/magiarecord_logo-chido.png" alt="">

                    <div class="d-flex w-100 justify-content-around">
                        <button class="main-button">IMPORT</button>
                        <button class="main-button" @click="goToPage('createInvetory')">CREATE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        methods: {
            goToPage (page) {
                this.$router.push('/' + page);
            }
        }
    }
</script>
