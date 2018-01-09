document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('ok-button').addEventListener('click', () => {
            document.getElementById('audio').play();

            document.getElementById("title").classList.add('leave-left');
            document.getElementById("main-text").classList.add('leave-right');
            document.getElementById('ok-button').classList.add('leave-left');
            document.getElementById("footer").classList.add('leave-right');

            window.setTimeout(() => {
                document.getElementsByTagName('body')[0].remove();
                window.close();
            }, 1000);
        });
});

