# -*- coding: UTF-8 -*-
# from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

if __name__ == "__main__":
    with open('filename.html',encoding='utf-8') as body:
        text=body.read()
        response=Selector(text=text)
        year=response.xpath('//span[@class="tourney-dates"]/text()').get()
        print(year)
        
        # matchn=response.xpath('//*[@id="scoresResultsContent"]/div/table/thead/tr/th/text()').getall()
        # y=response.xpath('//*[@id="scoresResultsContent"]/div/table/tbody').getall()
        # sq='INSERT INTO `matchstat`.`test`(`winnerseed`, `winnername`, `loserseed`, `losername`, `scores`, `match`) VALUES (%s,%s,%s,%s,%s,%s) '
        # if y is not None:
        #     with DB(db='matchstat') as db:
        #         for tr in range(0,len(y)):
        #             TR=Selector(text=y[tr]).xpath('//tr').getall()
        #             scores=Selector(text=y[tr]).xpath('//tr/td[@class="day-table-score"]/a').getall()              
        #             for td in range(0,len(scores)):
        #                 winners=Selector(text=TR[td]).xpath('//td[@class="day-table-seed"]').getall()          
        #                 winnern=Selector(text=TR[td]).xpath('//td[@class="day-table-name"]/a/text()').getall()                  
        #                 db.execute(sq,(winners[0],winnern[0],winners[1],winnern[1],scores[td],matchn[tr]))
                    
                    
