function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerText = time;

    setTimeout(displayTime, 1000);
}

displayTime();