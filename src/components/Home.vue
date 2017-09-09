<template>
    <div id="home">
        <div id="tagline">
            <img src="images/logo.png" height="90">
            <p>
                Мы делаем продающие презентации <br>
                для компаний «под ключ»
            </p>
            <br>
            <router-link to="/company-info">
                <div id = "orderButton">
                    Заказать структуру
                </div>
            </router-link>
        </div>
         <div style="position:fixed;bottom:5%;right:50%;">
            <router-link to="/company-info">
                <img src="images/arrow.png">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleScroll (event) {
              this.$router.push('/company-info');
            }
        },

        created () {
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
        
        // methods: {
        //     openSite() {
        //         this.$router.push('/company-info');
        //     }
        // },

        // created() {
        //     this.$on('scroll', this.openSite());
        // }
    }
</script>
