<template>
  <div id="app">
    <navbar></navbar>
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
import navbar from '../src/assets/components/navbar.vue';
import banner from '../src/assets/components/banner.vue';
import customFooter from '../src/assets/components/custom-footer.vue';
import mainContent from '../src/assets/components/main-content.vue';
import sidebarButton from '../src/assets/components/sidebar-button.vue';
import sidebarRight from '../src/assets/components/sidebar-right.vue';

export default {
  name: 'app',
  data () {
    return {
      rowClasses: "row row-offcanvas row-offcanvas-right",
    }
  },
  components: {
    navbar: navbar,
    banner: banner,
    mainContent: mainContent,
    sidebarRight: sidebarRight,
    sidebarButton: sidebarButton,
    customFooter: customFooter   
  }
}
</script>
