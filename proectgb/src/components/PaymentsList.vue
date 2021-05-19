<template>
<div class="table">
    <tr>
        <th class="strTable"> № п/п </th>
        <th class="strTable"> Дата </th>
        <th class="strTable"> Категория </th>
        <th class="strTable"> Цена </th>
      </tr>
    <div v-for="(item,index) in items.slice(listN, listK) " :key="index">
      <table id="myTable">
        <tr>
          <td class="strTable">{{ index+listN+1 }}</td>
          <td class="strTable">{{ item.date }}</td>
          <td class="strTable">{{ item.category }}</td>
           <td class="strTable">{{ item.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    items: Array,
    listN: Number,
    listK: Number
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">

</style>
