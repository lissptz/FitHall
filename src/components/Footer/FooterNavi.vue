<template>
  <div class="col">
    <div class="footer_navi_wrap">
      <h3 class="footer_title">Навигация</h3>
      <ul class="footer_list footer_list_capitalize">
        <li v-for="({ name, path }, i) in footerMenu" :key="i">
          <router-link :to="path" class="footer_link_two">{{
            name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    footerMenu: {
      type: Array,
      required: true,
    },
  },
};
</script>
