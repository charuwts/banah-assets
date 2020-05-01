// #####
// Builder
// #####
$( document ).on('turbolinks:load', function() {
  var $builderLayout = $("#builder-layout");
  var $add  = $("#add-row");
  
  function banahFadeIn() {
    let tl = gsap.timeline();
    tl.to(".banah-fade-in", {duration: 0.3, rotateZ: "0.5"})
    .to(".banah-fade-in", {duration: 0.3, rotateZ: "-0.5"})
    .to(".banah-fade-in", {duration: 0.3, rotateZ: "0"})
  }

  function createTile(event) {
      event ? event.preventDefault() : '';
      var element = $("<div></div>").addClass("demo-row shadow-sm p-2 my-1").html('demo-row');
      $builderLayout.append(element)
  
      Draggable.create(element, {
          onRelease: onRelease,
          bounds: $builderLayout
      })
      function onRelease() {
          gsap.to(this.target, 0.5, {x:0, y:0})
      }
  }
  if ($builderLayout.length > 0) {
      $add.click(createTile);
      createTile();
  }
  banahFadeIn();
});