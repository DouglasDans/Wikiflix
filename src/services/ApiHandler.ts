import axios from 'axios'

export default class ApiHandler {
   private readonly BASE_URL : string = "https://api.themoviedb.org/3";
   private readonly API_KEY : string = "2b22702bf9dc45986d22dd21add08ec7";
   private readonly API_LANGUAGE : string = "pt-br"
   private handler : any

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
   
   async getRequest(typeContent : String, id: String, endpoint : String){
      return await this.handler.get(`/${typeContent}/${id}${endpoint}`)
   }

   use() {
      return this.handler
   }

}