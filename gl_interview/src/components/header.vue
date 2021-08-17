<template>
  <div class="gli-header no-select">
    <img class="gli-header-logo" src="/gl_logo.png" />
    <div class="gli-header-menu-list">
      <router-link
        v-for="(item, index) of menus"
        :key="index"
        @click="selectMenu(index)"
        class="header-menu-titles"
        :class="currentSelect == index ? 'selected' : 'default'"
        :to="item.path"
      >
        {{ item.title }}
      </router-link>
    </div>
    <div class="gli-header-langBtn">En</div>
  </div>
</template>

<script>
export default {
  name: "vheader",
  data() {
    return {
      currentSelect: 0,
      menus: [
        {
          title: "Me Myself",
          path: "/",
        },
        // {
        //   title: "iLearn",
        //   path: "/iLearnPage",
        // },
        {
          title: "Styles",
          path: "/stylesPage",
        },
        {
          title: "Algorithms",
          path: "/algorithmsPage",
        },
      ],
    };
  },
  methods: {
    selectMenu(index) {
      if (this.currentSelect == index) return;
      this.currentSelect = index;
    },
  },
};
</script>
