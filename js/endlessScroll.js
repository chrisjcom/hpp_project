!function(){let e=0,n=!1,o=!1,t=10,l=10,c=function(){return new Promise((e,n)=>{e({result:!1})})},i=function(){if(o&&n){let i=0,s=l;o=!1,e>0&&(i=t+l*(e-1)),0===e&&(s=t),console.log({start:i,currentPage:e,stepsToUse:s,steps:l,initialSteps:t}),c(i,s).then(t=>{t.result?(n=!0,o=!0,e++):(n=!1,o=!1)}).catch(e=>{console.log(e)})}},s=function(e){let t=document.documentElement.scrollHeight,l=Math.ceil(document.documentElement.scrollTop+window.innerHeight);console.log(document.documentElement.scrollHeight),console.log(document.documentElement.scrollTop),console.log(window.innerHeight),console.log({offset:l,height:t,hasMore:n,getMore:o,event:e}),l===t&&n&&o&&i()},r=function(){o=!1,n=!1,e=0},u=function(){window.addEventListener("scroll",s),document.addEventListener("touchmove",s),o=!0,n=!0,i()},d=function(e=10,n=10,o=function(){}){t=e,l=n,c=o};window.hasOwnProperty("endlessScroll")||(window.endlessScroll={config:d,init:u,reset:r})}();