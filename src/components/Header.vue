<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <a href="/#" class="navbar-brand">
                <img src="/images/pizza.svg" alt="Pizaria do V" id="brand-logo">
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="/#" class="nav-link">Peça sua pizza</a>
                    </li>
                    <li class="nav-item">
                        <a href="#/dashboard" class="nav-link">Pedidos</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    #brand-logo {
        width: 50px;
    }

    .navbar.navbar-expand-lg {
        background-color: #000;
        font-weight: bold;
    }

    .navbar.navbar-expand-lg a {
        color: #fff;
    }
</style>