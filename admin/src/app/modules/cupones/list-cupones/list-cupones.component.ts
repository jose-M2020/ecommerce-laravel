import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteNewCuponComponent } from '../delete-new-cupon/delete-new-cupon.component';
import { CuponesService } from '../_services/cupones.service';

@Component({
  selector: 'app-list-cupones',
  templateUrl: './list-cupones.component.html',
  styleUrls: ['./list-cupones.component.scss']
})
export class ListCuponesComponent implements OnInit {

  isLoading$:any;

  cupones:any = [];
  search:any = null; 
  constructor(
    public _cuponesServices:CuponesService,
    public _modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._cuponesServices.isLoadingSubject;
    this.allCupones();
  }
  allCupones(){
    this._cuponesServices.allCupones(1,this.search).subscribe((resp:any) => {
      console.log(resp);
      this.cupones = resp.cupones;
    })
  }
  reset(){
    this.search = null;
    this.allCupones();
  }
  getTypeDiscount(value: any){
    if(value == 1){
      return "PORCENTAJE"
    }else{
      return "MONEDA"
    }
  }
  getTypeCount(cupon: any){
    if(cupon.type_count == 1){ //ILIMITADO
      return "ILIMITADO";
    }else{ //LIMITADO
      return "LIMITADO (" + cupon.num_use + ")";
    }
  }

  getTypeCupon(cupon: any){
    if(cupon.products){
      return "PRODUCTOS";
    }else{ 
      return "CATEGORIAS";
    }
  }

  edit(cupon: any){

  }
  delete(cupon: any){
    const modalRef = this._modalService.open(DeleteNewCuponComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.cupon_selected = cupon;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.cuponE.subscribe((resp:any) => {
      let INDEX = this.cupones.findIndex((item: any) => item.id == resp.id);
      this.cupones.splice(INDEX,1);
    })
  }
}
