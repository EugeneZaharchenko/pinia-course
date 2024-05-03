<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from '@/stores/CartStore'
// import { after } from "lodash";
// import { onErrorCaptured } from "vue";
const productStore = useProductStore();
const cartStore = useCartStore();
cartStore.$onAction((
  {
    name, store, args, after, onError
  }
)=> {
  if(name === 'addItems') {
    after(()=>{
      console.log(args[0])
    });
    onError((err) => {
      console.log(`Awful error: ${err}`)
    })
  }
}
)
productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
