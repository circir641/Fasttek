To activate the virtual environment and run the Flask application:
Open Command Prompt or Terminal.
Navigate to your project directory:

"C:\Users\user\Desktop\ph.fastek"

Activate the virtual environment:

"env\Scripts\activate"

Run the Flask application:

"python main.py run"

To create a checkout using curl:

Open Command Prompt or Terminal.
Execute the following curl command to send a POST request:
curl -X POST http://127.0.0.1:5000/create-checkout -H "Content-Type: application/json" -d "{\"totalAmount\": {\"value\": 10, \"currency\": \"PHP\"}, \"items\": [{\"amount\": {\"value\": 10}, \"totalAmount\": {\"value\": 10}, \"name\": \"Pinakbet\", \"quantity\": \"10\", \"code\": \"CVG-096732\", \"description\": \"bubble gum\"}], \"requestReferenceNumber\": \"5fc10b93-bdbd-4f31-b31d-4575a3785009\"}"