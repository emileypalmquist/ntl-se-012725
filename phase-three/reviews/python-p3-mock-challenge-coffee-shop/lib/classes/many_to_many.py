import ipdb

class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if hasattr(self, '_name'):
            print('Cannot change name')
        else:
            if isinstance(new_name, str):
                if len(new_name) >= 3:
                    self._name = new_name
                else:
                    print('name must be 3 or more characters.')
            else:
                print('name must be a string.')
        
    def orders(self):
        return [order for order in Order.all if order.coffee == self]
        # coffees_orders = []

        # for order in Order.all:
        #     if order.coffee == self:
        #         coffees_orders.append(order)

        # return coffees_orders
    
    def customers(self):
        return list(set(order.customer for order in self.orders()))

        # coffees_customers = []

        # for order in self.orders():
        #     if order.customer not in coffees_customers:
        #         coffees_customers.append(order.customer)

        # return coffees_customers
    
    def num_orders(self):
        return len(self.orders())
    
    def average_price(self):
        if self.num_orders() == 0: return 0
        return sum([order.price for order in self.orders()]) / self.num_orders()

    def __repr__(self):
        return f'<Coffee name={self.name}>'

class Customer:
    all = []

    def __init__(self, name):
        self.name = name

        Customer.add_new_customer(self)

    @classmethod
    def add_new_customer(cls, new_customer):
        cls.all.append(new_customer)

    # def get_name(self):
    #     return self._name

    # def set_name(self, new_name):
    #     if type(new_name) == str:
    #         if 1 <= len(new_name) <= 15:
    #             self._name = new_name
    #         else:
    #             print('name must be between 1 and 15 characters.')
    #     else:
    #         print('name must be a string.')

    # name = property(get_name, set_name)

    @property   
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if type(new_name) == str:
            if 1 <= len(new_name) <= 15:
                self._name = new_name
            else:
                raise ValueError('name must be between 1 and 15 characters.')
        else:
            raise TypeError('Name must be a string')

    def orders(self):
        return [order for order in Order.all if order.customer == self]
    
    def coffees(self):
        return list(set(order.coffee for order in self.orders()))
    
    def create_order(self, coffee, price):
        return Order(customer=self, coffee=coffee, price=price)

    def __repr__(self):
        return f'<Customer name={self.name}>'

    @classmethod
    def most_aficionado(cls, coffee):
        # keep track of highest spent and by who(customer)
        # look at every customer created
        # for each customer find the orders for the specific coffee
            # add up the prices of the orders for the coffee
            # if greater than highest spent set the highest to the new price set customer to that customer
        # return customer
        cust = None
        highest_spent = 0
        for customer in cls.all:
            total_spent = sum([order.price for order in customer.orders() if order.coffee == coffee])
            if total_spent > highest_spent:
                highest_spent = total_spent
                cust = customer
        return cust


    
class Order:
    all = []

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price

        Order.add_new_order(self)

    @classmethod
    def add_new_order(cls, new_order):
        cls.all.append(new_order)

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, new_price):
        if hasattr(self, '_price'):
            print('Cannot change the price.')
        else:
            if isinstance(new_price, float):
                if 1.0 <= new_price <= 10.0:
                    self._price = new_price
                else:
                    print('Price must be between 1.00 and 10.00.')
            else:
                print('Price must be a float')

    @property
    def customer(self):
        return self._customer

    @customer.setter
    def customer(self, new_customer):
        if isinstance(new_customer, Customer):
            self._customer = new_customer
        else:
            print('Customer must be a Customer instance')

    @property
    def coffee(self):
        return self._coffee

    @coffee.setter
    def coffee(self, new_coffee):
        if isinstance(new_coffee, Coffee):
            self._coffee = new_coffee
        else:
            print('coffee must be a Coffee instance')

    def __repr__(self):
        return f'<Order customer={self.customer.name} coffee={self.coffee.name} price={self.price}>'