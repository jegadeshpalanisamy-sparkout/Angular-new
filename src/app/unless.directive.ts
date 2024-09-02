import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {

  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) { }

  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

}
