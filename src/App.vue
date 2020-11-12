<template>
  <div> 
    <h1>
      Me falló pero no importa
    </h1>
    <hr>
    <ol>
      <li v-for="message in messages" :key="message._id">
        {{message.text}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {


    return {
      messages: []
    };
    
  },
  async mounted() {
        
    let response = await( await fetch(getApiUrl() + 'welcome')).json();
    this.messages = response;

  }
};

function getApiUrl() {
  let requestUrl = "";
  if (location.href.startsWith("http://localhost")) {
    requestUrl = "http://localhost:7071/api/";
  } else {
    requestUrl = "/api/";
  }
  return requestUrl;
}	

</script>
