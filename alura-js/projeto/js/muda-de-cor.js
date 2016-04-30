var trs = document.getElementsByTagName('tr')
percorreArray(trs, (tr)=>{
    tr.addEventListener('mouseover', function(){
        this.setAttribute('bgcolor', 'grey')
    })
})
