AFRAME.registerComponent("flying-birds", {
    init: function(){
        for(var i = 1; i <= 15; i++){
            var id = `huddle${i}`;

            var posX = (Math.random()*200/1000-.1);      
            var posY = (0.096);
            var posZ = (Math.random()*1000/1000-.3);
      
            var position = { x: posX, y: posY, z: posZ };

            this.flyingBirds(id, position);
        }
    },
    flyingBirds(id, position){
        var terrainEl = document.querySelector("#terrain");
        var birdEl = document.createElement("a-entity");

        birdEl.setAttribute("id", id);
        birdEl.setAttribute("position", position);
        birdEl.setAttribute("scale", {x: 0.01, y: 0.01, z: 0.01})
        birdEl.setAttribute("gltf-model", "./assets/models/hornet/scene.gltf");
        birdEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(birdEl);
    }
});