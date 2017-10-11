  <template>
    <div class="container">
      <div class="card">
    <div v-for="campaign in campaigns.data">
      <img class="card-image-top">
      <div class="card-body">
        <h4 class="card-title">{{campaign.title}}</h4>
        <p class="card-text">{{campaign.description}}</p>
      </div>
    </div>
    </div>
    </div>
  </template>

  <script>
    import axios from 'axios'

    export default {
      data () {
        return {
          campaigns: []
        }
      },
      created () {
        axios.get('https://doesangueapi.herokuapp.com/v1/campaigns')
        .then(response => {
          this.campaigns = response.data
        })
        .catch(e => {
          this.campaigns.push(e)
        })
      }
    }
  </script>
