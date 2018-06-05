const { createApp } = require('./app');

// client-specific bootstrapping logic...

const { app } = createApp();

// this assumes App.vue template root element has `id="app"`
app.$mount('#app');
