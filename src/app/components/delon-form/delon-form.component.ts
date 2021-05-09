import { Component, OnInit } from '@angular/core';
import {SFButton, SFSchema} from '@delon/form';

@Component({
  selector: 'app-delon-form',
  templateUrl: './delon-form.component.html',
  styleUrls: ['./delon-form.component.scss']
})
export class DelonFormComponent implements OnInit {

  schema: SFSchema; // 默认强制为object
  sfBtn: SFButton;
  ui;
  formData;
  layout;
  constructor() { }

  ngOnInit() {
    this.schema = {
      properties: {
        name: {
          type: 'string',
          title: '名字',
          maxLength: 20,
          ui: {
            errors: {
              required: '请填名字'
            },
            spanLabel: 5,
            spanControl: 24,
            placeholder: '名字',
            widget: 'hz-custom-form'
          }
        },
        password: {
          type: 'string',
          title: '密码',
          maxLength: 20,
          ui: {
            type: 'password',
            validator: (value) => {
              return !value ? [{keyword: 'required', message: '必填密码'}] : [];
            },
            // widget: 'hz-custom-form',
            spanLabelFixed: 100,
            spanControl: 10,
            placeholder: '密码'
          }
        },
        email: {
          type: 'string',
          title: '邮箱',
          maxLength: 20,
          ui: {
            placeholder: '邮箱',
            validator: (value, formProperty, form) => {
              return !value ? [{keyword: 'required', message: '必填邮箱'}] : [];
            },
            // widget: 'hz-custom-form',
            spanLabelFixed: 100,
            spanControl: 10
          }
        }
      },
      required: ['name', 'password', 'email']
    };

    this.sfBtn = {
      submit: '提交',
      // submit_type: 'primary',
      reset: '重置',
      reset_type: 'danger',
      render: {
        widget: 'button',
        class: 'delon-btn',
      }
    };

    // sf全局的ui
    this.ui = {
      spanLabel: 4,
      spanControl: 20
    };

    // 默认值
    this.formData = {
      name: '邹兴鸿',
      password: '123',
      email: '987565275@qq.com'
    };
    this.layout = 'horizontal';
  }

  handleData(data) {
    console.log(data);
    this.formData = data;
    console.log(this.formData);
  }

  handleReset() {
    this.formData = {};
  }

}
