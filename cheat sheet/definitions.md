THERE ARE BRANCHES:
MAIN




## HTML DOM Reference
https://www.w3schools.com/Js/js_htmldom_element_reference.asp

## HTML DOM Events
https://www.w3schools.com/jsref/dom_obj_event.asp




---

# 1) MongoDB Commands (Shell / Native)

## Database Operations

* `show dbs` → list DBs
* `use dbName` → switch/create DB
* `db.dropDatabase()` → delete DB

---

## Collection Operations

* `show collections`
* `db.createCollection("users")`
* `db.users.drop()`

---

## Insert

* `db.users.insertOne({ name: "A" })`
* `db.users.insertMany([{...}, {...}])`

**Recall:** *Insert = add docs*

---

## Read (Query)

* `db.users.find({name: "A", age: 20})`
* `db.users.findOne({name: "A", age: 20})`
* `db.users.find({ age: { $gt: 20 } })`

### Operators

* `$gt, $lt, $gte, $lte` → compare  eg: db.users.find({ age: { $gt: 20 } })
* `$in (any), $nin (not any)` → 
  eg: db.users.find({ age: { $in: [20, 30] } })
* `$and, $or`  eg: db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] })
* `$exists` → check if field exists eg: db.users.find({ age: { $exists: true } })
* `$unset` → remove field eg: db.users.updateOne({name:"A"}, {$unset:{age:""}})

**Recall:** *find = filter JSON*

---

## Update

* `db.users.updateOne({name:"A"}, {$set:{age:25}})`
* `db.users.updateMany({name:"A"}, {$set:{age:25}})`
* `db.users.replaceOne({name:"A"}, {name:"B", age:25})`

### Update Operators

* `$set` → change   eg: db.users.updateOne({name:"A"}, {$set:{age:25}})
* `$inc` → increment  eg: db.users.updateOne({name:"A"}, {$inc:{age:25}})
* `$push` → add to array  eg: db.users.updateOne({name:"A"}, {$push:{age:25}})
* `$pull` → remove from array  eg: db.users.updateOne({name:"A"}, {$pull:{age:25}})

**Recall:** *update = modify fields*

---

## Delete

* `db.users.deleteOne({ name: "A" })`
* `db.users.deleteMany({name: "A"})`

**Recall:** *delete = remove docs*

---

## Indexing

* `db.users.createIndex({ name: 1 })`
* `db.users.getIndexes()`
* `db.users.dropIndex("name_1")`

**Recall:** *index = faster search*

---

### Stages

* `$match` → filter   eg: db.users.aggregate([{ $match: { age: { $gt: 20 } } }])
* `$group` → group  eg: db.users.aggregate([{ $group: { _id: "$name", count: { $sum: 1 } } }])
* `$sort`  eg: db.users.aggregate([{ $sort: { age: 1 } }])
* `$project`  eg: db.users.aggregate([{ $project: { name: 1, age: 1 } }])
* `$limit`  eg: db.users.aggregate([{ $limit: 10 }])

**Recall:** *aggregate = pipeline*

---

## Misc

* `db.stats()`
* `db.users.countDocuments()`
* `db.users.distinct("name")`

---

# 2) Mongoose Commands (Node.js ODM)

## Connection

* `mongoose.connect(uri)` 
code: mongoose.connect("mongodb://localhost:27017/mydb")
* `mongoose.disconnect()`
code: mongoose.disconnect()

**Recall:** *connect = start DB*

---

## Schema & Model

* `new mongoose.Schema({...})`
* `mongoose.model("User", schema)`

**Recall:** *Schema = structure, Model = class*

---

## Create

* `User.create(data)`
* `new User(data).save()`

**Recall:** *create = insert*

---

## Read

* `User.find()`
* `User.findOne()`
* `User.findById(id)`

### Query Helpers

* `.select()` → fields
* `.limit()`
* `.sort()`

**Recall:** *same as Mongo find*

---

## Update

* `User.updateOne()`
* `User.updateMany()`
* `User.findByIdAndUpdate(id, data)`

**Recall:** *find + update shortcut*

---

## Delete

* `User.deleteOne()`
* `User.deleteMany()`
* `User.findByIdAndDelete(id)`

---

## Validation

* `required: true`
* `minlength`, `maxlength`
* `enum`

**Recall:** *schema rules*

---

## Middleware (Hooks)

* `schema.pre("save", fn)`
* `schema.post("save", fn)`

**Recall:** *before/after triggers*

---

## Population (Relations)

* `.populate("field")`

**Recall:** *join like SQL*

---

## Aggregation

* `User.aggregate([...])`

---

## Index

* `schema.index({ name: 1 })`

---

## Misc

* `.lean()` → plain JS object (faster)
* `.exec()` → execute query
* `.toObject()` / `.toJSON()`

---

# Quick Memory Map

* MongoDB → **Raw queries (JSON)**
* Mongoose → **JS wrapper (Model-based)**

**Shortcut analogy:**

* MongoDB = *manual driving*
* Mongoose = *automatic car*
