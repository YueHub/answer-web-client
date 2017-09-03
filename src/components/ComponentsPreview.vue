<template>
  <div>
    <div>
      <search-bar> </search-bar>
    </div>
    <br><br><br><br><br>
    <div>
      <result-table></result-table>
    </div>

  </div>
</template>

<script>
import searchBar from '@/components/common/searchBar/SearchBar'

import resultTable from '@/components/common/resultTable/ResultTable'

export default {
  components: {
    'search-bar': searchBar,
    'result-table': resultTable
  }
}
</script>

<style>

</style>

