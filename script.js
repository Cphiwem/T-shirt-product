 let productImg = document.getElementById('productImg');
 let btn = document.getElementsByClassName('btn');
//  let active = document.getElementsByClassName('active');

let onActive = function(){
    for(bt of btn){
        bt.classList.remove('active')
    }
}


 btn[0].onclick = function(){
    productImg.src = 'img/image1.png';
    onActive();
    this.classList.add('active');

 }


 btn[1].onclick = function(){
    productImg.src = 'img/image2.png'
    onActive();
    this.classList.add('active');
 }


 btn[2].onclick = function(){
    productImg.src = 'img/image3.png'
    onActive();
    this.classList.add('active');
 }


