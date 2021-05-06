$(function () {
    function start(num) {
        let rowsPerPage = num;

        const rows = $('#my-table tbody tr');
        const rowsCount = rows.length;
        const pageCount = Math.ceil(rowsCount / rowsPerPage);
        const numbers = $('#numbers');

        if (pageCount > 1) {
            numbers.append('<li id="previous" class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
        }
        if (pageCount > 5) {
            for (let i = 0; i < 5; i++) {
                numbers.append('<li class="page-item num"><a class="page-link" href="#">' + (i + 1) + '</a></li>');
            }
        } else {
            for (let i = 0; i < pageCount; i++) {
                numbers.append('<li class="page-item num"><a class="page-link" href="#">' + (i + 1) + '</a></li>');
            }
        }
        // Mark the first page link as active.
        $('#numbers li:nth-child(2)').addClass('active');
        if (pageCount > 1) {
            numbers.append('<li id="next" class="page-item"><a class="page-link" href="#" aria-label="next"><span aria-hidden="true">&raquo;</span></a></li>');
        }
        // Display the first set of rows.
        displayRows(1);
        // On pagination click.
        $('#numbers li.num').click(function (e) {
            let $this = $(this);
            // e.preventDefault();
            $('#numbers li').removeClass('active');
            $this.addClass('active');
            displayRows($this.text());
        });


        $("#next").click(function () {
            let x = $('#numbers').find('.active');
            if (Number(x.text()) === pageCount) {
                return false;
            }
            if (x.next().is('#next')) {
                for (let i = 0; i < 5; i++) {
                    $('#numbers li.num a')[i].innerHTML = Number($('#numbers li.num a')[i].text) + 1;
                }
                displayRows(x.text())

            } else {
                x.removeClass('active');
                x.next().addClass('active');
                displayRows(x.next().text())
            }
        })
        $("#previous").click(function (e) {
            let x = $('#numbers').find('.active');
            if (Number(x.text()) === 1) {
                return false;
            }
            if (x.prev().is('#previous')) {
                for (let i = 0; i < 5; i++) {
                    $('#numbers li.num a')[i].innerHTML = Number($('#numbers li.num a')[i].text) - 1;
                }
                displayRows(x.text())

            } else {
                x.removeClass('active');
                x.prev().addClass('active');
                displayRows(x.prev().text())
            }
        })

        // Function that displays rows for a specific page.
        function displayRows(index) {
            let start = (index - 1) * rowsPerPage;
            let end = start + rowsPerPage;
            rows.hide();
            rows.slice(start, end).show();
        }

    }
    // const inputNumber = $('#number-rows');
    // start(Number(inputNumber.val()));
    // inputNumber.on("change", function () {
    //     if (inputNumber.val() > 0) {
    //         $('#numbers').empty();
    //         start(Number(inputNumber.val()))
    //     }
    // })


    const select = $("#number-rows")
    const inputNumber = $("#number-rows option:selected")
    start(Number(inputNumber.text()));
    select.on("change", function () {
        $('#numbers').empty();
        start(Number(this.value))

    })

});

