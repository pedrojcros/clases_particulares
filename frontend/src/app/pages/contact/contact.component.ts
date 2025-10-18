import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [ReactiveFormsModule], // 👈 quita NgIf (no lo usas si empleas @if)
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Primero inyecta…
  private readonly fb   = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  // …luego usa fb
  readonly sending  = signal(false);
  readonly sentOk   = signal(false);
  readonly sentError = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    nombre:   ['', [Validators.required, Validators.minLength(2)]],
    email:    ['', [Validators.required, Validators.email]],
    telefono: [''],
    mensaje:  ['', [Validators.required, Validators.minLength(10)]],
    acepta:   [false, [Validators.requiredTrue]]
  });

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.sending()) return;

    this.sending.set(true);
    this.sentOk.set(false);
    this.sentError.set(null);

    this.http.post('/api/contacto', this.form.getRawValue()).subscribe({
      next: () => { this.sentOk.set(true); this.form.reset(); },
      error: () => { this.sentError.set('No se pudo enviar. Inténtalo más tarde.'); },
      complete: () => this.sending.set(false)
    });
  }
}
