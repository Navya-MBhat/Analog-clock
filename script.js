let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function display_time() {
    let date = new Date();
    //getting hour, minutes and seconds from Date()
    let hh =  date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let h_rotation = 30*hh + mm/2 ;
    let m_rotation = 6*mm ; 
    let s_rotation = 6*ss ;

    hr.style.transform = `rotate(${h_rotation}deg)`;
    min.style.transform = `rotate(${m_rotation}deg)`;
    sec.style.transform = `rotate(${s_rotation}deg)`;


}

setInterval(display_time , 1000);