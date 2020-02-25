import re
from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

if __name__ == "__main__":
    with DB(db='matchstat') as db:
        db.execute("SELECT `1 set`,`id` FROM `matchstat`.`ausopen_copy1` LIMIT 0,1")
        result=db.fetchall()
        t=result[0][0].strip()
        z=t.split('\r\n')
        test=[]
        for x in range(0,5):
            if x < len(z):
                test.append(z[x].strip())
            else:
                test.append("")

def process()