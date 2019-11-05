import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';
import { UserService } from 'src/app/@shared/services/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: any;
  search;
  searchUser: FormGroup;
  addNew = false;
  pageOfItems: Array<any>;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
    this.searchUser = new FormGroup({
      searchBy: new FormControl(''),
    });
  }

  onSearch(value) {
    this.userService.getUserByName(value).subscribe((res) => {
      console.log(res);
    });
  }

  onAddNew(newUser) {
    const id = this.users[(this.users.length) - 1].id + 1;
    newUser.id = id;
    this.users.push(newUser);
  }

  onDeleteUser(user: User) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userService.deleteUser(user.id).subscribe(null, err => {
      alert('Can not delete this user');
      console.log(err);
    });
  }
}
