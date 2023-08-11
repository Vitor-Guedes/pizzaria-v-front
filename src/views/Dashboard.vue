<template>
    <slot name="block-header" />

    <div id="main-banner">
        <h1>Faça seu Pedido</h1>
    </div>

    <div id="main-container">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Gerenciar pedidos</h2>
                </div>
                <div class="col-md-12 table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><span>Pedido</span> #</th>
                                <th scope="col">Borda</th>
                                <th scope="col">Massa</th>
                                <th scope="col">Sabores</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order.id">
                                <td>{{ order.id }}</td>
                                <td>{{ order.border }}</td>
                                <td>{{ order.pasta }}</td>
                                <td>{{ order.flavor.join(', ') }}</td>
                                <td>
                                    <select id="status" v-model="order.status" class="form-control form-control-sm status-input">
                                        <option value="pedding">Aguardando</option>
                                        <option value="process">Processando</option>
                                        <option value="delivery">Entrega</option>
                                    </select>
                                </td>
                                <td>
                                    <button class="delete-btn">
                                        <i class="fas fa-times"></i >
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <slot name="block-footer" />
</template>

<script>
// import { defineAsyncComponent } from 'vue';
// import {  getComponent } from '@/config/routes';

export default {
    name: 'DashBoard',

    data () {
        return {
            orders: [
                {
                    id: 1,
                    border: 'Cheddar',
                    pasta: 'Massa comum',
                    flavor: ['4 Queijos', 'Lombinho'],
                    status: 'delivery'
                },
                {
                    id: 2,
                    border: 'Catupiry',
                    pasta: 'Massa Integral',
                    flavor: ['Frango com Catupiry', 'Lombinho'],
                    status: 'pedding'
                },
                {
                    id: 3,
                    border: 'Cheddar',
                    pasta: 'Massa temperada',
                    flavor: ['Calabresa', 'Lombinho', 'Frango com Catupiry'],
                    status: 'process'
                },
                {
                    id: 4,
                    border: 'Catupiry',
                    pasta: 'Massa comum',
                    flavor: ['Frango com Catupiry'],
                    status: 'delivery'
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

    .delete-btn {
        border: none;
        background-color: transparent;
    }

    .delete-btn {
        color: #721c24;
        font-size: 20px;
    }

    .update-form {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 425px) {
        .table-container {
            padding: 0;
        }

        .table td, .table th {
            padding: .5rem;
        }

        th span {
            display: none;
        }

        .table thead th:nth-child(5),
        .table thead th:nth-child(6) {
            display: none;
        }

        .table tbody td:nth-child(5),
        .table tbody td:nth-child(6) {
            display: none;
        }
    }
</style>