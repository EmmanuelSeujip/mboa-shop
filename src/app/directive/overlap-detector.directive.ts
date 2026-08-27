import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appOverlapDetector]',
  standalone: true,
})
export class OverlapDetectorDirective implements OnInit, OnDestroy {
  @Input({ required: true }) headerId!: string;
  @Input({ required: true }) heroId!: string;
  @Input() overlapClass = 'is-overlapping';
  @Input() threshold = 0; // px de tolérance de chevauchement minimal

  private renderer = inject(Renderer2);
  private el = inject(ElementRef<HTMLElement>);

  private elA: HTMLElement | null = null;
  private elB: HTMLElement | null = null;
  private rafId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private isOverlapping = false;
  private running = true;

  ngOnInit(): void {
    this.elA = document.getElementById(this.headerId);
    this.elB = document.getElementById(this.heroId);

    if (!this.elA || !this.elB) {
      console.warn(
        `[OverlapDetectorDirective] Élément(s) introuvable(s): ${this.headerId}, ${this.heroId}`
      );
      return;
    }

    // Recalcule au moindre changement de taille/layout
    this.resizeObserver = new ResizeObserver(() => this.checkOverlap());
    this.resizeObserver.observe(this.elA);
    this.resizeObserver.observe(this.elB);

    // Boucle en rAF pour capter les animations/transitions CSS
    this.loop();
  }

  ngOnDestroy(): void {
    this.running = false;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.resizeObserver?.disconnect();
  }

  private loop = (): void => {
    if (!this.running) return;
    this.checkOverlap();
    this.rafId = requestAnimationFrame(this.loop);
  };

  private checkOverlap(): void {
    if (!this.elA || !this.elB) return;

    const rectA = this.elA.getBoundingClientRect();
    const rectB = this.elB.getBoundingClientRect();

    const overlaps =
      rectA.left < rectB.right - this.threshold &&
      rectA.right > rectB.left + this.threshold &&
      rectA.top < rectB.bottom - this.threshold &&
      rectA.bottom > rectB.top + this.threshold;

    if (overlaps !== this.isOverlapping) {
      this.isOverlapping = overlaps;
      if (overlaps) {
        this.renderer.addClass(this.el.nativeElement, this.overlapClass);
      } else {
        this.renderer.removeClass(this.el.nativeElement, this.overlapClass);
      }
    }
  }
}