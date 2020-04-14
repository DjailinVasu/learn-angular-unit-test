import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: "app-counter",
  template: `Counter: {{counter}}`
})
export class CounterComponent {
  counter = 0

  @Output() counterEmitter = new EventEmitter<number>()

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    })
  }

  increment() {
    this.counter++
    this.counterEmitter.emit(this.counter);
  }

  decrement() {
    this.counter--
  }
}
