import re
from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

if __name__ == "__main__":
    # with DB(db='matchstat') as db:
    #     db.execute("SELECT `winnername`,`losername`,`round`,`id` FROM `matchstat`.`ausopen` WHERE `year`='2015.01.19 - 2015.02.01' ")
    #     result=db.fetchall()
    #     sq="INSERT INTO `matchstat`.`2015ausopenlinks`(`source`,`target`,`value`,`id`) VALUES(%s,%s,%s,%s)"
    #     for x in range(0,len(result)):
    #         if(result[x][2]=="Finals"):
    #             db.execute(sq,(result[x][1],result[x][0],"决赛",result[x][3]))
    #         if(result[x][2]=="Semi-Finals"):
    #             db.execute(sq,(result[x][1],result[x][0],"半决赛",result[x][3]))
    #         if(result[x][2]=="Quarter-Finals"):
    #             db.execute(sq,(result[x][1],result[x][0],"四分之一决赛",result[x][3]))
    #         if(result[x][2]=="Round of 16"):
    #             db.execute(sq,(result[x][1],result[x][0],"16强",result[x][3]))
    #         if(result[x][2]=="Round of 32"):
    #             db.execute(sq,(result[x][1],result[x][0],"32强",result[x][3]))
    #         if(result[x][2]=="Round of 64"):
    #             db.execute(sq,(result[x][1],result[x][0],"64强",result[x][3]))
    #         if(result[x][2]=="Round of 128"):
    #             db.execute(sq,(result[x][1],result[x][0],"128强",result[x][3]))
    # with DB(db='matchstat') as db:
    #     db.execute("SELECT `winnername`,`round` FROM `matchstat`.`ausopen` WHERE `year`='2015.01.19 - 2015.02.01' ")
    #     result=db.fetchall()
        
    #     db.execute("SELECT `losername` FROM `matchstat`.`ausopen` WHERE `round`='Round of 128' and `year`='2015.01.19 - 2015.02.01'")
    #     loser=db.fetchall()
        
    #     sq="INSERT IGNORE INTO `matchstat`.`2015ausopen`(`category`,`name`,`symbolSize`,`symbol`,`value`) VALUES(%s,%s,%s,%s,%s)"
    #     for x in range(0,len(result)):
    #         db.execute("SELECT `img` FROM `matchstat`.`imgofsportsman` WHERE `name`=%s",(result[x][0],))
    #         img=db.fetchall()
    #         if(result[x][1]=="Finals"):
    #             db.execute(sq,(0,result[x][0],180,"image://http://"+img[0][0],50))
    #         if(result[x][1]=="Semi-Finals"):
    #             db.execute(sq,(1,result[x][0],150,"image://http://"+img[0][0],40))
    #         if(result[x][1]=="Quarter-Finals"):
    #             db.execute(sq,(2,result[x][0],130,"image://http://"+img[0][0],30))
    #         if(result[x][1]=="Round of 16"):
    #             db.execute(sq,(3,result[x][0],110,"image://http://"+img[0][0],25))
    #         if(result[x][1]=="Round of 32"):
    #             db.execute(sq,(4,result[x][0],90,"image://http://"+img[0][0],20))
    #         if(result[x][1]=="Round of 64"):
    #             db.execute(sq,(5,result[x][0],70,"image://http://"+img[0][0],15))
    #         if(result[x][1]=="Round of 128"):
    #             db.execute(sq,(6,result[x][0],50,"image://http://"+img[0][0],10))
    #     for y in range(0,len(loser)):
    #         db.execute("SELECT `img` FROM `matchstat`.`imgofsportsman` WHERE `name`=%s",(loser[y][0],))
    #         img=db.fetchall()
    #         db.execute(sq,(7,loser[y][0],30,"image://http://"+img[0][0],5))   
    with DB(db='matchstat') as db:
        db.execute("SELECT * FROM `matchstat`.`h2h`")
        result=db.fetchall()  
        for x in range(0,len(result)):
            backhanded=str(result[x][9]).split()
            backhandedr=str(result[x][19]).split()
            if backhanded:            
                if backhandedr:                
                    firstname=re.findall("[A-Z][a-z]*",result[x][1])
                    lastname=re.findall("[A-Z][a-z]*",result[x][11])
                    namel=firstname[0]+' '+firstname[1]
                    namer=lastname[0]+' '+lastname[1]
                    # print(backhandedr[0])
                    db.execute('UPDATE `matchstat`.`imgofsportsman` SET `age`= %s,`height`= %s,`weight`= %s,`rank`= %s,`plays`= %s,`backhand`= %s,`turnpro`= %s where `name`=%s', (result[x][4],result[x][6],result[x][7],result[x][3],result[x][8],backhanded[0],result[x][10],namel))
                    db.execute('UPDATE `matchstat`.`imgofsportsman` SET `age`= %s,`height`= %s,`weight`= %s,`rank`= %s,`plays`= %s,`backhand`= %s,`turnpro`= %s where `name`=%s', (result[x][14],result[x][16],result[x][17],result[x][13],result[x][18],backhandedr[0],result[x][20],namer))
            
            