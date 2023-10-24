function instructions() {

    //start for a heder

let header_spanFA1 = (document.querySelectorAll('.header__partF_spanA'))[0];
let header_spanFA2 = (document.querySelectorAll('.header__partF_spanA'))[1];
let header_spanFA3 = (document.querySelectorAll('.header__partF_spanA'))[2];
let header_spanFA4 = (document.querySelectorAll('.header__partF_spanA'))[3];
let header_spanFA5 = (document.querySelectorAll('.header__partF_spanA'))[4];
let header_spanNA1 = (document.querySelectorAll('.header__partN_spanA'))[0];
let header_spanNA2 = (document.querySelectorAll('.header__partN_spanA'))[1];
let header_spanNA3 = (document.querySelectorAll('.header__partN_spanA'))[2];
let header_spanNA4 = (document.querySelectorAll('.header__partN_spanA'))[3];

let header_spanFB1 = (document.querySelectorAll('.header__partF_spanB'))[0];
let header_spanFB2 = (document.querySelectorAll('.header__partF_spanB'))[1];
let header_spanFB3 = (document.querySelectorAll('.header__partF_spanB'))[2];
let header_spanFB4 = (document.querySelectorAll('.header__partF_spanB'))[3];
let header_spanFB5 = (document.querySelectorAll('.header__partF_spanB'))[4];
let header_spanNB1 = (document.querySelectorAll('.header__partN_spanB'))[0];
let header_spanNB2 = (document.querySelectorAll('.header__partN_spanB'))[1];
let header_spanNB3 = (document.querySelectorAll('.header__partN_spanB'))[2];
let header_spanNB4 = (document.querySelectorAll('.header__partN_spanB'))[3];

let numSizeJump = 90;

function jumpHeder() {

    if(numSizeJump > 0){
        numSizeJump--;
        setTimeout(() => {
            jumpHeder();
        }, 23);
    }


    header_spanFA1.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanNA1.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanFB1.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanNB1.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanFA2.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanNA2.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanFB2.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanNB2.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanFA3.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanNA3.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanFB3.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanNB3.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanFA4.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanNA4.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanFB4.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanNB4.attributes[1].nodeValue = `top: -${numSizeJump}px`;
    header_spanFA5.attributes[1].nodeValue = `top: ${numSizeJump}px`;
    header_spanFB5.attributes[1].nodeValue = `top: -${numSizeJump}px`;
}
jumpHeder();

//  end for a heder

// start for a main1

let spenDate = (document.querySelector('.main__partF__info__con3_date'));
function shchetaiem() {
    let andDate = new Date(2024,8,27,0,0,0,0);
let thisDate = new Date();
let yearsDate = Math.floor((andDate - thisDate)/1000/3600/24/365);
let monthsDate = Math.floor(((andDate - thisDate)/1000/3600/24/30)-(12*yearsDate));
let dayDate = Math.floor(((andDate - thisDate)/1000/3600/24)-(30*12*yearsDate + 30*monthsDate));
let hoursDate = Math.floor(((andDate - thisDate)/1000/3600) - (24*30*12*yearsDate + 24*30*monthsDate + 24*dayDate));
let minutesDate = Math.floor(((andDate - thisDate)/1000/60) - (60*24*30*12*yearsDate + 60*24*30*monthsDate + 60*24*dayDate + 60*hoursDate));
let secondsDate = Math.floor(((andDate - thisDate)/1000) - (60*60*24*30*12*yearsDate + 60*60*24*30*monthsDate + 60*60*24*dayDate + 60*60*hoursDate + 60*minutesDate));

spenDate.innerHTML = `${yearsDate}y.${monthsDate}m.${dayDate}d. ${hoursDate}h:${minutesDate}m:${secondsDate}s.`;

setTimeout(() => {
    shchetaiem()
    }, 1000);
}
shchetaiem();

let mainFotoPart1 = (document.querySelector('.main__partF__contImg__part1'));
let mainFotoPart2 = (document.querySelector('.main__partF__contImg__part2'));
let mainFotoPart3 = (document.querySelector('.main__partF__contImg__part3'));
let mainFotoPart4 = (document.querySelector('.main__partF__contImg__part4'));
let mainFotoPart5 = (document.querySelector('.main__partF__contImg__part5'));
let mainFotoPart6 = (document.querySelector('.main__partF__contImg__part6'));

let mainInfoPart1 = (document.querySelector('.main__partF__info__con1'));
let mainInfoPart2 = (document.querySelector('.main__partF__info__con2'));
let mainInfoPart3 = (document.querySelector('.main__partF__info__con3'));
let mainInfoPart4 = (document.querySelector('.main__partF__info__con4'));
let mainInfoPart5 = (document.querySelector('.main__partF__info__con5'));
let mainInfoPart6 = (document.querySelector('.main__partF__info__con6'));

let main_style_position = 300;

function flyMain() {

    if(main_style_position > 0){
        main_style_position--;
        setTimeout(() => {
            flyMain();
        }, 5);
    }

    mainFotoPart1.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainFotoPart2.attributes[1].nodeValue = `left: ${main_style_position}px`;
    mainFotoPart3.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainFotoPart4.attributes[1].nodeValue = `left: ${main_style_position}px`;
    mainFotoPart5.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainFotoPart6.attributes[1].nodeValue = `left: ${main_style_position}px`;
    mainInfoPart1.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainInfoPart2.attributes[1].nodeValue = `left: ${main_style_position}px`;
    mainInfoPart3.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainInfoPart4.attributes[1].nodeValue = `left: ${main_style_position}px`;
    mainInfoPart5.attributes[1].nodeValue = `left: -${main_style_position}px`;
    mainInfoPart6.attributes[1].nodeValue = `left: ${main_style_position}px`;

}

flyMain();

// end for a main1
// start for a main2

let mainRad = (document.querySelectorAll('.main__partS__rad'))[0];

let mainRadPar1 = (document.querySelectorAll('.main__partS__rad_part'))[0];
let mainRadPar2 = (document.querySelectorAll('.main__partS__rad_part'))[1];
let mainRadPar3 = (document.querySelectorAll('.main__partS__rad_part'))[2];
let mainRadPar4 = (document.querySelectorAll('.main__partS__rad_part'))[3];
let mainRadPar5 = (document.querySelectorAll('.main__partS__rad_part'))[4];
let mainRadPar6 = (document.querySelectorAll('.main__partS__rad_part'))[5];
let mainRadPar7 = (document.querySelectorAll('.main__partS__rad_part'))[6];
let mainRadPar8 = (document.querySelectorAll('.main__partS__rad_part'))[7];
let mainRadPar9 = (document.querySelectorAll('.main__partS__rad_part'))[8];
let mainRadPar10 = (document.querySelectorAll('.main__partS__rad_part'))[9];
let mainRadPar11 = (document.querySelectorAll('.main__partS__rad_part'))[10];
let mainRadPar12 = (document.querySelectorAll('.main__partS__rad_part'))[11];
let mainRadPar13 = (document.querySelectorAll('.main__partS__rad_part'))[12];
let mainRadPar14 = (document.querySelectorAll('.main__partS__rad_part'))[13];
let mainRadPar15 = (document.querySelectorAll('.main__partS__rad_part'))[14];
let mainRadPar16 = (document.querySelectorAll('.main__partS__rad_part'))[15];


let kloc = 0;
let klokRes = true;
function aRound(val) {
    if(val !== true) return;
    if(kloc < 100000){
        kloc++
        mainRad.style = `transform: rotate(${kloc}deg)`;
        mainRadPar1.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar2.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar3.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar4.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar5.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar6.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar7.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar8.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar9.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar10.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar11.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar12.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar13.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar14.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar15.style = `transform: rotate(${-kloc}deg)`;
        mainRadPar16.style = `transform: rotate(${-kloc}deg)`;

        if(klokRes === true)
        {
            setTimeout(() => {
            aRound(true);
            }, 150);
        };
    } else {
        kloc = 0;
        aRound(true);
    }
 
};
aRound(true)

let mainRadParLis = (document.querySelectorAll('.main__partS__rad_part'));

for (let i = 0; i < mainRadParLis.length; i++) { 
    // eslint-disable-next-line
    mainRadParLis[i].onmouseover = function () {        
        klokRes = false;
    }
}

for (let i = 0; i < mainRadParLis.length; i++) {
    // eslint-disable-next-line
    mainRadParLis[i].onmouseout = function () {        
        klokRes = true;
        setTimeout(() => {
            aRound(true);
            }, 5000);
    }
}

// end for a main2
// end start a footer1

let footerKlic = (document.querySelector('.footer__partF__top'));
let footerDisplei = (document.querySelector('.footer__partF__top_p'));

footerKlic.onclick = function () {
    footerDisplei.classList.toggle("block__none");
};
// end for a footer1
// end start a footer2
//contact start

let footerKlicCont = (document.querySelector('.footer__partS_contLisen'));
let footerKlicContPop = (document.querySelector('.footer__partS__contPop'));
footerKlicCont.onclick = function () {
    footerKlicContPop.classList.toggle("block__none");

    let footerKlicContPopExt = (document.querySelector('.footer__partS__contPop__main_X'));
    footerKlicContPopExt.onclick = function () {
        footerKlicContPop.classList.toggle("block__none");
    }
};
//contact end
//games start

let footerKlicSay = (document.querySelector('.footer__partS_sayLisen'));
let footerKlicSayPop = (document.querySelector('.footer__partS__sayPop'));
let footerKlicButGame = (document.querySelectorAll('.footer__partS__sayPop__main__games_buttunAll'));
let footerKlicGameWinner = (document.querySelector('.footer__partS__sayPop__main_winner'));

footerKlicSay.onclick = function () {
    footerKlicSayPop.classList.toggle("block__none");

    let gMainArr = [
        [0,0,0,[2,5]],
        [1,25,0,[1,3,6]],
        [2,50,0,[2,4,7]],
        [3,75,0,[3,8]],
        [4,0,25,[1,6,9]],
        [5,25,25,[2,5,7,10]],
        [6,50,25,[3,6,8,11]],
        [7,75,25,[4,7,12]],
        [8,0,50,[5,10,13]],
        [9,25,50,[6,9,11,14]],
        [10,50,50,[7,10,12,15]],
        [11,75,50,[8,11,16]],
        [12,0,75,[9,14]],
        [13,25,75,[10,13,15]],
        [14,50,75,[11,14,16]],
        [15,75,75,[12,15]]
    ];

function gameRandInt() {
    let mixArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    mixArr.sort(()=>Math.random()-0.5);

        for (let i = 0; i < 16; i++) {
            if(mixArr[i] !== 15){
                
                footerKlicButGame[mixArr[i]].style = `left: ${gMainArr[i][1]}%; top: ${gMainArr[i][2]}%`;
            };
        };

        function gameWinner() {
            const controlArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            let contWin1 = true;
            for(let i=0;i < 16;i++){
                
                if(controlArr[i] !== workArr[i]){
                    contWin1 = false
                    
                }
            }
            if(contWin1 == true){
                if(footerKlicGameWinner.classList.contains('block__none')){
                    footerKlicGameWinner.classList.remove('block__none');
                } else {
                    if(!footerKlicGameWinner.classList.contains('block__none')){
                        footerKlicGameWinner.classList.add('block__none');
                    }
                }
            }
        }

        let workArr = mixArr;
        let workNumA = 0;
        let workNumB = 0;
        let workNumAt = 0;
        let workNumBt= 0;

        function myvin(arr) {
            let controlA = true;
            if(!arr)return;
            for (let i = 0; i < 16; i++) {
                if(workArr[i] !== 15){

       

                    gameWinner();
                    footerKlicButGame[workArr[i]].onclick = function () {
                        for (let u = 0; u < gMainArr[i][3].length; u++) {
                            
                            if (workArr[(gMainArr[i][3][u])-1] === 15) {
                                footerKlicButGame[workArr[i]].style = `left: ${gMainArr[(gMainArr[i][3][u])-1][1]}%; top: ${gMainArr[(gMainArr[i][3][u])-1][2]}%`;                            
                                gameWinner()
                                for (let t = 0; t < 16; t++) {
                                    if(workArr[t] === workArr[i]){workNumA = workArr[t]; workNumAt = t;};
                                    if(workArr[t] === 15){workNumB = workArr[t]; workNumBt = t};                                   
                                
                                }; 
                                gameWinner()
                                workArr[workNumAt] = workNumB;
                                workArr[workNumBt] = workNumA;
                                if(controlA === true)myvin(workArr);
                                controlA = false;
                                gameWinner()
                            }; 
                        }; 
                    }; 
                }; 
            }; 
        }; 

        myvin(workArr);

        
    
}

gameRandInt()

    let footerKlicButGameMix = (document.querySelector('.footer__partS__sayPop__main__games_buttun_mix'));
    footerKlicButGameMix.onclick = function () {
        gameRandInt()
    }


    let footerKlicSayPopExt = (document.querySelector('.footer__partS__sayPop__main_X'));
    footerKlicSayPopExt.onclick = function () {
        footerKlicSayPop.classList.toggle("block__none");
    }
};




//games end
// end for a footer2
}
  
export default instructions;
