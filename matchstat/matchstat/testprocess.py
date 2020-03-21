import re
from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

if __name__ == "__main__":
    with DB(db='matchstat') as db:
        db.execute("SELECT `winnername`,`losername`,`round`,`id` FROM `matchstat`.`ausopen` WHERE `year`='2020.01.20 - 2020.02.03' ")
        result=db.fetchall()
        sq="INSERT INTO `matchstat`.`2020ausopenlinks`(`source`,`target`,`value`,`id`) VALUES(%s,%s,%s,%s)"
        for x in range(0,len(result)):
            if(result[x][2]=="Final"):
                db.execute(sq,(result[x][1],result[x][0],"决赛",result[x][3]))
            if(result[x][2]=="Semifinals"):
                db.execute(sq,(result[x][1],result[x][0],"半决赛",result[x][3]))
            if(result[x][2]=="Quarterfinals"):
                db.execute(sq,(result[x][1],result[x][0],"四分之一决赛",result[x][3]))
            if(result[x][2]=="Round of 16"):
                db.execute(sq,(result[x][1],result[x][0],"16强",result[x][3]))
            if(result[x][2]=="Round of 32"):
                db.execute(sq,(result[x][1],result[x][0],"32强",result[x][3]))
            if(result[x][2]=="Round of 64"):
                db.execute(sq,(result[x][1],result[x][0],"64强",result[x][3]))
            if(result[x][2]=="Round of 128"):
                db.execute(sq,(result[x][1],result[x][0],"128强",result[x][3]))
    # with DB(db='matchstat') as db:
    #     db.execute("SELECT `winnername`,`round` FROM `matchstat`.`ausopen` WHERE `year`='2020.01.20 - 2020.02.03' ")
    #     result=db.fetchall()
        
    #     db.execute("SELECT `losername` FROM `matchstat`.`ausopen` WHERE `round`='Round of 128'")
    #     loser=db.fetchall()
        
    #     sq="INSERT IGNORE INTO `matchstat`.`2020ausopen`(`category`,`name`,`symbolSize`,`symbol`) VALUES(%s,%s,%s,%s)"
    #     for x in range(0,len(result)):
    #         db.execute("SELECT `img` FROM `matchstat`.`imgofsportsman` WHERE `name`=%s",(result[x][0],))
    #         img=db.fetchall()
    #         if(result[x][1]=="Final"):
    #             db.execute(sq,(0,result[x][0],150,img[0][0]))
    #         if(result[x][1]=="Semifinals"):
    #             db.execute(sq,(1,result[x][0],130,img[0][0]))
    #         if(result[x][1]=="Quarterfinals"):
    #             db.execute(sq,(2,result[x][0],110,img[0][0]))
    #         if(result[x][1]=="Round of 16"):
    #             db.execute(sq,(3,result[x][0],90,img[0][0]))
    #         if(result[x][1]=="Round of 32"):
    #             db.execute(sq,(4,result[x][0],70,img[0][0]))
    #         if(result[x][1]=="Round of 64"):
    #             db.execute(sq,(5,result[x][0],50,img[0][0]))
    #         if(result[x][1]=="Round of 128"):
    #             db.execute(sq,(6,result[x][0],30,img[0][0]))
    #     for y in range(0,len(loser)):
    #         db.execute("SELECT `img` FROM `matchstat`.`imgofsportsman` WHERE `name`=%s",(loser[y][0],))
    #         img=db.fetchall()
    #         db.execute(sq,(7,loser[y][0],90,img[0][0]))    
