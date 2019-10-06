<template lang="html">
  <div class="list-header">
    <div class="list-heading" v-for="heading in headings" :key="heading">
      <span>{{ heading }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  data () {
    return {
      headings: [
        'Item',
        'Budgeted Amount',
        'Spent This Month',
        'Edit'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list-header {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  .list-heading {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;

    &:nth-child(1) {
      text-align: left;
      width: 40%;
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 25%;
    }
    &:nth-child(4) {
      width: 10%;
    }
  }
}
</style>
