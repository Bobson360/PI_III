<template>
  <div id="app">
    <div>
      <label for="product-name">Nome do Produto
        <input type="text" id="product-name"  v-model="product.name" placeholder="Exemplo: celular" />
      </label>
       <label for="product-brand">Marca
        <input type="text" id="product-brand" v-model="product.brand"  placeholder="Exemplo: Apple" />
      </label>
       <label for="product-value">Valor
        <input type="text" id="product-value" v-model="product.value"  placeholder="200" />
      </label>
       <label for="product-date">Data
        <input type="date" id="product-date"  v-model="product.date" placeholder="00/00/0000" />
      </label>
      <button @click="addProduct()">Salvar</button>
    </div>
  
<div>
  <ul>
    <li v-for="product of products" v-bind:key="product['.key']">
       {{ product.product.name }}
       <div>
         <button @click="removeProduct(product['.key'])">Deletar</button>
       </div>
     </li>
   </ul>
</div>
  </div>
  
</template>

<script>

  import { productRef } from './database/firebase'

  export default {
    data() {
      return {
        product: {}
      }
    },
    removeProduct(product) {
  productRef.child(product).remove()
},
    firebase: {
  products:  productRef 
},
    methods: {

      addProduct() {
        productRef.push({
          product: this.product
        })
        	
this.product = {}
      }
    }
    
  }
</script>

<style>

</style>
