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
