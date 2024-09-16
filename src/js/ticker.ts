import gsap from "gsap";

export default function ticker() {
  const tickers = Array.from(document.querySelectorAll(".js-ticker"));

  tickers.forEach((element) => {
    const mainTrack = element.querySelector<HTMLElement>(".js-ticker-track");
    const innerTrack = element.querySelector<HTMLElement>(
      ".js-ticker-inner-track"
    );
    if (!innerTrack || !mainTrack) return;
    const items = Array.from(innerTrack.children);
    const REPEAT_COUNT = 4;

    for (let i = 0; i < REPEAT_COUNT; i++) {
      items.forEach((item) => {
        innerTrack.appendChild(item.cloneNode(true));
      });
    }

    mainTrack.appendChild(innerTrack.cloneNode(true));
    mainTrack.appendChild(innerTrack.cloneNode(true));

    const innerTracks = Array.from(
      document.querySelectorAll<HTMLElement>(".js-ticker-inner-track")
    );

    function setTickerAnimation(item: HTMLElement, reverse = false) {
      gsap.to(item, {
        ease: "none",
        xPercent: reverse ? 100 : -100,
        duration: 100,
        repeat: -1,
      });
    }

    innerTracks.forEach((innerTrack) => {
      const even = innerTrack.closest(".js-ticker-track:nth-child(even)");
      setTickerAnimation(innerTrack, !!even);
    });
  });
}
