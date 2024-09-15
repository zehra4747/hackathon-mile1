const sbutton = document.getElementById('butt') as HTMLButtonElement

const skills = document.getElementById('ski') as HTMLElement

sbutton.addEventListener('click',  ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else{
        skills.style.display = 'none'
    }
})