declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(position: number): void;
    paused(value: boolean): void;
    scrollTo(target: gsap.TweenTarget, smooth?: boolean, position?: string): void;
  }
}

declare module "gsap/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
  }

  export class SplitText {
    constructor(
      target: gsap.DOMTarget | ArrayLike<gsap.DOMTarget>,
      vars?: SplitTextVars
    );

    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
