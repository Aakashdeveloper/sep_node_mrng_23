// Page 1

(GET) List of all cities
> http://localhost:8771/location

(GET) List of all Restaurants
> http://localhost:8771/restaurants 

(GET) Restaurants wrt 
> http://localhost:8771/restaurants?stateId=3

(GET) List of all meals
> http://localhost:8771/mealType

// Page2
(GET) Restaurants wrt meal
> http://localhost:8771/restaurants?mealId=2
> http://localhost:8771/restaurants?mealId=2&stateId=1

(GET) Restaurants wrt meal + Cuisine
> http://localhost:8771/filters/2?cuisineId=2

(GET) Restaurants wrt meal + Cost
> http://localhost:8771/filters/2?hcost=1200&lcost=500

(GET) Sort on basis of price
(GET) Pagination

//page3
(GET) Details of restaurants
(GET) Menu wrt Restaurants 

//Page4
(POST) Details of selected menu("id":[2,3,4])
(POST) Place the order

//Page5
(GET) Get all the order/orders wrt email
(PUT) Update order status
(DELETE) Delete orders