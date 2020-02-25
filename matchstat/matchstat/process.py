import re
from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse


def process(org):
    # result=[]
    # for t in org:
    org=org.strip()
    z=org.split('\r\n')
    test=[]
    for x in range(0,5):
        if x < len(z):
            test.append(z[x].strip())
        else:
            test.append("")
    # result.append(tuple(test))
    return tuple(test)


if __name__ == "__main__":
    with DB(db='matchstat') as db:
        db.execute("SELECT `winnerseed`,`loserseed`,`id`,`score` FROM `matchstat`.`ausopen`")
        result=db.fetchall()
        org=[]
        for row in result:
            resp=Selector(text=row[0])
            loser=Selector(text=row[1])
            mod=resp.re("\((\w+)\)")
            modl=loser.re("\((\w+)\)")
            if len(mod) >= 1:
                db.execute('UPDATE `matchstat`.`ausopen` SET `winnerseed-mod` = %s where `id`=%s',(mod[0],row[2]))           
            else:
                db.execute('UPDATE `matchstat`.`ausopen` SET `winnerseed-mod` = %s where `id`=%s', ("nonseed",row[2]))
            if len(modl) >= 1:
                db.execute('UPDATE `matchstat`.`ausopen` SET `loserseed-mod` = %s where `id`=%s',(modl[0],row[2]))           
            else:
                db.execute('UPDATE `matchstat`.`ausopen` SET `loserseed-mod` = %s where `id`=%s', ("nonseed",row[2]))

            sc=re.sub('</sup>',')',re.sub('<sup>','(',re.sub('<a.*?>|<!.*?>|</a>','',str(row[3]).strip())))
            t=process(sc)  
            # print(t)      
            db.execute('UPDATE `matchstat`.`ausopen` SET `1 set` = %s, `2 set` = %s,`3 set` = %s,`4 set` = %s,`5 set` = %s where `id`=%s',(t[0],t[1],t[2],t[3],t[4],row[2]))
            

            
