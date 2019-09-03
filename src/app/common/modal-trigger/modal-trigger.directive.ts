import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../jquery-service/jQuery.service';

@Directive({
  selector: '[e4uModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('e4uModalTrigger') modalId: string;

  constructor(@Inject(JQ_TOKEN)
              private $: any,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
