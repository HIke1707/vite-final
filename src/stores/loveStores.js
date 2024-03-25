import { defineStore } from 'pinia';

export const useLoveStore = defineStore('loveStore', {
  state: () => ({
    loveProducts: []
  }),
  actions: {
    toggleLove (product) {
      const index = this.loveProducts.findIndex(x => x === product.id);
      // 如果存在則移除
      if (index !== -1) {
        this.loveProducts.splice(index, 1);
      } else {
        this.loveProducts.push(product.id);
      }
    }
  }
});
