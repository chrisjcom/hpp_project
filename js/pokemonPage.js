function load(){let t=getParamId();pokedex.getPokemonInfo(t)}function getParamId(){let t=location.search.substr(1).split("&"),e=!1,a=1;return t.forEach(t=>{let o=t.split("=");if("id"===o[0]){let t=parseInt(o[1]);isNaN(t)||(a=t,e=!0)}}),e||(a=Math.ceil(150*Math.random())),a}window.addEventListener("load",load);