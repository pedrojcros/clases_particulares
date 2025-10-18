import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';

interface Pack {
  id: string;
  nombre: string;
  horas: number;
  precioHora: number;       // precio final €/h
  precioHoraAntes?: number; // para calcular ahorro vs pvp estándar
}

@Component({
  standalone: true,
  selector: 'app-packs',
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss'
})
export class PacksComponent {
  // Datos de ejemplo (ajústalos a tu realidad)
  readonly packs = signal<Pack[]>([
    { id: 'basico',    nombre: 'Básico',    horas: 1, precioHora: 20,  precioHoraAntes: 20 },
    { id: 'estandar',  nombre: 'Estándar',  horas: 2, precioHora: 17.6, precioHoraAntes: 20 }, // ~12% dto
    { id: 'intensivo', nombre: 'Intensivo', horas: 4, precioHora: 16,  precioHoraAntes: 20 }  // 20% dto
  ]);

  total = (p: Pack) => p.horas * p.precioHora;

  ahorroPct = (p: Pack) =>
    p.precioHoraAntes && p.precioHoraAntes > 0
      ? (1 - p.precioHora / p.precioHoraAntes) * 100
      : 0;

  // Total mínimo/máximo por curiosidad (no imprescindible)
  readonly minTotal = computed(() => Math.min(...this.packs().map(this.total)));
  readonly maxTotal = computed(() => Math.max(...this.packs().map(this.total)));
}
