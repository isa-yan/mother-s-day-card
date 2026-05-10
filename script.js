let content=document.getElementById('content')
let sway=document.getElementById('sway')
let image=document.getElementById('image')

let message=["母亲节快乐啊老妈 <3",
    "祝你万事如意",
    "天天开心",
    "希望你能吃好玩好",
    "thank you so much mom",
    "thank you for being so supportive",
    "i love you",
    "爱你妈咪",
    "--嘉嘉&寒寒"]


let counter=0

document.addEventListener('mousemove',function(e){
    image.style.top = e.clientY + 20 +'px';
    image.style.left = e.clientX - 30 + 'px';

    })


document.addEventListener('keydown',function(){
    counter+=1
    for (let i=0;i<message.length;i++){
            //image.classList.add(class_array[i])
        if (counter==i+1){
            content.innerText=message[i];
        }

        if (counter==2){
            image.innerHTML="<img src='kitty.png' alt='kitty' class='imageholder'>"

        }else if(counter==4){
            image.innerHTML="<img src='mukbang.png' alt='mukbang' class='imageholder'>"

        }else if(counter==5){
            image.innerHTML="<img src='kitty.png' alt='kitty' class='imageholder'>"

        }else if(counter==6){
            image.innerHTML="<img src='jeanne.png' alt='jean' class='imageholder'>"

        }else if(counter==7){
            image.innerHTML="<img src='heart.png' alt='hrt' class='imageholder'>"

        }else if(counter>8){
            sway.classList.remove('sway')

        }
        
    }

})

/*sky*/
let blue = "rgb(207, 233, 255)"
let red = "rgb(192, 134, 134)"
let yellow = "rgb(255, 217, 91)"
let white = "rgb(255, 255, 255)"
let circle = document.getElementById("circle")
let starnum = Math.floor(Math.random()*200);
let sky = document.getElementById("sky")

function randompoint(){ 
    for (let i=0; i<starnum; i++){
        let x = Math.random()*100
        let y = Math.floor(Math.random()*100)
        let anitime = Math.floor(Math.random()*5)

        let doc = document.createElement('div')
        let tsukasa = Math.random()
        let rui = Math.random()
        var compare
        var blah

        if (tsukasa<0.25){
            compare = blue;
        } else if(tsukasa<0.5){
            compare = red;
        } else if(tsukasa<0.75){
            compare = yellow;
        } else if(tsukasa<1){
            compare = white;
        }

        if (rui<0.25){
            blah = "star1"
            
        } else if(rui<0.5){
            blah = "star2"
            
        } else if(rui<0.75){
            blah = "star3"
            
        } else if(rui<1){
            blah = "star4"
            
        }

    doc.style.backgroundColor=compare
    doc.classList.add(blah)
    doc.classList.add("blink")
    doc.style.left = x + 'vw'
    doc.style.top = y + 'vh'
    doc.style.animationDuration=anitime + 's'
    sky.appendChild(doc);

    }

    

}

randompoint();


