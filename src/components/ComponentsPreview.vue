<template>
  <div>
    <div>
      <search-bar> </search-bar>
    </div>
    <br/><br/><br/>
    <div>
      <result-table></result-table>
    </div>

    <br><br><br>
    <div>
      <result-tag></result-tag>
    </div>


  </div>
</template>

<script>
import searchBar from '@/components/common/searchBar/SearchBar'

import resultTable from '@/components/common/resultTable/ResultTable'

import resultTag from '@/components/common/tag/resultTag'


export default {
  components: {
    'search-bar': searchBar,
    'result-table': resultTable,
    'result-tag': resultTag
  }
}
</script>

<style>

</style>

