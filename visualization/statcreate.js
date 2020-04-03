function creategraph(statdata,id,winnername,losername){   
    var winloss=[]
    var win={}
    var lose={}
    win['name']=winnername
    lose['name']=losername
    var winner=[]
    var loser=[]
    for(var i=0;i<statdata.length;i++){      
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('Aces'):
                    winner.push(Number(statdata[i].winner))
                    loser.push(Number(statdata[i].loser))
                    break;
                case('1st Serve'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('1st Serve Points Won'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('2nd Serve Points Won'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('Break Points Converted'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
            }
        }
    }
    win['value']=winner
    lose['value']=loser
    winloss.push(win)
    winloss.push(lose)

    var winlossf=[]
    var winf={}
    var losef={}
    winf['name']=winnername
    losef['name']=losername
    var winnerf=[]
    var loserf=[]
    for(var i=0;i<statdata.length;i++){      
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('Double Faults'):
                    winnerf.push(Number(statdata[i].winner))
                    loserf.push(Number(statdata[i].loser))
                    break;
                case('1st Serve Return Points Won'):
                    winnerf.push(100-Number(statdata[i].wstat))
                    loserf.push(100-Number(statdata[i].lstat))
                    break;
                case('2nd Serve Return Points Won'):
                    winnerf.push(100-Number(statdata[i].wstat))
                    loserf.push(100-Number(statdata[i].lstat))
                    break;
                case('2nd Serve Points Won'):
                    winnerf.push(Number(statdata[i].wstat))
                    loserf.push(Number(statdata[i].lstat))
                    break;
                case('Break Points Saved'):
                    winnerf.push(Number(statdata[i].wbase))
                    loserf.push(Number(statdata[i].lbase))
                    break;
            }
        }
    }
    winf['value']=winnerf
    losef['value']=loserf
    winlossf.push(winf)
    winlossf.push(losef)

    option={
        legend:{
            data:[winnername,losername]
        },
        tooltip: {
            trigger: 'axis'
        },
        radar:[
        {
            indicator:[
                {text:'Ace球'},
                {text:'一发成功率(%)',max:100},
                {text:'一发得分率(%)',max:100},
                {text:'二发得分率(%)',max:100},
                {text:'破发成功率(%)',max:100},
            ],
            center:['25%','50%'],
            radius:100
        },
        {
            indicator:[
                {text:'双发失误次数'},
                {text:'一发接发球失误率(%)',max:100},
                {text:'二发接发球失误率(%)',max:100},
                {text:'被破发率(%)',max:100},
            ],
            center:['75%','50%'],
            radius:100
        }

    ],
        series:[
            {
                type:'radar',
                data:winloss,
                tooltip:{
                    trigger:'item'
                },
                areaStyle:{},
            },
            {
                type:'radar',
                data:winlossf,
                tooltip:{
                    trigger:'item'
                },
                areaStyle:{},
                radarIndex:1,
            }
        ]
    }
    return option
}