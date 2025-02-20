import { ChangeDetectorRef, Component } from '@angular/core';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { GestionProductosService } from '../../services/gestion-productos.service';
import { maxProduct } from '../../interfaces/maxProduct';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  imports: [NgxBootstrapSliderModule],
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent {
  value: number = 10;  // Initial value of the slider
  enabled: boolean = true;  // Control whether the slider is enabled or disabled
  min: number = 0; //valor minimo slider 
  max: number = 100;  //valor maximo slider

  constructor(private servicioProductos: GestionProductosService, private cdr: ChangeDetectorRef){}

  ngOnInit() {
     this.getMaximo();
  }
  

  getMaximo(){
    
    this.servicioProductos.getProductosByPriceMax().subscribe((data: maxProduct) => {
      this.max = data.precioMaximo;

        // Forzar detección de cambios para actualizar la vista
         this.cdr.detectChanges();
      }); 
  }

  // This function will be triggered on the slider value change
  change() {
    console.log('Slider value changed to:', this.value);
  }
}


