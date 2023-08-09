<template>
    <div>
        <Header />
        
        <Alert ref="flashMessage"/>

        <component :is="currentView" />

        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Alert from './components/Alert.vue';

    import Home from './views/Home.vue';
    import Dashboard from './views/Dashboard.vue';

    const routes = {
        "/": Home,
        "/dashboard": Dashboard
    };

    export default {
        components: {
            Header,
            Footer,
            Alert
        },

        data() {
            return {
                currentPath: window.location.hash
            }
        },

        computed: {
            currentView() {
                console.log(this.currentPath.slice(1));
                return routes[this.currentPath.slice(1) || '/'];
            }
        },
        
        mounted () {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            });
        }
    }
</script>