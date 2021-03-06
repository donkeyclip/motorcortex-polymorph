import { Effect } from "@donkeyclip/motorcortex";
import { interpolate } from "polymorph-js";

export default class MyEffect extends Effect {
  onGetContext() {
    this.interpolator = interpolate(
      [this.initialValue, this.animAttributes.d],
      {
        addPoints: this.attrs.addPoints || 0,
        origin: {
          x: this.attrs.originX || 0,
          y: this.attrs.originY || 0,
        },
        precision: this.attrs.precision || "fill",
      }
    );
  }

  getScratchValue() {
    return this.element.getAttribute("d");
  }

  onProgress(ms) {
    this.element.setAttribute("d", this.interpolator(this.getFraction(ms)));
  }
}
