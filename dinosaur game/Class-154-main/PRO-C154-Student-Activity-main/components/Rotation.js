//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.05;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.05;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//Plane rotation component
AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var planeRotation = this.data.speedOfRotation;
      var planePosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowUp") {
        if (planeRotation.x < 0) {
          planeRotation.x += 15;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planeRotation.x > 0) {
          planeRotation.x -= 15;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y < 5) {
          planePosition.y += 0.1;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (planeRotation.x < 160) {
          planeRotation.x += 15;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y > -2) {
          planePosition.y -= 0.1;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowRight") {
        if (planeRotation.y > 166) {
          planeRotation.z += 4;
          planeRotation.y -= 4;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.y < 204) {
          planeRotation.z -= 4;
          planeRotation.y += 4;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      else{
        if (e.key === "1"){
          if (planeRotation.x > 90) {
            planeRotation.x -= 10;
            this.el.setAttribute("rotation", planeRotation);
          }
          if (planeRotation.x < 90) {
            planeRotation.x += 10;
            this.el.setAttribute("rotation", planeRotation);
          }
          if (planeRotation.z > 0) {
            planeRotation.z -= 5;
            this.el.setAttribute("rotation", planeRotation);
          }
          if (planeRotation.z < 0) {
            planeRotation.z += 5;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
      }
    });
  }
});


