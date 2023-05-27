const submit=document.getElementById("submitbutton")
const cityname=document.getElementById("cityname");
const outcity=document.getElementById("outcity");
const real=document.getElementById("real");
const temp_status=document.getElementById("temp_status");
const data_hide=document.querySelector('.middle_layer')
const day=document.getElementById("day");
const today_date=document.getElementById("today_date");

var currentDate = new Date();


// var year = currentDate.getFullYear(); // 4-digit year (e.g., 2023)
var month = currentDate.getMonth() ; // Month (0-11, so we add 1 to get the actual month)
var dayd = currentDate.getDate(); // Day of the month (1-31)
var weekday = currentDate.getDay(); // Day of the week (0-6, where 0 represents Sunday)
const arrmonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weeke=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
today_date.innerText=`${dayd},${arrmonth[month]}`;
day.innerText=`${weeke[weekday]}`;
// console.log(year); // Output: 2023
// console.log(month); // Output: 5
// console.log(day); // Output: 26
// console.log(weekday); // Output: 4 (Thursday)



const getinfo=async (event)=>{
    event.preventDefault();
    let city=cityname.value;
    if(city ==="")
    {
        outcity.innerText="Please give input first";
        data_hide.classList.add("data_hide");

    }
    else{
        try {
            outcity.innerText="Get output below"; 
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5e34fa9c5ac003d2538230f428b4c19&units=metric`;
            const response= await fetch(url);
            if(response.status==404)throw new error("")
            else{
                const data= await response.json()
                const arrdata=[data]; 
                console.log(arrdata);
                outcity.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
                real.innerText=`${arrdata[0].main.temp}`;
                let status=`${arrdata[0].weather[0].main}`;
                if(status=="Clear")
                {
                    temp_status.innerHTML="<i class='fa-regular fa-sun fa-beat-fade'></i>"
                }
                else if(status=="Clouds")
                {
                    
                    temp_status.innerHTML="<i class='fa-solid fa-cloud fa-beat-fade'></i>"
                    // temp_status.innerHTML="<i class='fa fa-cloud'  aria-hidden='true'></i>"

                }
                else if(status=="Rain")
                {
                temp_status.innerHTML="<i class='fa-sharp fa-solid fa-cloud-rain fa-beat-fade'></i>"
                }
                else if(status=="Haze"){
                    temp_status.innerHTML="<i class='fa-solid fa-smoke fa-beat-fade'></i>"
                } 
                data_hide.classList.remove("data_hide");

  
            }
        } catch (error) {
            outcity.innerText="Plese write correct name";
            data_hide.classList.add("data_hide");
        }
    }
}

submit.addEventListener("click",getinfo);

