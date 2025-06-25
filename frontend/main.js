const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
        { id: 1, name: 'Bắp nướng', price: 30000, image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Bắp xào', price: 25000, image: 'https://via.placeholder.com/100' }
      ],
      shops: [
        { name: 'GrabFood', link: '#' },
        { name: 'ShopeeFood', link: '#' },
        { name: 'BeFood', link: '#' }
      ],
      selected: null
    }
  },
  methods: {
    selectItem(item) {
      this.selected = item;
    }
  }
}).mount('#app');
