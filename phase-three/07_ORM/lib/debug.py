import ipdb

from models.owner import Owner
from models.pet import Pet

Owner.create_table()
Pet.create_table()

# emiley = Owner(name='Emiley', age=29)
# emiley.save()

emiley = Owner.create(name='Emiley', age=30, experience=5)
ayva = Owner.create(name='Ayva', age=18)
carisa = Owner.create(name='Carisa', age= 23)
kailey = Owner.create(name='Kailey', age= 23)

# emiley.name = "Emiley P"
# emiley.update()
# emiley.delete()

# Owner.all()
# Owner.find_by_id(3)
# Owner.find_by_id(10)

apollo = Pet.create(name="Apollo", age=2, breed='Dog', owner_id=emiley.id)
bailey = Pet.create(name="Bailey", age=11, breed='Dog', owner_id=emiley.id)
daisy = Pet.create(name='Daisy', breed='Fish', owner_id=ayva.id)
dayna = Pet.create(name='Dayna', breed='Dog', owner_id=carisa.id)
pet_max = Pet.create(name='Max', breed='Dog', owner_id=kailey.id)

ipdb.set_trace()
Owner.delete_all()
Pet.delete_all()
# Pet.drop_table()
# Owner.drop_table()