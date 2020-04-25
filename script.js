var  section1 =   document.getElementById('section1'),
     onas = document.getElementById('o__nas');
var  cepka1 =   document.getElementById('cepka1');
var  cepka2 =   document.getElementById('cepka2');
var  wrapper =   document.getElementById('wrapper');
onas.onclick = function() {
   section1.classList.add('section1off');
   cepka1.classList.add('cepkaoff');
   cepka2.classList.add('cepkaoff');
   // wrapper.style.display = 'block';




   {
      "description": "Смотрел категории, не переходил в карточки товара. Покинул сайт без добавления товара в корзину.",
     "init_event": "pw:custom_handlers:start",
     "event_id": "abandoned_session",
     "trigger_ids": [
      4423
   ],
     "min_time": 0,
     "send_longest_view": false,
     "init_conditions": [
      {
         "urls": [
            {
               "type": "path",
               "search": "/catalog/",
               "comparing_type": "contain",
               "params": false
            }
         ],
         "black_list": false,
         "node_conditions": [
            {
               "type": "exists",
               "query": "main .filter"
            }
         ],
         "storage_conditions": false
      }
   ],
     "context": [
      {
         "urls": false,
         "node_conditions": [
            {
               "type": "exists",
               "query": "main .search",
               "attribute": "innerHTML",
               "match": "Поиск в каталоге"
            }
         ],
         "delay": false,
         "placeholders": [
            {
               "text": "category_title",
               "type": "selector",
               "options": {
                  "query": "main .search form input:first-child",
                  "attribute": "value"
               },
               "functions": false,
               "default_value": "этих товаров"
            }
         ],
         "image": false,
         "image_large": {
            "type": "selector",
            "options": false,
            "functions": false,
            "default_value": "https://cdn.push.world/storage/images/d633dc40/8404/11ea/873a/1911c5b5b6dd.webp"
         }
      }
   ],
     "interrupt_events": [
      {
         "event": "pw:customer_events:event",
         "details": [
            {
               "event_id": "abcart",
               "cart_is_empty": false
            }
         ],
         "stop": true
      },
      {
         "event": "pw:customer_events:abandoned_session",
         "details": [
            {
               "event_id": "start",
               "trigger_id": 4425
            }
         ],
         "stop": true
      }
   ],
     "disabled": false
   },



