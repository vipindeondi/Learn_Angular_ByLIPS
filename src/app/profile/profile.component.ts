import { Component, OnInit } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profieInfo: any = '';
  addressInfo = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    pin: ''
  };
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe((data: any) => {
      if (data.status === 'success') {
        this.profieInfo = data.result;
        this.addressInfo = data.result.addressInfo == null ? this.addressInfo : data.result.addressInfo;
      }
    });
  }

  updateProfile() {
    let mobile = this.profieInfo.mobile;
    let profileInfo = {
      mobile,
      addressInfo: this.addressInfo 
    };
    this.profileService.updateProfile(profileInfo).subscribe((data: any) => {
      if (data.status === 'success') {
        this.profieInfo = data.result;
      }
    });
  }

}
