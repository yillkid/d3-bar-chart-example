HOST_URL_TPLANET_DAEMON = "https://beta-tplanet-backend.townway.com.tw"

function convert_project_weight_to_render_json(obj_project_weight) {
  var obj_result = [];

  for (const key in obj_project_weight){
    var obj_weight = {}
    obj_weight.letter = `${key}`;
    obj_weight.frequency = `${obj_project_weight[key]}`;
    obj_result.push(obj_weight);
  }

  return obj_result;
}

function getProjectWeight(list_task_UUIDs) {
  var projectWeight = {};
  var dataJSON = {};
  dataJSON.uuid = list_task_UUIDs[0];

  $.ajax({
    url: HOST_URL_TPLANET_DAEMON + "/projects/weight",
    type: "POST",
    async: false,
    crossDomain: true,
    data: dataJSON,
    success: function(returnData) {
       const obj = JSON.parse(returnData);
       projectWeight = obj;
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });

  return projectWeight;
}
