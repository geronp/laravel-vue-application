<template>
<div class="container">
    <header>
        <div class="px-3 py-2 bg-dark">
            <div class="container">
                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li class="bg-white m-2">
                        <router-link to="/" class="nav-link" style="text-decoration: none; color: black">Home</router-link>
                    </li>
                    <li class="bg-white m-2">
                        <router-link to="/products/add" class="nav-link" style="text-decoration: none; color: black;">Add Product</router-link>
                    </li>
                    <li class="bg-white m-2">
                        <router-link to="/products/" class="nav-link" style="text-decoration: none; color: black;">View Products</router-link>
                    </li>
                    <li class="bg-white m-2">
                        <router-link to="/products/export" class="nav-link" style="text-decoration: none; color: black;">Export Products</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <div class="card">
        <div class="card-body">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'App'
}
</script>