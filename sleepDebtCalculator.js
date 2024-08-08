const getSleepHours = day => {
    switch(day){
       case 'monday':
         return 7
         break;
       case 'tuesday':
         return 8
         break;
       case 'wednesday':
         return 7
         break;
       case 'thursday':
         return 8
         break;
       case 'friday':
         return 5
         break;
       case 'saturday':
         return 9
         break;
       case 'sunday':
         return 8
         break;
       default:
       return "error"
    }
   }
   getSleepHours()
   
   const getActualSleepHours = () => 
    7 + 8 + 7 + 8 + 5 + 9 + 8
   
   console.log(getActualSleepHours())
   
   const getIdealSleepHours = (idealHours) => 
     idealHours * 7;

   console.log(getIdealSleepHours(9));
   
   const calculateSleepDebt = () => {
   
     const actualSleepHours = getActualSleepHours()
     const idealSleepHours = getIdealSleepHours(10)
   
     if(actualSleepHours === idealSleepHours){
       console.log( 'youve got the perfect amount of sleep.');
   
     }else if(actualSleepHours > idealSleepHours){
       console.log('youve slept,' + (actualSleepHours - idealSleepHours) + 'hour(s) of sleep than needed this week');
   
     }else if(actualSleepHours < idealSleepHours) {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
     }
   }
   calculateSleepDebt();
   
   
   
   
   
   