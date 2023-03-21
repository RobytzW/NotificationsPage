const newNotifications = document.getElementsByClassName('newNotification');
const notificationSigns = document.getElementsByClassName('New');
const numberOfNotifications = document.getElementById('cnt');
const readAll = document.getElementById('all');
let numb = 3;
let readd = [1, 1, 1];

readAll.addEventListener('click', () => {
    for(let i = 0; i < newNotifications.length; ++i){
        newNotifications[i].style.backgroundColor = "hsl(210, 60%, 98%)";
        notificationSigns[i].classList.remove('new');
    }
    numberOfNotifications.style.display = "none";
});

for(let i = 0; i < newNotifications.length; ++i){
    newNotifications[i].addEventListener('click', () => {
        if(readd[i] == 1) {
            newNotifications[i].style.backgroundColor = "hsl(210, 60%, 98%)";
            notificationSigns[i].classList.remove('new');
            numb--;
            if(numb >= 1) numberOfNotifications.innerText = numb;
                else numberOfNotifications.style.display = "none";  
            readd[i] = 0;
        }
    })
}