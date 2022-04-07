db.restaurant.find().pretty()
db.restaurant.find({},{_id:0, restaurant_id:1, borough:1, cuisine:1})
db.restaurant.find({},{restaurant_id:1, borough:1, cuisine:1})
db.restaurant.find({},{_id:0, restaurant_id:1, borough:1, address:{zipcode:1}})
db.restaurant.find({borough:"Bronx"}).pretty()
db.restaurant.find({borough:"Bronx"}).limit(5).pretty()
db.restaurant.find({borough:"Bronx"}).skip(5).limit(5).pretty()
db.restaurant.find({"grades.score":{$gt:90}}).pretty()
db.restaurant.find({grades :{$elemMatch:{score:{$gt:80, $lt:90}}}}).pretty()
db.restaurant.find({"address.coord.0":{$gt: -95.754168}}).pretty()
