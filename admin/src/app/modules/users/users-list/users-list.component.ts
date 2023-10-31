import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUsersComponent } from '../components/add-users/add-users.component';
import { DeleteUserComponent } from '../components/delete-user/delete-user.component';
import { EditUsersComponent } from '../components/edit-users/edit-users.component';
import { UsersService } from '../_services/users.service';
import { Column } from 'src/app/components/table/_models/column.interface';
import { Config } from 'src/app/components/table/_models/config.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isLoading$: any;
  isLoading = false;

  totalPages = 1;
  currentPage = 1;
  
  state:any = '';
  search:any = '';

  users:any = [];

  @ViewChild('nameHeader', { static: true }) nameHeaderTemplate!: TemplateRef<any>;
  @ViewChild('statusBody', { static: true }) statusBodyTemplate!: TemplateRef<any>;


  
  columns: Column[] = []
  config!: Config;
  data: any[] = [
    {
      id: '1',
      name: 'jose',
      email: 'jose@gmail.com',
      status: 'active'
    },
    {
      id: '2',
      name: 'jose',
      email: 'jose@gmail.com',
      status: 'no active'
    },
    {
      id: '3',
      name: 'jose',
      email: 'jose@gmail.com',
      status: 'active'
    },
  ]


  constructor(
    public fb:FormBuilder,
    public _userService: UsersService,
    public modelService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._userService.isLoading$;
    this.allUsers();

    this.columns = [
      {
        headerTemplate: this.nameHeaderTemplate,
        field: 'name',
      },
      {
        headerName: 'Email',
        field: 'email',
      },
      {
        headerName: 'status',
        // bodyTemplate: this.statusBodyTemplate,
        field: 'status',
      },
    ]

    this.config.grouping = this._userService.grouping;
    this.config.sorting = this._userService.sorting;
  }

  allUsers(page=1){
    this._userService.allUsers(page,this.state,this.search).subscribe((resp:any) => {
      console.log(resp);
      this.users = resp.users.data;
      this.totalPages = resp.total;
      this.currentPage = page;
    });
  }

  reset(){
    this.state = '';
    this.search = '';
    this.allUsers();
  }
  addUser(){
    const modalRef = this.modelService.open(AddUsersComponent, {centered : true, size: 'md'});
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.usersE.subscribe((resp:any) => {
      console.log(resp);
      resp.state = 1;
      this.users.unshift(resp);
    })
  }

  editUser(user: any){
    const modalRef = this.modelService.open(EditUsersComponent, {centered : true, size: 'md'});
    modalRef.componentInstance.user_selected = user;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.usersE.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.users.findIndex((user: any) => user.id == resp.id);
      this.users[INDEX] = resp;
    })
  }

  delete(user: any){
    const modalRef = this.modelService.open(DeleteUserComponent, {centered : true, size: 'md'});
    modalRef.componentInstance.user_selected = user;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.usersE.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.users.findIndex((user: any) => user.id == resp.id);
      this.users.splice(INDEX,1);
    })
  }


  loadPage(index: number){
    this.allUsers(index);
  }
}
