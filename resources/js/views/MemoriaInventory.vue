<template>
    <div>
        <MemGrid :memorias="inventory.memorias"></MemGrid>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Aside from '../components/Aside'
import MemGrid from '../components/MemGrid'

export default {
    components: {
        Aside,
        MemGrid,
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
