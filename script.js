const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// use querySelectorAll to bring all the elements in as a node list instead of using getElementById which would select only the first one. 
const circles = document.querySelectorAll('.circle');


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // check in the console that it is working.
    // console.log(currentActive)

    if (currentActive > circles.length){
        currentActive = circles.length
    }

    // check that the currentActive stays at four
    // console.log(currentActive)


    // call a function to update the DOM
      update()
})


// copy the function for next and recreate/edit for previous
prev.addEventListener('click', () => {
    currentActive--

    // check in the console that it is working.
    // console.log(currentActive)

    if (currentActive < 1){
        currentActive = 1
    }

    // check that the currentActive stays at four
    // console.log(currentActive)

    // call a function to update the DOM
    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // check if the class active is being added
    // console.log(actives.length, circles.length)

    progress.style.width = (actives.length -1) / (circles.length-1) * 100 + '%'
    

    if(currentActive === 1 ){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}