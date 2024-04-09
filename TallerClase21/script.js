const render =() =>{

    const digimones = [
        {
          name: "Koromon",
          img: "https://digimon.shadowsmith.com/img/koromon.jpg",
          level: "In Training"
        },
        {
          name: "Tsunomon",
          img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
          level: "In Training"
        },
        {
          name: "Yokomon",
          img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
          level: "In Training"
        },
        {
          name: "Motimon",
          img: "https://digimon.shadowsmith.com/img/motimon.jpg",
          level: "In Training"
        },
        {
          name: "Patamon",
          img: "https://digimon.shadowsmith.com/img/patamon.jpg",
          level: "Rookie"
        },
        {
          name: "Kuwagamon",
          img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
          level: "Champion"
        },
        {
          name: "Greymon",
          img: "https://digimon.shadowsmith.com/img/greymon.jpg",
          level: "Champion"
        },
        {
          name: "Tanemon",
          img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
          level: "In Training"
        }
      ];

      const contarDigi= (arreglo)=>{

        let inTrainingCount=[], championCount=[], rockieCount=[];

        for (contar of digimones){ 

            if (contar.level === "In Training"){
                inTrainingCount.push(contar);
    
            }else if(contar.level === "Champion"){
                championCount.push(contar);

            }else if(contar.level === "Rookie"){
                rockieCount.push(contar);
            }
          }
          return{
            inTraining: inTrainingCount.length, rockie: rockieCount.length, champion: championCount.length,
          }

      }

      console.log(contarDigi(digimones));

      const cajaTexto = document.querySelector(".cajaTexto");

      const inTrainingTxt = document.createElement("p");
      const rockieTxt = document.createElement("p");
      const championTxt = document.createElement("p");

      inTrainingTxt.innerHTML= `Existen ${contarDigi(digimones).inTraining} digimones con nivel In Training.`;//el mismo inTraining es del return de la función contar. Es decir, le estoy pidiendo que solo me muestre la propiedad inTraining. 
      rockieTxt.innerHTML= `Existen ${contarDigi(digimones).rockie} digimones con nivel Rockie.`;
      championTxt.innerHTML= `Existen ${contarDigi(digimones).champion} digimones con nivel Champion.`;

      inTrainingTxt.classList.add("color");
      rockieTxt.classList.add("color");
      championTxt.classList.add("color");

      cajaTexto.appendChild(inTrainingTxt);
      cajaTexto.appendChild(rockieTxt);
      cajaTexto.appendChild(championTxt);

};

document.addEventListener("DOMContentLoaded",render)