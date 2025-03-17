#!/usr/bin/env python3
import ipdb

from classes.many_to_many import Customer
from classes.many_to_many import Order
from classes.many_to_many import Coffee

if __name__ == '__main__':
    print("HELLO! :) let's debug")

    em = Customer('Emiley')
    # ka = Customer('')
    car = Customer('Carisa')

    mocha = Coffee('Mocha')
    latte = Coffee('Latte')
    flat_white = Coffee('Flat White')

    o1 = Order(em, mocha, 5.00)
    o2 = Order(coffee=latte, price=10.0, customer=em)
    o3 = Order(coffee=latte, price=8.0, customer=em)
    o4 = Order(coffee=latte, price=8.0, customer=em)
    o5 = Order(coffee=latte, price=10.0, customer=car)

    o6 = car.create_order(mocha, 7.0)

    print(Customer.most_aficionado(latte))
    print('should be Emiley')  # Emiley
    print(Customer.most_aficionado(mocha))  
    print('should be Carisa') # Carisa

    ipdb.set_trace()
