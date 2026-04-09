
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

* `db.users.find()`
* `db.users.findOne()`
* `db.users.find({ age: { $gt: 20 } })`

### Operators

* `$gt, $lt, $gte, $lte` → compare
* `$in, $nin` → list check
* `$and, $or`

**Recall:** *find = filter JSON*

---

## Update

* `db.users.updateOne({name:"A"}, {$set:{age:25}})`
* `db.users.updateMany()`
* `db.users.replaceOne()`

### Update Operators

* `$set` → change
* `$inc` → increment
* `$push` → add to array
* `$pull` → remove from array

**Recall:** *update = modify fields*

---

## Delete

* `db.users.deleteOne({ name: "A" })`
* `db.users.deleteMany({})`

**Recall:** *delete = remove docs*

---

## Indexing

* `db.users.createIndex({ name: 1 })`
* `db.users.getIndexes()`
* `db.users.dropIndex("name_1")`

**Recall:** *index = faster search*

---

### Stages

* `$match` → filter
* `$group` → group
* `$sort`
* `$project`
* `$limit`

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
* `mongoose.disconnect()`

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
