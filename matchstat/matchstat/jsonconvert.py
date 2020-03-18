from database import DB
import json

if __name__ == "__main__":
    with DB(db='matchstat') as db:
        db.execute("SELECT * FROM `matchstat`.`h2h`")
        result=db.fetchall()
        fields=db.description
        
        column_list = []
        for i in fields:   
            column_list.append(i[0])
        
        with open('matchstat/matchstat/json/h2h.json','w+') as f:
            for row in result:
                data={}
                for i in range(len(column_list)):
                    data[column_list[i]]=str(row[i])
                jsondata=json.dumps(data,ensure_ascii=False)
                f.write(jsondata+'\n')
        f.close()
