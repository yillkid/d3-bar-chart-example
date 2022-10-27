import {draw} from "./render";

function render_project_barchart(id_dom, size, list_uuid_task) {
  var weight_project = getProjectWeight(list_uuid_task);
  var input_for_render = convert_project_weight_to_render_json(weight_project);

  draw(input_for_render);
}

function init() {
  render_project_barchart("project_barchart", [200, 200], ["02234810"]);
}