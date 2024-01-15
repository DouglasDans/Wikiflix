import axios from 'axios'

export default class ApiHandler {
   private readonly BASE_URL_PATH : string = "https://api.themoviedb.org/3";
   private readonly API_KEY : string = "2b22702bf9dc45986d22dd21add08ec7";
   private readonly API_LANGUAGE : string = "pt_BR"

   private handler : Object = {}

   constructor(){
      this.initializeApi()
   }

   private initializeApi() {
      this.handler = axios.create({
         baseURL: this.BASE_URL_PATH,
         params: {
            'api_key': this.API_KEY,
            'language': this.API_LANGUAGE,
            'adult': false,
            'region': 'BR'
        }
     })
   }

   use() {
      return this.handler
   }
}