<template>
  <div id="app">
    <BudgetOverview />
    <BudgetList />
  </div>
</template>

<script>
import BudgetOverview from './components/BudgetOverview.vue'
import BudgetList from './components/BudgetList.vue'

export default {
  name: 'app',
  components: {
    BudgetOverview,
    BudgetList
  }
}
</script>

<style lang="scss">
#app {
  width: 1150px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
