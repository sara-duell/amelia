
$(document).ready(function() {

  var videoID = 'video_tag';
  var sourceID = 'video_source';
  var vid_array = ["tree.mp4","water.mp4"];



// var basic_array = [1,2];
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
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js'></script>
    <script src="vanillajs-table.js"></script>
    <script type="text/javascript">

    console.log( "ready!" );

const moviesUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-https://docs.google.com/spreadsheets/d/e/2PACX-1vSW4eF8jVfz435STbW_ofGgk5DWXtZZyxN1PEixwt3ah_1D3Hg1a2CREv3BbbZN23hsI9eJqqsRCuGR/pubhtml-QoDWk/pub?gid=0&single=true&output=csvhttps://docs.google.com/spreadsheets/d/e/2PACX-1vSW4eF8jVfz435STbW_ofGgk5DWXtZZyxN1PEixwt3ah_1D3Hg1a2CREv3BbbZN23hsI9eJqqsRCuGR/pubhtml";

const showsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtKbv_S8Fdo3HLhm64Tc94WZ6FuqtzqePIjuejNFJxKkUvAE8JF8V2KgKoz1n5jQUDfL8A3F-QoDWk/pub?gid=1364847678&single=true&output=csv";

const app = new Vue({
  el: "#app",
  data: function () {
    return {
      movies: [],
      shows: []
    };
  },
  created: function () {
    this.fetchMovies();
    this.fetchShows();
  },
  methods: {
    fetchMovies() {
      
      Papa.parse(moviesUrl, {
        download: true,
        header: true,
        complete: (results) => this.movies = results.data
      });
    },
    fetchShows() {
      const _this = this;
      Papa.parse(showsUrl, {
        download: true,
        header: true,
        complete: function(results) { _this.shows = results.data; }
      });
    }
  }
});
