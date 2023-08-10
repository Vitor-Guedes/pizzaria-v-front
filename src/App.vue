<template>
    <div>
        <block-header />

        <block-alert ref="flashMessage"/>
        
        <component :is="currentView" />
        
        <block-footer />
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { currentTemplate } from './config/routes.js';

    export default {
        data () {
            return {
                currentPath: window.location.hash
            }
        },

        computed: {
            currentView() {
                return defineAsyncComponent(() => {
                    return import('@/' + currentTemplate());
                })
            }
        },

        mounted () {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            });
        }
    }
</script>