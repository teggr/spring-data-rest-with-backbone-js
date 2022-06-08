# Spring Data REST with Backbone JS

# Access the endpoint

```
// see empty list of orders
curl -S http://localhost:8080/orders

// create an order
curl -X POST -H "Content-Type: application/json" -d "{\"orderNumber\": \"5\", \"customer\": \"robin\"}" http://localhost:8080/orders

// create an item to add to the order
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"a great item\"}" http://localhost:8080/items

// add the item to the order
curl -X POST -H "Content-Type: text/uri-list" -d "http://localhost:8080/order/1" http://localhost:8080/items/2/order

```
# OneToMany

Not a lot of help here. See the links. Cleanest option does seem to be not to use bi-directional models.

Does seem a shame as this isn't necessarily how I'd model the API from scratch? Does this introduce some 2-phase commit issues as it requires at least two separate web requests?

# Links

* https://docs.spring.io/spring-data/rest/docs/current/reference/html/
* https://www.baeldung.com/spring-data-rest-relationships
* https://stackoverflow.com/questions/30464782/how-to-maintain-bi-directional-relationships-with-spring-data-rest-and-jpa
* https://reflectoring.io/relations-with-spring-data-rest/
* https://gigsterous.github.io/engineering/2018/01/26/spring-data-rest-projections.html

## Backbone

* https://backbonejs.org/#Getting-started
* https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer
* https://underscorejs.org/