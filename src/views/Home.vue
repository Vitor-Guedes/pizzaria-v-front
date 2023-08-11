<template>
    <slot name="block-header"></slot>

    <div id="main-banner">
        <h1>Faça seu Pedido</h1>
    </div>

    <div id="main-container">
        <div class="container">
            <div class="row">
                <div class="col-md-12" id="pizza-form">
                    <h2>Mounte a pizza como desejar:</h2>

                    <div class="form-group">
                        <label for="border">Border: </label>
                        <select id="border" class="form-control" v-model="border">
                            <option value="">Selecione a borda</option>
                            <option v-for="border in borders" :key="border.id">{{ border.label }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="pasta">Massa: </label>
                        <select id="pasta" class="form-control" v-model="pasta">
                            <option value="">Selecione a Massa</option>
                            <option v-for="pasta in pastas" :key="pasta.id">{{ pasta.label }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="flavor">Sabores: (Máximo 3)</label>
                        <select multiple id="flavor" class="form-control" v-model="flavor">
                            <option v-for="flavor in flavors" :key="flavor.id">{{ flavor.label }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <input @click="sendOrder" type="button" value="Fazer Pedido" class="btn btn-primary">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <slot name="block-footer"></slot>
</template>

<script>
// import { defineAsyncComponent } from 'vue';
// import { currentComponents, currentPath } from '@/config/routes';

export default {
    name: 'HomeView',

    methods: {
        sendOrder() {
            console.log(this.$refs);
        },
    },

    data () {
        return {
            border: '',
                pasta: '',
                flavor: '',
                borders: [
                    {
                        id: 1,
                        label: 'Cheddar'
                    },
                    {
                        id: 2,
                        label: 'Catupiry'
                    }
                ],
                pastas: [
                    {
                        id: 1,
                        label: 'Massa Comum'
                    },
                    {
                        id: 2,
                        label: 'Massa Integral'
                    },
                    {
                        id: 3,
                        label: 'Massa Temperada'
                    }
                ],
                flavors: [
                    {
                        id: 1,
                        label: '4 Queijos'
                    },
                    {
                        id: 1,
                        label: 'Frango com Catupiry'
                    },
                    {
                        id: 1,
                        label: 'Calabresa'
                    },
                    {
                        id: 1,
                        label: 'Lombinho'
                    },
                ]
        }
    }
}
</script>

<style>
    #main-banner {
        background-image: url('~@/../public/images/pizza-banner.jpg');
        height: 300px;
        background-position: center;
        background-size: cover;
        width: 100%;
        background-position-y: -300px;
        display: flex;
        align-items: center;
        justify-content: center;   
    }

    #main-banner h1 {
        color: #fff;
        background-color: #000;
        text-align: center;
        padding: 30px;
        text-transform: uppercase;
        width: 550px;
        font-size: 50px;
    }

    #main-container {
        margin-bottom: 100px;
        padding: 50px 0;
        text-align: center;
        min-height: 50%;
    }

    #main-container h2 {
        margin-bottom: 30px;
    }

    .row {
        margin: 0;
    }

    #pizza-form {
        max-width: 550px;
        margin: 0 auto;
        text-align: center;
    }

    #pizza-form label {
        font-weight: bold;
    }

    .btn.btn-primary {
        background-color: #000;
        border-color: #000;
    }

    @media (max-width: 425px) {
        #main-banner {
            background-position-y: 0;
        }

        #main-banner h1 {
            padding: 10px;
        }

        #main-container {
            margin-bottom: 0;
        }

        #main-container .container {
            padding: 10px;
        }

        .form-group .btn.btn-primary {
            width: 100%;
            height: 50px;
            margin-top: 15px;
            text-transform: uppercase;
        }
    }
</style>