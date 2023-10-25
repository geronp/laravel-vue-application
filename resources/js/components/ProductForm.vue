<template>
    <div>
        <h2>Add Product</h2>
        <Loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="true"
                 :height="100"
                 :width="100"/>
        <div class="alert alert-success" v-if="dataSaved">
            Product added successfully.
        </div>
        <div class="alert alert-danger" v-if="dataError">
            Problem saving the product, please try again.
        </div>
        <form id="addProduct" @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="title" class="form-label">Title:</label>
                <input class="form-control" type="text" id="title" v-model="product.title" required />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea class="form-control" id="description" v-model="product.description" required></textarea>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price:</label>
                <input class="form-control" type="number" id="price" v-model="product.price" required />
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
    data() {
        return {
            product: {
                title: '',
                description: '',
                price: 0
            },
            dataSaved: false,
            dataError: false,
            isLoading: false
        }
    },
    components: {
        Loading
    },
    methods: {
        async submitForm() {
            try {
                this.isLoading = true;
                await axios.post(import.meta.env.VITE_API_URL + '/products/add', this.product)
                .then((response) => {
                    this.resetFormData();
                    this.dataSaved = true;
                    this.isLoading = false;
                });                
            } catch (error) {
                this.dataError = true;
            }
        },
        resetFormData() {
            this.product = {
                title: '',
                description: '',
                price: 0
            };
        }
    }
}
</script>