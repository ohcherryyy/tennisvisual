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
        title:{
            text:'制胜分与失误表现',
            left:'auto'
        },
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
            radius:80
        },
        {
            indicator:[
                {text:'双发失误次数'},
                {text:'一发接发球失误率(%)',max:100},
                {text:'二发接发球失误率(%)',max:100},
                {text:'被破发率(%)',max:100},
            ],
            center:['75%','50%'],
            radius:70
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

function servicecreate(statdata,id,winnername,losername){
    var ace=[]
    var df=[]
    var firstsuccess=[]
    var firstpoints=[]
    var secondpoints=[]
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('Aces'):
                    ace.push(Number(statdata[i].winner))
                    ace.push(Number(statdata[i].loser))
                    break;
                case('1st Serve'):
                    firstsuccess.push(Number(statdata[i].wactual))
                    firstsuccess.push(Number(statdata[i].lactual))
                    break;
                case('1st Serve Points Won'):
                    firstpoints.push(Number(statdata[i].wactual))
                    firstpoints.push(Number(statdata[i].lactual))
                    break;
                case('2nd Serve Points Won'):
                    secondpoints.push(Number(statdata[i].wactual))
                    secondpoints.push(Number(statdata[i].lactual))
                    break;
                case('Double Faults'):
                    df.push(Number(statdata[i].winner))
                    df.push(Number(statdata[i].loser))
                    break;
            }
        }
    }
    
    option = {
        title:{
            text:'发球表现',
            left:'auto'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow' 
            }
        },
        legend: {
            data: ['Ace球', '双发失误次数', '一发成功次数', '一发得分次数', '二发得分次数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: {
            type: 'category',
            data: [winnername,losername]
        },
        series: [
            {
                name: 'Ace球',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',

                },
                data: ace
            },
            {
                name: '双发失误次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: df
            },
            {
                name: '一发成功次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: firstsuccess
            },
            {
                name: '一发得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',
                    
                },
                data: firstpoints
            },
            {
                name: '二发得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: secondpoints
            }
        ]
    }
    return option;
}

function returncreate(statdata,id,winnername,losername){ 
    var firstpoints=[]
    var secondpoints=[]
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('1st Serve Return Points Won'):
                    firstpoints.push(Number(statdata[i].wactual))
                    firstpoints.push(Number(statdata[i].lactual))
                    break;
                case('2nd Serve Return Points Won'):
                    secondpoints.push(Number(statdata[i].wactual))
                    secondpoints.push(Number(statdata[i].lactual))
                    break;
            }
        }
    }
    
    option = {
        title:{
            text:'接发球表现',
            left:'auto'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow' 
            }
        },
        legend: {
            data: ['一发接发球得分次数', '二发接发球得分次数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: {
            type: 'category',
            data: [winnername,losername]
        },
        series: [
            {
                name: '一发接发球得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',

                },
                data: firstpoints
            },
            {
                name: '二发接发球得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: secondpoints
            },
        ]
    }
    return option;
}

function breakpointscreate(statdata,id,winnername,losername){
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){    
            if(statdata[i].statslabel=='Break Points Saved')
            {
                winner=Number(statdata[i].wstat)
                wlabel=statdata[i].winner
                loser=Number(statdata[i].lstat)
                llabel=statdata[i].loser
            }
            }
        }
    
    option = {
        title:{
            text:'成功挽救破发点',
            left:'auto'
        },
        series: [
            {
                name: 'winner',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['40%', '50%'],
                data: [
                    {value:winner},
                    {value:100-winner}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:winnername+':\n'+wlabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            },
            {
                name: 'loser',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['60%', '50%'],
                data: [
                    {value:loser,},
                    {value:100-loser,name:''}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:losername+':\n'+llabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
                emphasis:{
                    
                }
            }
        ]
    };
    return option;
}

function breakpointrcreate(statdata,id,winnername,losername){
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){    
            if(statdata[i].statslabel=='Break Points Converted')
            {
                winner=Number(statdata[i].wstat)
                wlabel=statdata[i].winner
                loser=Number(statdata[i].lstat)
                llabel=statdata[i].loser
            }
            }
        }
    
    option = {
        title:{
            text:'成功破发',
            left:'auto'
        },
        series: [
            {
                name: 'winner',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['40%', '50%'],
                data: [
                    {value:winner},
                    {value:100-winner}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:winnername+':\n'+wlabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            },
            {
                name: 'loser',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['60%', '50%'],
                data: [
                    {value:loser,},
                    {value:100-loser,name:''}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:losername+':\n'+llabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
                emphasis:{
                    
                }
            }
        ]
    };
    return option;
}

function wpersoncharts(statdata,id,sportsname){
    var first=[]
    var second=[]
    var third=[]
    var ace
    var dfaults

    for (var i=0;i<statdata.length;i++){
        var temp={}
        var temp1={}
        var temp2={}
        if(statdata[i].id==id){
            if(statdata[i].statslabel=="Aces"){
                ace=statdata[i].winner
            }
            if(statdata[i].statslabel=="Double Faults"){
                dfaults=statdata[i].winner
            }
            switch(statdata[i].statslabel){
                case('Service Points Won'):
                    temp['name']="发球局数"
                    temp['value']=statdata[i].wbase
                    first.push(temp)
                    break
                case('Return Points Won'):
                    temp['name']="接发球局数"
                    temp['value']=statdata[i].wbase
                    first.push(temp)
                    break
                case('1st Serve'):
                    temp['name']="一发成功次数"
                    temp['value']=statdata[i].wactual
                    second.push(temp)
                    break
                case('Double Faults'):
                    temp['name']="双误"
                    temp['value']=statdata[i].winner
                    second.push(temp)
                    break
                case('2nd Serve Points Won'):
                    temp['name']="二发成功次数"
                    temp['value']=statdata[i].wbase-dfaults
                    second.push(temp)
                    temp1['name']="二发得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="二发未得分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('1st Serve Return Points Won'):
                    temp['name']="一发接球次数"
                    temp['value']=statdata[i].wbase
                    second.push(temp)
                    temp1['name']="一发接球得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="一发接球失分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('2nd Serve Return Points Won'):
                    temp['name']="二发接球次数"
                    temp['value']=statdata[i].wbase
                    second.push(temp)
                    temp1['name']="二发接球得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="二发接球失分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('Aces'):
                    temp['name']="Ace球次数"
                    temp['value']=statdata[i].winner
                    third.push(temp)
                    break
                case('1st Serve Points Won'):
                    temp['name']="除Ace球外一发得分次数"
                    temp['value']=statdata[i].wactual-ace
                    third.push(temp)
                    temp1['name']="一发未得分次数"
                    temp1['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp1)
                    break
                }
                
        }
    }
    
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: first
            },
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '55%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: second
            },
            {
                name: sportsname,
                type: 'pie',
                radius: ['65%', '80%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                },
                data: third
            }
        ]
    };
    return option
}

function lpersoncharts(statdata,id,sportsname){
    var first=[]
    var second=[]
    var third=[]
    var ace
    var dfaults

    for (var i=0;i<statdata.length;i++){
        var temp={}
        var temp1={}
        var temp2={}
        if(statdata[i].id==id){
            if(statdata[i].statslabel=="Aces"){
                ace=statdata[i].loser
            }
            if(statdata[i].statslabel=="Double Faults"){
                dfaults=statdata[i].loser
            }
            switch(statdata[i].statslabel){
                case('Service Points Won'):
                    temp['name']="发球局数"
                    temp['value']=statdata[i].lbase
                    first.push(temp)
                    break
                case('Return Points Won'):
                    temp['name']="接发球局数"
                    temp['value']=statdata[i].lbase
                    first.push(temp)
                    break
                case('1st Serve'):
                    temp['name']="一发成功次数"
                    temp['value']=statdata[i].lactual
                    second.push(temp)
                    break
                case('Double Faults'):
                    temp['name']="双误"
                    temp['value']=statdata[i].loser
                    second.push(temp)
                    break
                case('2nd Serve Points Won'):
                    temp['name']="二发成功次数"
                    temp['value']=statdata[i].lbase-dfaults
                    second.push(temp)
                    temp1['name']="二发得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="二发未得分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('1st Serve Return Points Won'):
                    temp['name']="一发接球次数"
                    temp['value']=statdata[i].lbase
                    second.push(temp)
                    temp1['name']="一发接球得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="一发接球失分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('2nd Serve Return Points Won'):
                    temp['name']="二发接球次数"
                    temp['value']=statdata[i].lbase
                    second.push(temp)
                    temp1['name']="二发接球得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="二发接球失分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('Aces'):
                    temp['name']="Ace球次数"
                    temp['value']=statdata[i].loser
                    third.push(temp)
                    break
                case('1st Serve Points Won'):
                    temp['name']="除Ace球外一发得分次数"
                    temp['value']=statdata[i].lactual-ace
                    third.push(temp)
                    temp1['name']="一发未得分次数"
                    temp1['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp1)
                    break
                }
                
        }
    }
    
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: first
            },
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '55%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: second
            },
            {
                name: sportsname,
                type: 'pie',
                radius: ['65%', '80%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                },
                data: third
            }
        ]
    };
    return option
}