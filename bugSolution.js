```javascript
// Solution using $setOnInsert and $inc
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$setOnInsert": {"counter": 0}, "$inc": {"counter": -1}});

//Alternative Solution: Check for field existence
const doc = db.collection('myCollection').findOne({"_id": ObjectId("651234567890")});
if(doc && doc.counter){
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"counter": -1}});
} else{
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$set": {"counter": 0}});
}
```