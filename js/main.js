// window.addEventListener("mousewheel", event => {
//     const delta = Math.sign(event.wheelDelta);
//     //getting the mouse wheel change (120 or -120 and normalizing it to 1 or -1)
//     var mycam=document.getElementById('cam').getAttribute('camera');
//     var finalZoom=document.getElementById('cam').getAttribute('camera').zoom+delta;
//     //limiting the zoom so it doesnt zoom too much in or out
//     if(finalZoom<1)
//       finalZoom=1;
//     if(finalZoom>5)
//       finalZoom=5;  

//     mycam.zoom=finalZoom;
//     //setting the camera element
//     document.getElementById('cam').setAttribute('camera',mycam);
//   });


window.addEventListener("wheel", (event) => {
  // small increments for smoother zooming
  const delta = event.wheelDelta / 120 / 10;
  var mycam = document.getElementById("cam").getAttribute("camera");
  var finalZoom =
    document.getElementById("cam").getAttribute("camera").zoom + delta;

  // limiting the zoom
  if (finalZoom < 0.5) finalZoom = 0.5;
  if (finalZoom > 4) finalZoom = 4;
  mycam.zoom = finalZoom;

  document.getElementById("cam").setAttribute("camera", mycam);
});



