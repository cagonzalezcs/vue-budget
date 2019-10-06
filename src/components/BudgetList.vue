<template lang="html">
  <div class="budget-list">
    <ListHeader />
    <ListItem />
  </div>
</template>

<script>
import ListHeader from './budget-list/ListHeader.vue'
import ListItem from './budget-list/ListItem.vue'

export default {
  name: 'BudgetList',
  components: {
    ListHeader,
    ListItem
  }
}
</script>

<style lang="scss" scoped>
.budget-list {
  width: 100%;
  margin-top: 30px;
  background-color: #f9f9f9;
  -webkit-box-shadow: 0 2px 10px rgba(0,0,0,.2);
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  padding: 10px;
}
</style>
