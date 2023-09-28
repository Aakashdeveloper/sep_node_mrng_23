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
> http://localhost:8771/filters/1?lcost=300&hcost=900&sort=-1

(GET) Pagination
> http://localhost:8771/filters/1?skip=6&limit=2

//page3
(GET) Details of restaurants
> http://localhost:8771/details/651394d817e34ede35314a51
(GET) Menu wrt Restaurants 
> http://localhost:8771/menu/6

//Page4
(POST) Details of selected menu("id":[2,3,4])
> http://localhost:8771/menuDetails
{
	"id":[4,7,12,16]
}


(POST) Place the order
> http://localhost:8771/placeOrder
{
	"orderId" : 2,
	"name" : "Nikita",
	"email" : "nikki@gmail.com",
	"address" : "Hom 25",
	"phone" : 8934645457,
	"cost" : 166,
	"menuItem" : [
		3,34,5
	],
	"status" : "Pending"
}


//Page5
(GET) Get all the order/orders wrt email
> http://localhost:8771/orders
> http://localhost:8771/orders?email=a@a.com

(PUT) Update order status
> http://localhost:8771/updateOrder
{
    "_id":"6514dea53e675ad065930924",
    "status":"On the Way"
}

(DELETE) Delete orders
> http://localhost:8771/deleteOrder
{
    "_id":"6514dedf3e675ad065930926"
}