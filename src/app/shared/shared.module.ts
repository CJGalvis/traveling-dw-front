import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MySplitPipe } from "./pipes/my-split.pipe";
import { MyHoverDirective } from "./directives/my-hover.directive";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MySplitPipe,
    MyHoverDirective,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    MySplitPipe,
    MyHoverDirective
  ],
})
export class SharedModule {}
