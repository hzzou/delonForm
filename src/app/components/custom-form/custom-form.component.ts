import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {ControlUIWidget, SFCustomWidgetSchema} from '@delon/form';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent extends ControlUIWidget<SFCustomWidgetSchema> implements OnInit {
  static readonly KEY = 'hz-custom-form';

  // 继承自widget
  id;
  schema;
  ui;
  showError = false;
  error;

  ngOnInit() {
    console.log(this.ui);
  }

}
