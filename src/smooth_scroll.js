const smoothScroll = () =>{
  let links = document.querySelectorAll('a[href^="#"]');
  const speed = 200;          // スクロールスピード   
  const divisor = 100;        // 分割数
  const tolerance = 5;        // 許容誤差
  const headerHeight = 110;     // 固定ヘッダーがある場合はその高さ分ずらす
  const interval = speed/divisor;
  for(let i = 0; i < links.length; i++){
      links[i].addEventListener('click',(e)=>{
          e.preventDefault();
          let nowY = window.pageYOffset;
          const href = e.currentTarget.getAttribute('href');
          const target = document.querySelector(href);
          if( target != null){
              const targetRectTop = target.getBoundingClientRect().top;
              const targetY = targetRectTop + nowY - headerHeight;
              const minY = Math.abs((targetY - nowY)/divisor);
              doScroll(minY,nowY,targetY,tolerance,interval);
          }
      });
  }
}

const doScroll = (minY,nowY,targetY,tolerance,interval) =>{
  let toY ;
  if( targetY < nowY ){
      toY = nowY - minY;
  }else{
      toY = nowY + minY;
  }
  window.scrollTo(0, toY);
  if( targetY - tolerance > toY || toY > targetY + tolerance){
      window.setTimeout(doScroll,interval,minY,toY,targetY,tolerance,interval);
  }else{
      return false;
  }
} 

module.exports = smoothScroll;
