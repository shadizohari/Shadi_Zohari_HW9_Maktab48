$(function () {
    // Counter
    $('.row:first-child input').before('<button id="counter-decrease">-</button>')
    $('.row:first-child input').after('<button id="counter-increase">+</button>')
    $('#counter-decrease').on('click', function (e) {
        let newValue = Number($(this).next().val()) - 1;
        $(this).next().val(newValue)

    });
    $('#counter-increase').on('click', function (e) {
        let newValue = Number($(this).prev().val()) + 1;
        $(this).prev().val(newValue)
    });

    // time
    $('.row:nth-child(2) input').before('<button id="time-decrease">-</button>')
    $('.row:nth-child(2) input').after('<button id="time-increase">+</button>')

    $('#time-increase').on('click', function (e) {
        let oldValue = $(this).prev().val();
        let arrayValue = oldValue.split(":");
        let hour = arrayValue[0];
        let minute = arrayValue[1];
        minute = (Number(minute) + 15) % 60;
        if (minute == 0) {
            minute = "00";
            hour = String((Number(hour) + 1) % 24);
        }
        if (hour.length<2) {
            hour = "0"+hour
        }
        let newTime = hour + ":" + minute;
        $(this).prev().val(newTime)
    });


    $('#time-decrease').on('click', function (e) {
        let oldValue = $(this).next().val();
        let arrayValue = oldValue.split(":");
        let hour = arrayValue[0];
        let minute = arrayValue[1];
        if (minute == 0 && hour == 0) {
            return false
        }
        if (minute == 0) {
            minute = 60;
            hour = String(Number(hour) - 1)
        }
        minute = String((Number(minute) - 15));
        if (hour.length<2) {
            hour = "0"+hour
        }
        if (minute == 0) {
            minute = "00"
        }
        let newTime = hour + ":" + minute;
        $(this).next().val(newTime)
    });
});