import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter();


  imageDefault = './assets/images/descarga.png';


  constructor(){
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(){
    console.log('ngOnChanges', 'imgValue =>', this.img)
  }
  ngOnInit(){
    console.log('ngOnInit','imgValue =>', this.img)
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }
  ngOnDestroy() {
      console.log('ngOnDestroy','imgValue =>', this.img)
  }
  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo . . .');
    this.loaded.emit();
  }
}
