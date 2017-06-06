# Small JSON Channel Reponse with Backend

# Docker

```
docker-compose up
```

## tests

cd test/
npm install
./node_modules/jasmine-node/bin/jasmine-node

json_reponse_spec.js

### Endpoint:


browse @ Localhost: 80 index.php


### Backend

PhpmYadmin 4.7

Admin @ localhost: 8080

example reponse:

# Response
```
index.php:

{"country":[{"id":1,"country_name":"Nederland"},{"id":2,"country_name":"Belgie"},{"id":3,"country_name":"Duitsland"}],"channel":[{"id":1,"channel_name":"first channel","channel_image":"https:\/\/stolpsys.nl\/img\/ceo_small.jpg","country_id":1,"channel_types":[{"id":1,"type":"Fashion","channel_id":"1"},{"id":2,"type":"Normal","channel_id":"1"}],"channel_mapping":[{"id":1,"field_name":"category","description":"category_path","field_type":1,"type_id":1},{"id":2,"field_name":"category_path","description":"category_path","field_type":1,"type_id":1},{"id":3,"field_name":"color","description":"color","field_type":2,"type_id":1},{"id":4,"field_name":"color_brite","description":"color_brite","field_type":2,"type_id":2}]},{"id":2,"channel_name":"2nd channel (erm_test)","channel_image":"http:\/\/example.com\/","country_id":2,"channel_types":[{"id":3,"type":"2nd chan first type","channel_id":"2"}],"channel_mapping":[{"id":5,"field_name":"ean","description":"ean","field_type":2,"type_id":1}]}]}


channel.php:

{"country":[{"id":1,"country_name":"Nederland"},{"id":2,"country_name":"Belgie"},{"id":3,"country_name":"Duitsland"}],"channel":[{"id":1,"channel_name":"Zanox","channel_image":"https:\/\/workathomefuture.com\/wp-content\/uploads\/2015\/02\/Zanox-1.png","country_id":1,"channel_types":[{"id":1,"type":"Normal","fk_channel_id":1}],"channel_mapping":[{"id":1,"field_name":"category","description":"category","field_type":1,"type_id":1},{"id":2,"field_name":"category_path","description":"category_path","field_type":1,"type_id":1},{"id":3,"field_name":"description","description":"description","field_type":1,"type_id":1},{"id":4,"field_name":"ean","description":"ean","field_type":1,"type_id":1},{"id":5,"field_name":"ean","description":"ean","field_type":1,"type_id":1},{"id":6,"field_name":"gender","description":"gender","field_type":1,"type_id":1},{"id":7,"field_name":"image","description":"image","field_type":1,"type_id":1},{"id":8,"field_name":"offerid","description":"offerid","field_type":1,"type_id":1},{"id":9,"field_name":"price","description":"price","field_type":1,"type_id":1},{"id":10,"field_name":"price_shipping","description":"price_shipping","field_type":1,"type_id":1},{"id":11,"field_name":"stock","description":"stock","field_type":1,"type_id":1},{"id":12,"field_name":"timetoship","description":"timetoship","field_type":1,"type_id":1},{"id":13,"field_name":"title","description":"title","field_type":1,"type_id":1},{"id":14,"field_name":"url","description":"url","field_type":1,"type_id":1},{"id":15,"field_name":"vendor","description":"vendor","field_type":1,"type_id":1},{"id":16,"field_name":"color","description":"color","field_type":2,"type_id":1},{"id":17,"field_name":"large_image","description":"large_image","field_type":2,"type_id":1},{"id":18,"field_name":"material","description":"material","field_type":2,"type_id":1},{"id":19,"field_name":"price_old","description":"price_old","field_type":2,"type_id":1},{"id":20,"field_name":"size","description":"size","field_type":2,"type_id":1},{"id":21,"field_name":"subcategory","description":"subcategory","field_type":2,"type_id":1},{"id":22,"field_name":"thirdcategory","description":"thirdcategory","field_type":2,"type_id":1},{"id":23,"field_name":"Optimized_for","description":"Optimized_for","field_type":2,"type_id":1},{"id":24,"field_name":"additional_image","description":"additional_image","field_type":2,"type_id":1},{"id":25,"field_name":"age_group","description":"age_group","field_type":2,"type_id":1},{"id":26,"field_name":"baseprice_unit","description":"baseprice_unit","field_type":2,"type_id":1},{"id":27,"field_name":"currency","description":"currency","field_type":2,"type_id":1},{"id":28,"field_name":"dimensions","description":"dimensions","field_type":2,"type_id":1},{"id":29,"field_name":"energy_info_link","description":"energy_info_link","field_type":2,"type_id":1},{"id":30,"field_name":"energy_label","description":"energy_label","field_type":2,"type_id":1},{"id":31,"field_name":"energy_label_logo","description":"energy_label_logo","field_type":2,"type_id":1},{"id":32,"field_name":"introduction_date","description":"introduction_date","field_type":2,"type_id":1},{"id":33,"field_name":"rating","description":"rating","field_type":2,"type_id":1},{"id":34,"field_name":"size_stock","description":"size_stock","field_type":2,"type_id":1},{"id":35,"field_name":"variant_id","description":"variant_id","field_type":2,"type_id":1}]}]}
```
