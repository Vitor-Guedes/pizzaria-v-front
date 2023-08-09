<template>
    <div v-if="show" class="alert" :class="'alert-'+type">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'FlashMessage',
    data () {
        return {
            show: false,
            message: '',
            type: ''
        }
    },

    methods: {
        addMessage(message, type) {
            this.message = message;
            this.type = type;
            this.show = !this.show;
        },

        reset() {
            this.message = '';
            this.type = '';
            this.show = !this.show;
        }
    }
}
</script>

<style>
    .alert {
        border-radius: 0;
        text-align: center;
        margin-bottom: 0;
        font-weight: bold;
        padding: 20px;
        font-size: 18px;
    }

    .alert.alert-success {
        border: 2px solid #155724;
    }

    .alert.alert-warning {
        border: 2px solid #856404;
    }

    .alert p {
        margin-bottom: 0;
    }
</style>