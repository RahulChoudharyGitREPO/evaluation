http://localhost:5000/api/users/signup 
To Signup use the uper Link / post
{
    "name": "Doe",
        "email": "Doe@example.com",
            "password": "123",
                "role": "Admin"// user 
}

http://localhost:5000/api/users/login
/post
To Login use this endpoint
{

    "email": "Doe@example.com",
        "password": "123",
           
}

to manage stocks use below link
    / post
http://localhost:5000/api/stocks
{
    "name": "Microsoft Corporation",
        "symbol": "MSFT",
            "initialPrice": 290
}

to buy the stocks use this endpoint
    / post
http://localhost:5000/api/orders/buy
{
    "stock": "66d43bc91908f83d17ae3d13",
        "quantity": 10,
            "price": 1400
}

To sell use this endpint
http://localhost:5000/api/orders/sell
/post
{
    "stock": "66d43bc91908f83d17ae3d13",
        "quantity": 5,
            "price": 1550
}
to get the market data use this enpoint / get
http://localhost:5000/api/market/data

to get the market summary use this endpoint / get
http://localhost:5000/api/market/summary


my console requests
POST / api / users / signup 201 259.251 ms - 403
POST / api / users / login 200 260.104 ms - 403
POST / api / orders / buy 201 9.903 ms - 206
POST / api / orders / sell 201 6.077 ms - 206
GET / api / market / data 200 3.399 ms - 587

you can perform user endpoints to they are also fully working i did mostly admin operations

you can even test or try to access the admin pannel but u wont be able to beacuse of the proper authntication


