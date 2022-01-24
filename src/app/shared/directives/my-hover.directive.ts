import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appMyHover]",
})
export class MyHoverDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, "cursor", "pointer");
  }

  @HostListener("mouseover")
  onMouseOver() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "background-color",
      "#5f9ea03d"
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      "box-shadow",
      "0px 12px 20px -15px #000000cc"
    );
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "background-color",
      "#fff"
    );
    this.renderer.removeStyle(
      this.el.nativeElement,
      "box-shadow",
    );
  }
}
