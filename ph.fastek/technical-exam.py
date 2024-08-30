from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

BASE_URL = "https://pg-sandbox.paymaya.com"
CHECKOUT_ENDPOINT = "/checkout/v1/checkouts"
API_KEY = "pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah"
AUTHORIZATION_HEADER = "Basic cGstWjBPU3pMdkljT0kyVUl2RGhkVEdWVmZSU1NlaUdTdG5jZXF3VUU3bjBBaDo="

@app.route('/create-checkout', methods=['POST'])
def create_checkout():
    pay_load = request.json
    url = f"{BASE_URL}{CHECKOUT_ENDPOINT}"
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": AUTHORIZATION_HEADER
    }
    res = requests.post(url, json=pay_load, headers=headers)
    if res.status_code == 200:
        return jsonify(res.json())
    else:
        return jsonify({"error": "Failed to create checkout", "details": res.text}), res.status_code

if __name__ == "__main__":
    app.run(debug=True)
