import axios from 'axios'

export default class ApiHandler {
   BASE_URL = "https://api.themoviedb.org/3";
   API_KEY  = "2b22702bf9dc45986d22dd21add08ec7";
   API_LANGUAGE = "pt-br"
   handler

   constructor(){
      this.handler = axios.create({
         baseURL: this.BASE_URL,
         params: {
            'api_key': this.API_KEY,
            'language': this.API_LANGUAGE,
            'adult': false,
            'region': 'BR'
         }
      })
   }
   
   async getRequest(typeContent, id, endpoint){
      return await this.handler.get(`/${typeContent}/${id}${endpoint}`)
   }

   use() {
      return this.handler
   }

}