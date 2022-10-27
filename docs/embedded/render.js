import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import notebook from  "https://api.observablehq.com/d/d3e0f3933b2d6038.js?v=3";

export function draw(input_for_render) {
  const runtime = new Runtime();
  const main = runtime.module(notebook, name => {
    if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-b9eea16e"));
    
    return ["udpdate","trigger"].includes(name);
  });
  main.redefine("alphabet", input_for_render);
}