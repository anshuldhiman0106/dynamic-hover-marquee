// Repeat content for all `.moving-in` elements
document.querySelectorAll(".moving-in").forEach((elem) => {
  elem.innerHTML = elem.innerHTML.repeat(5);
});

// Repeat content for all `.moving` elements
document.querySelectorAll(".moving").forEach((elem) => {
  elem.innerHTML = elem.innerHTML.repeat(6);
});

// Adjust blur width relative to each <h2> inside .elem
document.querySelectorAll(".elem").forEach((elem) => {
  const h2 = elem.querySelector("h2");
  const blur = elem.querySelector(".blur");
  if (h2 && blur) {
    const h2Width = h2.offsetWidth;
    blur.style.width = h2Width + 450 + "px";
  }
});

// Handle background image change on hover
document.querySelectorAll(".elem").forEach((elem) => {
  const imgUrl = elem.getAttribute("data-img");
  const h2s = elem.querySelectorAll("h2");

  h2s.forEach((h2) => {
    h2.addEventListener("mouseenter", function () {
      // Change background image
      document.querySelector("#page1").style.backgroundImage = `url(${imgUrl})`;

      // Activate .blur and .moving inside this .elem
      const blur = elem.querySelector(".blur");
      const moving = elem.querySelector(".moving");
      if (blur && moving) {
        blur.style.opacity = "1";
        blur.style.transform = "translate(0, -50%) scaleY(1)";
        moving.style.opacity = "1";
        moving.style.transform = "translate(0, -50%) scaleY(1)";
      }
      h2.style.fontStyle = "italic"; 
    });

    h2.addEventListener("mouseleave", function () {
      // Deactivate .blur and .moving inside this .elem
      const blur = elem.querySelector(".blur");
      const moving = elem.querySelector(".moving");
      if (blur && moving) {
        blur.style.opacity = "0";
        blur.style.transform = "translate(0, -50%) scaleY(0)";
        moving.style.opacity = "0";
        moving.style.transform = "translate(0, -50%) scaleY(0)";
      }
      h2.style.fontStyle = "normal";
      
    });
  });
});
