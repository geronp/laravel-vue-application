<template>
    <div>
        <h2>View Products</h2>
        <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="true"
                 :height="100"
                 :width="100"/>
        <div class="overflow-auto">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price }}</td>                    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
    data() {
        return {
            products: [],
            isLoading: false
        }
    },
    components: {
        Loading
    },
    async created() {
        try {
            this.isLoading = true;
            const response = await axios.get('/api/products');
            this.products = response.data.products ? response.data.products : [];
            this.isLoading = false;

            if(this.$route.name == "export") {
                this.downloadCSVData();
            }
        } catch (error) {
            // Log any errors
        }
    },
    watch: {
        '$route.path': function() {
            if(this.$route.name == "export") {
                this.downloadCSVData();
            }
        }
    },
    methods: {
        downloadCSVData: function() {
            let csv = 'ID,Title,Description,Price\n';
            this.products.forEach((row) => {
                csv += '"'+row['id']+'","'+row['title']+'","'+row['description']+'","'+row['price']+'"';
                csv += "\n";
            });
        
            const anchor = document.createElement('a');
            anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
            anchor.target = '_blank';
            anchor.download = 'products.csv';
            anchor.click();
            anchor.remove();

            // redirect back to products
            this.$router.push({name: 'products'});
        }
    }    
}
</script>