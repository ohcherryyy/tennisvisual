from database import DB

with DB(db="徐张权大垃圾") as db:
    sql="INSERT INTO test (author,borndate,description) VALUES (%s,%s,%s)"
    val=[(""),()]
    db.executemany()