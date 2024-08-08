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
   
   const getActualSleepHours = () => {
     return total =
     getSleepHours('monday')+
     getSleepHours('tuesday')+
     getSleepHours('wednesday')+
     getSleepHours('thursday')+
     getSleepHours('friday')+
     getSleepHours('saturday')+
     getSleepHours('sunday')
   }
   
   getActualSleepHours()
   console.log(getActualSleepHours())
   
   const getIdealSleepHours = () =>{
     const idealHours = 7
     return idealHours * 7
   }
   getIdealSleepHours()
   console.log(getIdealSleepHours());
   
   const calculateSleepDebt = () => {
   
     const actualSleepHours = getActualSleepHours()
     const idealSleepHours = getIdealSleepHours()
   
     if(actualSleepHours === idealSleepHours){
       console.log( 'youve got the perfect amount of sleep.');
   
     }else if(actualSleepHours > idealSleepHours){
       console.log('youve slept,' + (actualSleepHours - idealSleepHours) + 'hour(s) of sleep than needed this week');
   
     }else if(actualSleepHours < idealSleepHours) {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
     }
   }
   calculateSleepDebt();
   
   
   
   
   
   