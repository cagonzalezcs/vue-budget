<template lang="html">
  <div class="budget-overview">
    <MonthlyIncome />
    <MonthlySpent />
    <LeftToSpend />
  </div>
</template>

<script>
import MonthlyIncome from './budget-overview/MonthlyIncome.vue'
import MonthlySpent from './budget-overview/MonthlySpent.vue'
import LeftToSpend from './budget-overview/LeftToSpend.vue'

export default {
  name: 'BudgetOverview',
  components: {
    MonthlyIncome,
    MonthlySpent,
    LeftToSpend
  }

}
</script>

<style lang="scss" scoped>
.budget-overview {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px  10px rgba(0, 0, 0, 0.2);
  padding: 10px;

  .budget-overview-box {
    position: relative;
    text-align: center;
    width: 33.33%;

    &:last-child {
      &:after {
        display:  none;
      }
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 5%;
      right: 0;
      width: 1px;
      height: 90%;
      background-color: #ddd;
    }
  }
}
</style>
