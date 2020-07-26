import { Component, VERSION, ViewChild, HostListener, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { HostDirective } from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  @ViewChild(HostDirective, {static: true})
  childRef: HostDirective
  components = [HelloComponent, HiComponent]
  constructor( public factoryRes: ComponentFactoryResolver){

  }
  loadComponent(id){
    console.log(this.childRef);
    this.childRef.viewRef.clear();
    const resolvedFactory = this.factoryRes.resolveComponentFactory(this.components[id]);
    const compRef = this.childRef.viewRef.createComponent(resolvedFactory);
    compRef.instance.name = id == 0 ? 'Hari' : 'Krishnan';
  }
}
