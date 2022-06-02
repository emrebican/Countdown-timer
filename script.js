// 2023 başlangıcı - bugünün tarihi = kalan gün sayısı

var ask = prompt('Please Type a Year');

let newYears = `1 Jan ${ask}`

if(ask.match("^[0-9]*") && ask >= 2023) {
    function countdown () {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        /*
        console.log(newYearsDate);  // 2023 yılbaşı
        console.log(currentDate);   // Bugünün tarihi
        */
    
        const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
    
        const days = Math.floor(totalSeconds / ( 3600 * 24 ));
    
        const hours = Math.floor(totalSeconds / 3600) % 24;
        // 24'er saate böl artan saati yaz
    
        const mins = Math.floor(totalSeconds / 60) % 60;
        // 60'ar dakikaya böl kalan dakika yaz
    
        const seconds = Math.floor(totalSeconds) % 60;
        // 60'ar saniyeye böl kalan saniye yaz
    
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = format(hours);
        document.getElementById('mins').innerHTML = format(mins);
        document.getElementById('seconds').innerHTML = format(seconds);
    
    }
    
    function format (time) {
        return time < 10 ? (`0${time}`) : time
    }
    
    countdown();
    
    setInterval(countdown, 1000);
} else {
    alert('Please Type an Acceptable Year');
    location.reload();
}


