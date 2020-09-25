const apiBaseUrl="https://pokeapi.co/api/v2/pokemon/",pokemonImageBaseUrl="https://pokeres.bastionbot.org/images/pokemon/",pokemonSpriteBaseUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";function load(){getPokemonInfo()}async function getPokemonInfo(){let e=getParamId(),n=localStorage.getItem(e);null!==n?(n=JSON.parse(n),n.hasInfoFromApi||(n=await fetchInfoPokemon(n.id),console.log(n)),drawPokemonInfo(n)):(n=await fetchInfoPokemon(e),console.log(n),drawPokemonInfo(n))}async function fetchInfoPokemon(e){try{let n,t=`${apiBaseUrl}${e}/`,o=await fetch(t),a=await o.json(),i=await fetch(a.species.url),s=await i.json();return n=new Pokemon(a.name,t,a.id),a.types.forEach(e=>{n.types.push(e.type.name)}),s.flavor_text_entries.length>0&&(n.description=s.flavor_text_entries[0].flavor_text.split("\f\f"),localStorage.setItem(n.id,JSON.stringify(n))),n.hasInfoFromApi=!0,localStorage.setItem(n.id,JSON.stringify(n)),n}catch(n){return localStorage.getItem(e)}}function getParamId(){let e=location.search.substr(1).split("&"),n=1;return e.forEach(e=>{let t=e.split("=");if("id"===t[0]){let e=parseInt(t[1]);isNaN(e)||(n=e)}}),n}function Pokemon(e,n,t=-1){if(this.name=e,this.url=n,this.id=t,this.description="",this.types=[],this.hasInfoFromApi=!1,-1===this.id){let e=n.split("/"),t=e.length-2;this.id=parseInt(e[t])}}function drawPokemonInfo(e){if(e.hasOwnProperty("id")){document.getElementById("pokemon_container");let n="";e.types.length>0&&(n="bgtype_"+e.types[0]);let t=e.types.map(e=>`<span class="pokemon_container__type bgtype_${e}">${e}</span>`);t=t.join(""),pokemon_container.innerHTML=`<figure id="pokemon_container__image_container" class="${n}">\n                                            <img src="${pokemonImageBaseUrl}${e.id}.png" alt="Imagen de ${e.name}" id="pokemon_container__image">\n                                        </figure>\n                                        <section id="pokemon_container__data">\n                                            <h3 id="pokemon_container__name">${e.name}</h3>\n                                            <p>${t}</p>\n                                            <p id="pokemon_container__description">${e.description}</p>\n                                        </section>`;let o=e.id+1,a=e.id-1;if(o<=150){let e=localStorage.getItem(o);document.getElementById("next_pokemon").innerHTML=`<a class="nav_menu__list__item__link" href="./pokemon.html?id=${o}">\n                                            <span>${o} - ${e.name}</span>\n                                            <img src="${pokemonSpriteBaseUrl}${o}.png" alt="Sprite de ${e.name}">\n                                        </a>`}if(a>=1){let e=localStorage.getItem(a);document.getElementById("previous_pokemon").innerHTML=`<a class="nav_menu__list__item__link" href="./pokemon.html?id=${a}">\n                                            <span>${a} - ${e.name}</span>\n                                            <img src="${pokemonSpriteBaseUrl}${a}.png" alt="Sprite de ${e.name}">\n                                        </a>`}}}window.onload=load;