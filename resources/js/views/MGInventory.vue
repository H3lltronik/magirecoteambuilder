<template>
    <div>
        <MGGrid :magicalGirls="inventory.magicalGirls"></MGGrid>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Aside from '../components/Aside'
import MGGrid from '../components/MGGrid'

export default {
    components: {
        Aside,
        MGGrid,
    },
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters({
            inventory: 'getInventory',
        }),
    }
}
</script>
