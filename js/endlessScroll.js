!function(){let n=0,e=!1,t=!1,o=10,i=10,l=function(){return new Promise((n,e)=>{n({result:!1})})},c=function(){if(t&&e){let c=0,s=i;t=!1,n>0&&(c=o+i*(n-1)),0===n&&(s=o),console.log({start:c,currentPage:n,stepsToUse:s,steps:i,initialSteps:o}),l(c,s).then(o=>{o.result?(e=!0,t=!0,n++):(e=!1,t=!1)}).catch(n=>{console.log(n)})}},s=function(){let n=document.documentElement.scrollHeight;document.documentElement.scrollTop+window.innerHeight===n&&e&&t&&c()},r=function(){t=!1,e=!1,n=0},u=function(){window.addEventListener("scroll",s),t=!0,e=!0,c()},d=function(n=10,e=10,t=function(){}){o=n,i=e,l=t};window.hasOwnProperty("endlessScroll")||(window.endlessScroll={config:d,init:u,reset:r})}();