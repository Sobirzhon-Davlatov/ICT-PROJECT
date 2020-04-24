// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="D:\SIShop\data\db"
// "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
//use itproger

db.admins.insertOne({
    "name": "jorj",
    "email": "kz",
    "age": 32,
    "favColors": ["green", "blue", "red"],
    "birthday": new Date('1996-11-2')
})
db.users.insertMany([{
            "name": "jorj",
            "email": "kz",
            "age": 32,
            "favColors": ["green", "blue", "red"],
            "birthday": new Date('1996-11-2')
        },
        {
            "name": "jorj",
            "email": "kz",
            "age": 32,
            "favColors": ["green", "blue", "red"],
            "birthday": new Date('1996-11-2')
        },
    ])
    //------------------------------------Insert---------------------------------------------------------------------
db.users.find() //все элементы таблицы
db.users.find().limit(2) //2 элемента таблицы
db.users.find({}, { _id: 0 }).limit(2) //выборка двух элементов без айди
db.users.find({}, { _id: 0 }).sort({ age: 1 }) // or -1 ask,desk
db.users.find({}, { _id: 0 }).sort({ age: 1 }, { name: 1 }) // or -1 ask,desk + sort by name
db.users.find({ age: 22 }, { _id: 0 }) //выбор юзеров с возрастом 22
db.users.find({ $or: [{ age: 22 }, { name: "jorj" }] }, { _id: 0 }) //or age=22 or name=jorj
db.users.find({ $or: [{ age: { $lt: 42 } }, { name: "jorj" }] }, { _id: 0 }) //возраст меньше чем 42 или имя = джордж $gt если больше
    //$eq=equal ,$gte=greater or equal,$lte=less or equal,$ne=not equal
db.users.find({ name: { $in: ["jack", "jorj"] } }, { _id: 0 }) //элементы только с такими именами 
db.users.find({ child: { $exists: true } }, { _id: 0 }) //у кого есть чайлд
db.users.find({ favColors: { $size: 3 } }, { _id: 0 }) //если есть массив с размером 3 
db.users.find({ "favColors.1": "blue" }, { _id: 0 }) //если есть массив со вторым элементом blue
    //-----------------------------------------update--------------------------------------------------------------------
db.main_categories.updateOne({ _id: 1 }, { $set: { name: "dnd" } })
db.main_categories.replaceOne({ id: 1 }, { id: 1, name: "Daily" })