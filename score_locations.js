(function ($) {
 Drupal.behaviors.score_Locations = {
    attach: function (context, settings) {
        $('.field-add-more-submit', context).once('score_Locations', function () {
          
          //*************************************************************************************
          // Populate Start and End, Single Date with the same values as the first chosen values 
          var datepopup = $(".date-clear");
          
          // First Chosen Values
          var firstStartDate = datepopup[0].value;
          var firstEndDate   = datepopup[1].value;
          var firstSingleDate = datepopup[2].value;

          // Newest Added Values
          var newestStartDate = $(".date-clear").eq(-3).attr('value');
          var newestEndDate   = $(".date-clear").eq(-2).attr('value');
          var newestSingleDate = $(".date-clear").eq(-1).attr('value');

          // Assign first chosen values to newest added values
          var newestStartDate = $(".date-clear").eq(-3).attr('value', firstStartDate);
          var newestEndDate = $(".date-clear").eq(-2).attr('value', firstEndDate);
          var newestSingleDate = $(".date-clear").eq(-1).attr('value', firstSingleDate);
          //*************************************************************************************
          // Enter Time Group
          var timepopup = $(".form-text");
          var firstOpenTime = $(".form-text")[4].value;
          var firstCloseTime = $(".form-text")[5].value
          
          var open = $(".field-name-field-open-time input.text-full:text").attr('value');
          var close = $(".field-name-field-close-time input.text-full:text").attr('value');
          
          var lastopen = $(".field-name-field-open-time input.text-full:text").last().attr('value',open);
          var lastclose = $(".field-name-field-close-time input.text-full:text").last().attr('value',close);
          //*************************************************************************************
          // Locations - Automatically populate locations based on previous selections
          // Get ids of all checked checkboxes in the first instance
          //console.log($('.group-locations').find('input[type=checkbox]').prop('defaultValue'));
          var locationsArray = [];
          $('.group-locations').eq(0).find('input[type=checkbox]:checked').each(function() {
            locationsArray.push($(this).prop('defaultValue')); 
          });
          locationsArray.forEach(printLocations);
          locationsArray.forEach(checkLocations);

          function printLocations(elem)
          {
            //console.log(elem);
          }

          function checkLocations(elem)
          {
            $('.group-locations').find('input[type=checkbox]').each(function() {
              if($(this).prop('defaultValue') == elem)
              {
                $(this).attr('checked','checked');
              }
            });
          }
          //*************************************************************************************
          // Days of Week
          //*************************************************************************************

          var daysofweekArray = [];
          $('.group-days-of-week').eq(0).find('input[type=checkbox]:checked').each(function() {
            daysofweekArray.push($(this).prop('defaultValue')); 
          });
          daysofweekArray.forEach(printDaysofWeek);
          daysofweekArray.forEach(checkDaysofWeek);

          function printDaysofWeek(elem)
          {
            //console.log(elem);
          }

          function checkDaysofWeek(elem)
          {
            $('.group-days-of-week').find('input[type=checkbox]').each(function() {
              if($(this).prop('defaultValue') == elem)
              {
                $(this).attr('checked','checked');
              }
            });
          }
         
  });
    }
};

}(jQuery));