// import {BarChart} from "d3e0f3933b2d6038"
// import {howto, altplot} from "@d3/example-components"

// import {BarChart} from "https://cdn.skypack.dev/d3-selection@3";
const div = d3.selectAll("div");

console.log("OK")
alert("OK")

alphabet = [{"letter": "A", "frequency": 0.08167}, {"letter": "B", "frequency": 0.00167}, {"letter": "C", "frequency": 0.18167}]

chart = BarChart(alphabet, {
  x: d => d.letter,
  y: d => d.frequency,
  yFormat: "%",
  yLabel: "↑ Frequency",
  width,
  height: 500,
  color: "steelblue",
  duration: 750 // slow transition for demonstration
})

update = undefined
update = chart.update(d3.sort(alphabet, order))

