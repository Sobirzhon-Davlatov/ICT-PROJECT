from flask import Flask,render_template,Response,jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS,cross_origin
import json

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/SIShop"
mongo=PyMongo(app)

@app.route('/products')
@cross_origin()
def getProducts():
    products=mongo.db.products.find()
    result=[]
    for field in products:
        result.append({"ID":int(field['_id']),"name":field['name'],"photo":field['photo'],"price":field['price'],"description":field['description'],"productList":int(field['productList'])})
    return jsonify(result)
    # return json.dumps(result)

@app.route('/main_categories')
@cross_origin()
def getMainCategories():
    categories=mongo.db.main_categories.find()
    result=[]
    for field in categories:
        result.append({"ID":int(field['_id']),"name":field['name']},)
    return jsonify(result)

@app.route('/minor_categories')
def getMinorCategories():
    categories=mongo.db.minor_categories.find()
    result=[]
    for field in categories:
        result.append({"ID":int(field['_id']),"name":field['name'],"main_category":field['main_category']})
    return jsonify(result)

@app.route('/minor_categories/<minor_category_name>')
def getProductsByMinorCategory(minor_category_name):
    products=mongo.db.products.find({'second_category':minor_category_name})
    result=[]
    for field in products:
        result.append({"ID":int(field['_id']),"name":field['name'],"first_category":field['first_category'],"second_category":field['second_category']},)
    return jsonify(result)

@app.route('/<main_category_name>')
def getProductsByMainCategory(main_category_name):
    products=mongo.db.products.find({'first_category':main_category_name})
    result=[]
    for field in products:
        result.append({"ID":int(field['_id']),"name":field['name'],"first_category":field['first_category'],"second_category":field['second_category']},)
    return jsonify(result)

@app.route('/<main_category_name>/minor_categories')
def getMinorCategoriesByMain(main_category_name):
    categories=mongo.db.minor_categories.find({'main_category':main_category_name})
    result=[]
    for field in categories:
        result.append({"ID":int(field['_id']),"name":field['name'],"main_category":field['main_category']})
    return jsonify(result)

@app.route('/<int:category_id>')
def getOneCategoryByMain(category_id):
    category=mongo.db.main_categories.find_one({'_id':category_id})
    result={"ID":int(category['_id']),"name":category['name']}
    return jsonify(result)



if __name__ == "__main__":
    app.run(port=8000,debug=True)
