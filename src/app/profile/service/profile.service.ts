import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }

  getProfile(){
    return this.httpClient.post('/api/v1/user/getProfile','');
  }
  updateProfile(profile: any){
    return this.httpClient.put('/api/v1/user/updateProfile',profile);
  }
}
