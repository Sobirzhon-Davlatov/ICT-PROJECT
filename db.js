// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="D:\SIShop\data\db"
// "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
//use SIShop

db.main_categories.insertMany([{
        "_id": 0,
        "name": "Daily"
    },
    {
        "_id": 1,
        "name": "Services"
    },
    {
        "_id": 2,
        "name": "Devices"
    },
    {
        "_id": 3,
        "name": "KBTU"
    }
])

db.minor_categories.insertMany([{
        "_id": 1,
        "name": "Clothes",
        "main_category": "Daily"
    },
    {
        "_id": 2,
        "name": "Dishes",
        "main_category": "Daily"
    },
    {
        "_id": 3,
        "name": "Laptops",
        "main_category": "Devices"
    },
    {
        "_id": 4,
        "name": "Smartphones",
        "main_category": "Devices"
    },
])

db.products.insertMany([{
        "_id": 1,
        "name": 'Calculus 1',
        "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSza0ZTFavonFN-ooJdQXjeNpykWwDMi18uTVD_PuJ_TfQQjQVT&usqp=CAU',
        "price": '',
        "description": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        "help": 'Baisholanov Alikhan Gumar Oralhan',
        "productList": 0
    },
    {
        "_id": 2,
        "name": 'Calculus 2',
        "photo": 'assets/photo_2020-04-23_12-29-47 (2).jpg',
        "price": '',
        "description": '',
        "productList": 0
    },
    {
        "_id": 3,
        "name": 'Physics 1',
        "photo": 'assets/photo_2020-04-23_12-29-51.jpg',
        "price": '',
        "description": '',
        "productList": 0
    },
    {
        "_id": 4,
        'name': 'Physics 2',
        'photo': 'https://assets.change.org/photos/2/qm/no/pZqMNOtaVepwIGC-800x450-noPad.jpg?1583140443',
        'price': '',
        'description': '',
        'productList': 0
    },
    {
        "_id": 5,
        'name': 'Lenovo Legion Y540',
        'photo': 'https://forcecom.kz/upload/iblock/088/088f219e63dd65a5e81f8c68e99f07ae.jpg',
        'price': '350 000',
        'description': 'Lenovo',
        'productList': 1,
    },
    {
        "_id": 6,
        'name': 'Acer Nitro 5',
        'photo': '',
        'price': '',
        'description': '',
        'productList': 1,
    },
    {
        "_id": 7,
        'name': 'Sneakers',
        'photo': '',
        'price': '',
        'description': '',
        'productList': 2,
    },
    {
        "_id": 8,
        'name': 'T-shirt',
        'photo': '',
        'price': '',
        'description': '',
        'productList': 2,
    },
    {
        "_id": 9,
        name: 'Hoodie',
        photo: '',
        price: '',
        description: '',
        productList: 3,
    },
])