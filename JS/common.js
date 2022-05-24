$(document).ready(function(){
     getReportData();
})

function toggleMenu(){
     let toggle = document.querySelector('.toggle');
     let nav = document.querySelector('.navigation');
     let main = document.querySelector('.main');
     toggle.classList.toggle('active');
     nav.classList.toggle('active');
     main.classList.toggle('active');
 }

 includeHTML();


// DYNAMIC TABPILLS

var tabpills = [];
var htmlstring = "";
        function getInputFieldsData(){
          

          getReportData();
          tabpills = [];
          htmlstring = "" ;

          $(".tagpills").html(htmlstring) 

          //console.log("initial"+htmlstring);

           $('div input').each(function(){
                tabpills.push($(this).val());              
           })
          
           
           $('div select').each(function(){
                tabpills.push($(this).val());
                     
           })  
          console.log(tabpills)

           htmlstring = tabpills.map((item) => {
               if(item != "" && item!= null && item != "Select"){
                    return `<span class="items">${item}</span>`
               }              
            }) 
     

            $(".tagpills").html(htmlstring)   
         
        }

        function myFunction() {
          
        }

// DATE PICKER FOR NAVIGATIOn
$(document).ready(function(){


        $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#reportrange').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });


     })
// DATE PICKER FOR NAVIGATION ENDS


// CITY COUNTRY DATA

$(function(){
    
               fetch('JS/state-city.json')
                    .then(res => res.json())
                    .then(data =>{
                        $("#state").html( data.map((item) => {
                              return `
                                   <option value=${item.state} >${item.state}</option>
                              `;
                         }));
                         
                 })
  

})

var x = [];
var y = " ";
$(document).ready(function(){
     $("#state").on('change', function(){
          var stateselected = $("#state option:selected").val();
          fetch("JS/state-city.json")
          .then(res => res.json())
          .then(data => {
              
               data.findIndex(function(item) {
                    $("#city").html(" ");
                    if( item.state == stateselected){
                         x = [];
                         x.push(item.cities);
                        
                    }
                    if( stateselected == "Bihar"){
                         $("#blockInputFeild").css({"display": "block"})
                    }
                  });
                  console.log(x[0]);
                  
                  y =x[0];

                  jQuery.each(y, function(i,val) {
                    $("#city").append(`<option value="${val}">${val}</option>`);
                  });
          
          })
          // console.log(stateselected)
     })
     
})

//CITY COUNTRY DATA ENDS HERE



// POPULATION YEAR OF BIRTH AND YEAR OF MATRICULATIOn

document.getElementById('drpdownBtn').addEventListener('click', (e) => {
     document.getElementById('myDropdown').classList.toggle('show');
})


$(function(){
     fetch("JS/year.json")
     .then(res => res.json())
     .then(data => {
          $("#yearOfBirth").html(data.map((item) => {
               return `
                    <option>${item.year}</option>
               `;
          }))
     })
})

$(function(){
     fetch("JS/year.json")
     .then(res => res.json())
     .then(data => {
          $("#yearOfmatri").html(data.map((item) => {
               return `
                    <option>${item.year}</option>
               `;
          }))
     })
})

//ENDS HERE


//DATE PICKER FOR REGISTER USER CHART
$(document).ready(function(){


     $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#registered__User__DatePicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#registered__User__DatePicker').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });

})

//REGITER USER DATE PICKER ENDS HERE


//COURSE PIPELINE CHART DATE PICKER

$(document).ready(function(){


     $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#course__Pipeline span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#course__Pipeline').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });

})


// Monthly Active User Date Picker here
$(document).ready(function(){


     $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#monthly__User__Active__DatePicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#monthly__User__Active__DatePicker').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });

})
// Monthly User date picker ends here

// Quiz Date Picker
$(document).ready(function(){


     $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#quiz__DatePicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#quiz__DatePicker').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });

})
//Quiz Date Picker Ends

//Cards Together Date Picker

$(document).ready(function(){


     $(function() {

          var start = moment().subtract(29, 'days');
          var end = moment();
          
          function cb(start, end) {
              $('#Cards__DatePicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          }
          
          $('#Cards__DatePicker').daterangepicker({
              startDate: start,
              endDate: end,
              ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
          }, cb);
          
          cb(start, end);
          
          });

})

//Cards DatePicker Ends

