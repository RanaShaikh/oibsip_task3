let sc=document.getElementById('display_screen');
buttons=document.querySelectorAll('button');
let screenvalue="";
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is',buttonText);

    })
}