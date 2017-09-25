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
      <tag></tag>
    </div>

    <br><br><br>
    <div>
      <knowledge-graph></knowledge-graph>
    </div>

  </div>
</template>

<script>
import searchBar from '@/components/common/searchBar/SearchBar'

import resultTable from '@/components/common/resultTable/ResultTable'

import tag from '@/components/common/tag/tag'

import knowledgeGraph from '@/components/common/graph/KnowledgeGraph'

export default {
  components: {
    'search-bar': searchBar,
    'result-table': resultTable,
    'tag': tag,
    'knowledge-graph': knowledgeGraph
  }
}
</script>

<style>

</style>

