<template>
    <div>
        <div class="container">
            <div :class="rowClasses">
                <div class="col-xs-12 col-sm-9">
                    <sidebar-button></sidebar-button>
                    <banner></banner>             
                    <main-content></main-content>
                </div>
                <sidebar-right></sidebar-right>
            </div>
        </div>
        <custom-footer></custom-footer>
    </div>

</template>

<script>

import banner from './banner.vue';
import customFooter from './custom-footer.vue';
import mainContent from './main-content.vue';
import sidebarButton from './sidebar-button.vue';
import sidebarRight from './sidebar-right.vue';

export default {
    data() {
        return {
            rowClasses: "row row-offcanvas row-offcanvas-right"
        }
    }, 
    components: {
        banner: banner,
        mainContent: mainContent,
        sidebarRight: sidebarRight,
        sidebarButton: sidebarButton,
        customFooter: customFooter   
    }
}
</script>

<style>

</style>
