# Spring Data REST with Backbone JS

# Access the endpoint

```
curl -S http://localhost:8080/orders

curl -X POST -H "Content-Type: application/json" -d "{\"orderNumber\": \"5\", \"customer\": \"robin\"}" http://localhost:8080/orders

curl -X PATCH -H "Content-Type: application/json" -d "{\"items\":[]}" http://localhost:8080/orders/1

curl -S http://localhost:8080/orders/1
```

# Links

* https://docs.spring.io/spring-data/rest/docs/current/reference/html/
* https://www.baeldung.com/spring-data-rest-relationships