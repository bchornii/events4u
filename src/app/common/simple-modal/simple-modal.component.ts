import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jquery-service/jQuery.service';

@Component({
  selector: 'e4u-simple-modal',
  templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
  @Input() elementId: string;
  @Input() autoclose: string;
  @ViewChild('modalcontainer', { static: true }) elementRef: ElementRef;

  constructor(@Inject(JQ_TOKEN)
              private $: any) { }

  close(): void {
    if (this.autoclose.toLowerCase() === 'true') {
      this.$(this.elementRef.nativeElement).modal('hide');
    }
  }
}
