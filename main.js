
$(document).ready(function() {

  var videoID = 'video_tag';
  var sourceID = 'video_source';
  var vid_array = ["tree.mp4","water.mp4"];



// var basic_array = [2,3];
//
// console.log(basic_array[0]);

console.log("vid array at index 0 = " + vid_array[0]) // DOES NOT EXIST

  var i = 0
  var new_vid = vid_array[i];

  $('#video_link').click(function(event) {


    $('#video_tag').get(0).pause();
    $('#'+sourceID).attr('src', new_vid);
    $('#'+videoID).get(0).load();
    i += 1;
    new_vid = vid_array[i];
    console.log(i)
    console.log(new_vid);



  });

  const Papa = require("papaparse");

const parseFile = () => new Promise((resolve) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSW4eF8jVfz435STbW_ofGgk5DWXtZZyxN1PEixwt3ah_1D3Hg1a2CREv3BbbZN23hsI9eJqqsRCuGR/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            resolve(results.data);
        }
    });
});

export async function fetchParsedData() {
    const parsedData = await parseFile();
    console.log(parsedData);
    return parsedData;
}

});

