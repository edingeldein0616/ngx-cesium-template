import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { AngularCesiumModule } from 'angular-cesium';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, AngularCesiumModule, MapRoutingModule],
  declarations: [MapComponent],
})
export class MapModule {}
