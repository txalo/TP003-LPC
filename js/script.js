console.log('Hello World');
document.querySelector('#itinerario').addEventListener('click', function () {
    document.querySelector("main").classList.toggle("hidden");
    document.querySelector("#itinerario-container").classList.toggle("hidden");
});

const sequencyCount = (arr) => {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
            
        } else {
            if (count > max) {
                max = ++count;
                
            }
            count = 0;
        }
    }
    return max;
};

console.log(sequencyCount([ true,true,true, true, true, false, true,true, true, true, true, true, false, false, false]))