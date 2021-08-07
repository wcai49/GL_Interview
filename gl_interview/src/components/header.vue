<template>
    <div class="gli-header no-select">
        <img class="gli-header-logo" src="/gl_logo.png" />
        <div class="gli-header-menu-list">
            <div v-for="(item, index) of menus" :key="index" @click="selectMenu(index)" class="header-menu-titles" :class="currentSelect == index ? 'selected' : 'default'">{{item.title}}</div>
        </div>
        <div class="gli-header-langBtn">
            En
        </div>
    </div>
</template>


<script>

export default ({
    name: "header",
    data(){
        return{
            currentSelect: 0,
            menus: [
                {
                    title: 'Index',
                    path: '/',
                },
                {
                    title: 'iLearn',
                    path: '/iLearnPage',
                },
                {
                    title: 'Styles',
                    path: '/StylesPage',
                },
                {
                    title: 'Algorithms',
                    path: '/AlgorithmsPage',
                }
            ]
        } 
    },
    methods:{
        selectMenu(index){
            if(this.currentSelect == index)
                return;
            this.currentSelect = index;
        }
    }
})
</script>
