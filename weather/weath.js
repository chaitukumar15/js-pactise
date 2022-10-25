


function cityy(){
    let o=document.getElementById("g1")
    o.style.visibility="visible"
    let val=document.getElementById("weath")
    let n="bf89bc2cde67abeceea98d4c23a10716";
    let c=val.value;
    let a=`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${n}`
    // console.log(a);
    fetch(a)
    .then((response) => response.json())
    .then((data) => 
     {
        console.log(data);
        let {name}=data
        let {humidity,temp}=data.main
        let {main}=data.weather[0]
        console.log(main);
        console.log(humidity);
        let temp1=temp
        let temp2=temp1-273.15
        console.log(temp2.toFixed(1));
      document.getElementById("cha").innerHTML=`city:&nbsp${name}`
      document.getElementById("cha1").innerHTML=`temperature:&nbsp${temp2.toFixed(2)} <sup>o</sup>c `;
      document.getElementById("cha2").innerHTML=`humidity:&nbsp${humidity}`;
      document.getElementById("cha3").innerHTML=`weather :&nbsp ${main}`;
       
    });
}