import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit{
  currentProductId: number;
  selectedFile: File;
  imagePath:string= "wwwroot\Images";

  constructor(
    private productImageService:ProductImageService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentProductId = params["productId"]
    })
  }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const filedata = new FormData();
    filedata.append('file', this.selectedFile, this.selectedFile.name);
    filedata.append("productId", this.currentProductId.toString());
    filedata.append("imagePath", this.imagePath);

    this.productImageService.add(filedata).subscribe(response=>{
      this.toastrService.success(response.message)
    }, errorResponse=>{
      this.toastrService.error(errorResponse.error.message)
    })
  }
}
