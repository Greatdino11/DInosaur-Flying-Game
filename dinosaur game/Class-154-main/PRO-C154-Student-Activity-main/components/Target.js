// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables     
      var posX = (Math.random()*200/1000-.1);      
      var posY = (0.095);
      var posZ = (Math.random()*1000/1000-.3);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  } ,

  createRings: function(id, position) { 
    
    var terrainEl = document.querySelector("#terrain");

    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    ringEl.setAttribute("position",position);
    
    ringEl.setAttribute("material","color","#ff9100");
    
    ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8});
    ringEl.setAttribute("scale", "0.0005 0.0005 0.0005");

    terrainEl.appendChild(ringEl);
  }
});

