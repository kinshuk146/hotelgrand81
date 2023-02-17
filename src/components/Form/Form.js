import React from 'react';
import $ from 'jquery'; 
import moment from 'moment';


function Form() {
  $(function () {
    var bindDatePicker = function() {
     $(".date").datetimepicker({
         format:'YYYY-MM-DD',
       icons: {
         time: "fa fa-clock-o",
         date: "fa fa-calendar",
         up: "fa fa-arrow-up",
         down: "fa fa-arrow-down"
       }
     }).find('input:first').on("blur",function () {
       // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
       // update the format if it's yyyy-mm-dd
       var date = parseDate($(this).val());
 
       if (! isValidDate(date)) {
         //create date based on momentjs (we have that)
         date = moment().format('YYYY-MM-DD');
       }
 
       $(this).val(date);
     });
   }
    
    var isValidDate = function(value, format) {
     format = format || false;
     // lets parse the date to the best of our knowledge
     if (format) {
       value = parseDate(value);
     }
 
     var timestamp = Date.parse(value);
 
     return isNaN(timestamp) === false;
    }
    
    var parseDate = function(value) {
     var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
     if (m)
       value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);
 
     return value;
    }
    
    bindDatePicker();
  });


  return (
    <div>
      <div class="container">
  <div class="row">
  </div>
  <br />
    <div class="row">
        <div class='col-sm-3'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
  <div class="row">
  </div>
  <br />
    <div class="row">
        <div class='col-sm-3'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Form
