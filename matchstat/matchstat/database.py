import mysql.connector
# import pymysql

# class DataBase():
#     '''数据库操作'''
#     def __init__(self):
#         self.insertSql = ("INSERT INTO data (mid, name, "
#             "content, reportCount, commentCount, "
#             "attitudesCount, url) VALUES (%s, %s, %s, %s, %s, %s, %s)")
#         self.querySql = ("SELECT %s FROM data")

#     def insert(self,val):
#         '''数据库插入数据，接受数据为列表，元素为元组
#         (mid, name, content, reportCount, commentCount, attitudesCount)'''
#         with DB() as db:
#             try:
#                 db.executemany(self.insertSql, val)
#             except Exception as e:
#                 print("数据库写入错误",e)

#     def find(self,val="*"):
#         '''数据库查询（所有数据），可以输入指定字段'''
#         with DB() as db:
#             try:
#                 db.execute(self.querySql)
#                 result=db.fetchall()
#                 return result
#             except Exception as e:
#                 print("数据库读取错误",e)

class DB():
    '''连接数据库同步提交关闭连接一条龙'''
    def __init__(self, db="getdata"):
        try:
            self.mydb = mysql.connector.connect(
                host="localhost",
                user="root",
                passwd="beast1016",
                database=db
            )
            self.mycursor = self.mydb.cursor()
        except Exception as e:
            print("数据库连接错误",e)
    
    def __enter__(self):
        return self.mycursor

    def __exit__(self, exc_type, exc_value, exc_trace):
        self.mydb.commit()
        self.mycursor.close()
        self.mydb.close()

