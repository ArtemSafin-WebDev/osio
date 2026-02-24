initMap();
async function initMap() {
  const serviceCenters = document.querySelector(".service-centers");
  if (!serviceCenters) return;
  const mapElement = serviceCenters.querySelector(
    ".service-centers__map-element-inner"
  );

  if (!mapElement) return;
  //   const mapRoot = ourProjects.querySelector(".service-centers__map-element");
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapMarker,
    YMapDefaultFeaturesLayer,
  } = ymaps3;

  const { YMapZoomControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1"
  );
  const lat = Number(mapElement.parentElement.getAttribute("data-lat"));
  const lng = Number(mapElement.parentElement.getAttribute("data-lng"));
  const pinUrl = mapElement.parentElement.getAttribute("data-pin-url");
  const zoom = mapElement.parentElement.hasAttribute("data-zoom")
    ? Number(mapElement.parentElement.getAttribute("data-zoom"))
    : 14;

  const map = new YMap(mapElement, {
    location: {
      center: [lng, lat],
      zoom: zoom,
    },
    behaviors: ["drag", "pinchZoom"],
  });
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

  const controls = new YMapControls({
    position: "right",
    orientation: "vertical",
  });
  controls.addChild(
    new YMapZoomControl({
      easing: "linear",
    })
  );
  map.addChild(controls);

  let markers = [];

  const cards = Array.from(
    document.querySelectorAll(".service-centers__points-card .service-centers__points-card-text")
  );

  cards.forEach((card) => {
    const lat = Number(card.getAttribute("data-lat"));
    const lng = Number(card.getAttribute("data-lng"));

    console.log(pinUrl);

    const title = card.closest('.service-centers__points-card')
        .querySelector('.service-centers__points-card-title');

    const markerElement = document.createElement("div");
    markerElement.className = "service-centers__marker";
    const markerPin = document.createElement("img");
    markerPin.className = "service-centers__marker-pin";
    markerPin.src = pinUrl;
    markerElement.appendChild(markerPin);
    const markerPopover = document.createElement("div");
    markerPopover.className = "service-centers__marker-popover";
    markerPopover.innerHTML = title.outerHTML + card.outerHTML;
    markerPopover.style.display = "none";
    markerElement.appendChild(markerPopover);

    console.log(markerElement);

    const marker = new YMapMarker(
      {
        coordinates: [lng, lat],
        draggable: false,
        mapFollowsOnDrag: false,
      },
      markerElement
    );

    markers.push({ marker, markerPopover });
    map.addChild(marker);

    card.addEventListener("click", (event) => {
      if (event.target.matches("a")) return;
      event.preventDefault();
      cards.forEach((card) => card.closest('.service-centers__points-card').classList.remove("active"));
      card.closest('.service-centers__points-card').classList.add("active");

      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      markers.forEach(({ markerPopover }) => {
        markerPopover.style.display = "none";
      });
      markerPopover.style.display = "";

      map.update({
        location: {
          center: [lng, lat],
          zoom: 16,
          duration: 1000,
        },
      });
    });

    markerPin.addEventListener("click", () => {
      cards.forEach((card) => card.classList.remove("active"));
      card.closest('.service-centers__points-card').classList.add("active");
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      markers.forEach(({ markerPopover }) => {
        markerPopover.style.display = "none";
      });
      markerPopover.style.display = "";

      map.update({
        location: {
          center: [lng, lat],
          zoom: 16,
          duration: 1000,
        },
      });
    });
  });

  cards[0]?.click();

  const modal = document.querySelector(".service-centers__cities-modal");
  if (!modal) return;
  const input = modal.querySelector("input");
  const cities = Array.from(
    modal.querySelectorAll(".service-centers__cities-list-item")
  );
  input.addEventListener("input", (event) => {
    const value = event.target.value.trim().toLowerCase();
    cities.forEach((city) => (city.style.display = ""));
    if (!value) {
      return;
    }
    const notMatchingCities = cities.filter((city) => {
      const cityText = city.querySelector("a")?.textContent;
      if (!cityText) return true;
      if (!cityText.trim().toLowerCase().startsWith(value)) return true;
      return false;
    });
    notMatchingCities.forEach((city) => (city.style.display = "none"));
  });
}
