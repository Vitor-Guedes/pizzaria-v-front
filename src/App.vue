<template>
    <div>
        <component :is="currentView">
            <template v-for="(block, index) in componentsView(currentPath)" :key="index" v-slot:[block]>
                <component :is="block" />
            </template>
        </component>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { getAllComponents, currentTemplate, getComponentByRouter } from './config/routes.js';

    export default {
        components: getAllComponents(),
        
        data () {
            return {
                currentPath: window.location.hash,
                componentsView: function (path) {
                    return getComponentByRouter(path) || [];
                }
            }
        },

        computed: {
            currentView () {
                const template = currentTemplate(this.currentPath);
                return defineAsyncComponent(() => {
                    return import('@/' + template);
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