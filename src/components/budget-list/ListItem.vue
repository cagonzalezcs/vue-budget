<template lang="html">
  <div class="list-item">
    <ListItemName />
    <ListItemBudgeted />
    <ListItemSpent />
    <ListItemEdit />
  </div>
</template>

<script>
import ListItemName from './list-item/ListItemName'
import ListItemBudgeted from './list-item/ListItemBudgeted'
import ListItemSpent from './list-item/ListItemSpent'
import ListItemEdit from './list-item/ListItemEdit'

export default {
  name: 'ListItem',
  components: {
    ListItemName,
    ListItemBudgeted,
    ListItemSpent,
    ListItemEdit
  }
}
</script>

<style lang="css" scoped>
</style>
