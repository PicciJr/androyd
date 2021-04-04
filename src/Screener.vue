<template>
  <div class="h-full">
    <vs-button class="mb-8" color="#2F855A" @click="getNewStocks"
      >Comenzar búsqueda</vs-button
    >
    <vs-table v-if="!$apollo.loading">
      <template #thead>
        <vs-tr>
          <vs-th>
            Stock
          </vs-th>
          <vs-th>
            Nombre
          </vs-th>
          <vs-th>
            Industria
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in screenerResults"
          :data="tr"
          class="hover:text-gray-600"
        >
          <vs-td>
            {{ tr.tickerSymbol }}
          </vs-td>
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.industry }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <a-spinner-loader v-else></a-spinner-loader>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ASpinnerLoader from '@/components/atoms/ASpinnerLoader'

export default {
  name: 'Screener',
  components: {
    ASpinnerLoader,
  },
  data() {
    return {
      screenerResults: null,
      skipQuery: true,
      isLoadingData: false,
    }
  },
  apollo: {
    screenerResults: {
      query: gql`
        query {
          screenerResults {
            tickerSymbol
            name
            industry
          }
        }
      `,
      skip() {
        return this.skipQuery
      },
    },
  },

  methods: {
    async getNewStocks() {
      this.isLoadingData = true
      try {
        await this.$apollo.queries.screenerResults.refresh()
      } catch (err) {
        console.log('error get screener results', err)
      }
      this.skipQuery = !this.skipQuery
    },
  },
}
</script>

<style>
.vs-table__thead .vs-table__th {
  background-color: rgb(114, 189, 151) !important;
}
</style>
