from matchstat.database import DB
# from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

def geturl():
    urlsId=[]
    x="https://www.atptour.com"
    with DB(db='matchstat') as db:
        db.execute("SELECT `score`,`id` FROM `matchstat`.`wimbledon`")
        result=db.fetchall()
        for row in result:
            resp=Selector(text=row[0])
            # print(row[1],resp.xpath("//a/@href").get(),"\n")
            if resp.xpath("//a/@href").get() is not None:
                new=(x+resp.xpath("//a/@href").get(),row[1])
            else:
                db.execute('INSERT INTO `matchstat`.`wmatchstat`(`id`, `statcateg`,`statslabel`,`winner`,`loser`) VALUES (%s,%s,%s,%s,%s)',(row[1],"W/O","W/O","W/O","W/O"))
            urlsId.append(new)
        # print(urlsId)
    return urlsId

def h2hurl():
    urlsID=[]
    x="https://www.atptour.com"
    with DB(db='matchstat') as db:
        db.execute("SELECT `h2hurl` FROM `matchstat`.`ausopen`")
        result=db.fetchall()
        for row in result:
            new=(x+row[0],row[0])
            urlsID.append(new)
        # print(urlsID)
    return urlsID

if __name__ == "__main__":
    # geturl()
    h2hurl()