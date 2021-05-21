<template>
    <div class="container pt-3 pb-5">
        <b-row>
            <b-col md="3">
                <b-form-input v-model="filter" type="search" placeholder="Global Search" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>

              <b-table striped Fhover :items="items" :filter="filter" :per-page="perPage" :current-page ="currentPage" :fields="fields">

                    <template v-slot:cell(actions) ="data">
                        <b-button variant="danger" @click="deleteItems(data.item.id)">Delete</b-button>

                   </template>

              </b-table>

              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">

              </b-pagination>
            </b-col>
        </b-row>

    </div>
</template>

<script>

export default {
    props: [
        'items'
    ],
    data: () =>({
        //   fields: ['id','name','profile','actions'],
          fields: [{
              key:'id',
              sortable: true
          },
          {
              key:'name'
          },
          {
              key:'profile'
          },
          {
              key:'actions'
          }],
          filter: "",
          perPage: 2,
          currentPage: 1,
    }),
    computed: {
        rows() {
            return  this.items.length
        }
    },
    methods: {
        deleteItems(id) {
            const index = this.items.indexOf((x) => x.id === id)
            this.items.splice(index, 1);

        }
    }
    
}
</script>