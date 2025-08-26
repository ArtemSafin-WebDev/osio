import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
  Fancybox.bind("[data-fancybox]", {
    placeFocusBack: false,
  });

  const BTN_SELECTOR = '.js__video-card';
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
        // @ts-ignore
        target.matches(BTN_SELECTOR) ||
        // @ts-ignore
        target.closest(BTN_SELECTOR)
    ) {
      event.preventDefault();

      // @ts-ignore
      let card = target.closest(BTN_SELECTOR);
      const id = card.dataset.id;
      // @ts-ignore
      const request = BX.ajax.runAction('gilyazov:core.api.reviews.iframe', {
        data: {
          id: id
        }
      });
      // @ts-ignore
      request.then(function(response){
        Fancybox.show([{
          // @ts-ignore
          placeFocusBack: false,
          src: '<div class="reviews-russian-video reviews-russian-video--vk">'+response.data.iframe+'</div>',
          type: 'html'
        }]);
      });
    }
  });
}
