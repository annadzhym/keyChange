'use strict';

(document.onkeydown = function(e) {
    if (e.keyCode === 27) {
        escape();
        return false;
    }
    if ((e.ctrlKey && e.keyCode === 'E'.charCodeAt(0))) {
        edit();
        return false;
    }
    if ((e.ctrlKey && e.keyCode === 'S'.charCodeAt(0))) {
        save();
        return false;
    }

    function escape() {
        message.style.display = 'none';
        field.style.display = 'block';
    }
    function edit() {
        field.style.display = 'none';
        message.value = field.innerHTML;
        message.style.display = 'block';
        message.focus();
    }

    function save() {
        message.style.display = 'none';
        field.innerHTML = message.value;
        field.style.display = 'block';
    }
})();

