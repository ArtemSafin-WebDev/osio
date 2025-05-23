import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
  Fancybox.bind("[data-fancybox]", {
    placeFocusBack: false,
  });

  const cards = document.querySelectorAll('.reviews__video-card');
  cards.forEach(function (card){
    card.addEventListener('click', function(e) {
      e.preventDefault();
      // @ts-ignore
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
    });
  });
}
