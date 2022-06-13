import {promises as fs} from "fs";

var cidades = JSON.parse(await fs.readFile("Cidades.json", "utf8"));
var estados = JSON.parse(await fs.readFile("Estados.json", "utf8"));

var arr1 = [],  arr2 = [] ,arr3 = [],  arr4 = [] ,arr5 = [],  arr6 = [] ,arr7 = [],  arr8 = [] ,arr9 = [],  arr10 = [] 
,arr11 = [],  arr12 = [] ,arr13 = [],  arr14 = [] ,arr15 = [],  arr16 = [] ,arr17 = [],  arr18 = [] ,arr19 = [],  arr20 = [] 
,arr21 = [],  arr22 = [] ,arr23 = [],  arr24 = [] ,arr25 = [],  arr26 = [] ,arr27 = []

var cont1 = 0, cont2 = 0 , cont3 = 0, cont4 = 0 , cont5 = 0, cont6 = 0 , cont7 = 0, cont8= 0 ,cont9 = 0, cont10 = 0 , cont11 = 0, cont12 = 0 , cont13 = 0, cont14 = 0 , cont15 = 0, cont16= 0 ,
cont17 = 0, cont18 = 0 , cont19 = 0, cont20 = 0 , cont21 = 0, cont22 = 0 , cont23 = 0, cont24= 0 ,cont25 = 0, cont26 = 0 , cont27 = 0

var geral = []

criarArquivo()
geral = geral.sort(ordenar)
mensagem(geral)

function criarArquivo(){
    for(var i = 0; i < estados.length ; i++){
        try{
            var nomeArquivo = "arquivos/" + estados[i].Sigla + ".json"
            for(var x = 0; x < cidades.length ; x++){
                var nome = '"' + cidades[x].Nome + '"'
                if(cidades[x].Estado == 1){ arr1.push(nome); cont1++ }
                else if(cidades[x].Estado == 2){ arr2.push(nome); cont2++ }
                else if(cidades[x].Estado == 3){ arr3.push(nome); cont3++ }
                else if(cidades[x].Estado == 4){ arr4.push(nome); cont4++ }
                else if(cidades[x].Estado == 5){ arr5.push(nome); cont5++ }
                else if(cidades[x].Estado == 6){ arr6.push(nome); cont6++ }
                else if(cidades[x].Estado == 7){ arr7.push(nome); cont7++ }
                else if(cidades[x].Estado == 8){ arr8.push(nome); cont8++ }
                else if(cidades[x].Estado == 9){ arr9.push(nome); cont9++ }
                else if(cidades[x].Estado == 10){ arr10.push(nome); cont10++ }
                else if(cidades[x].Estado == 11){ arr11.push(nome); cont11++ }
                else if(cidades[x].Estado == 12){ arr12.push(nome); cont12++ }
                else if(cidades[x].Estado == 13){ arr13.push(nome); cont13++ }
                else if(cidades[x].Estado == 14){ arr14.push(nome); cont14++ }
                else if(cidades[x].Estado == 15){ arr15.push(nome); cont15++ }
                else if(cidades[x].Estado == 16){ arr16.push(nome); cont16++ }
                else if(cidades[x].Estado == 17){ arr17.push(nome); cont17++ }
                else if(cidades[x].Estado == 18){ arr18.push(nome); cont18++ }
                else if(cidades[x].Estado == 19){ arr19.push(nome); cont19++ }
                else if(cidades[x].Estado == 20){ arr20.push(nome); cont20++ }
                else if(cidades[x].Estado == 21){ arr21.push(nome); cont21++ }
                else if(cidades[x].Estado == 22){ arr22.push(nome); cont22++ }
                else if(cidades[x].Estado == 23){ arr23.push(nome); cont23++ }
                else if(cidades[x].Estado == 24){ arr24.push(nome); cont24++ }
                else if(cidades[x].Estado == 25){ arr25.push(nome); cont25++ }
                else if(cidades[x].Estado == 26){ arr26.push(nome); cont26++ }
                else if(cidades[x].Estado == 27){ arr27.push(nome); cont27++ }
            }

        if(estados[i].ID == 1){ fs.writeFile(nomeArquivo, "[" + arr1 +"]","utf-8"); ler(1); geral.push({"UF": estados[i].Sigla, "TOTAL": cont1}) }
            else if(estados[i].ID == 2){ fs.writeFile(nomeArquivo, "[" + arr2  +"]","utf-8"); ler(2); geral.push({"UF": estados[i].Sigla, "TOTAL": cont2}) }
            else if(estados[i].ID == 3){ fs.writeFile(nomeArquivo, "[" + arr3  +"]","utf-8"); ler(3); geral.push({"UF": estados[i].Sigla, "TOTAL": cont3}) }
            else if(estados[i].ID == 4){ fs.writeFile(nomeArquivo, "[" + arr4  +"]","utf-8"); ler(4); geral.push({"UF": estados[i].Sigla, "TOTAL": cont4}) }
            else if(estados[i].ID == 5){ fs.writeFile(nomeArquivo, "[" + arr5  +"]","utf-8"); ler(5); geral.push({"UF": estados[i].Sigla, "TOTAL": cont5}) }
            else if(estados[i].ID == 6){ fs.writeFile(nomeArquivo, "[" + arr6  +"]","utf-8"); ler(6); geral.push({"UF": estados[i].Sigla, "TOTAL": cont6}) }
            else if(estados[i].ID == 7){ fs.writeFile(nomeArquivo, "[" + arr7  +"]","utf-8"); ler(7); geral.push({"UF": estados[i].Sigla, "TOTAL": cont7}) }
            else if(estados[i].ID == 8){ fs.writeFile(nomeArquivo, "[" + arr8  +"]","utf-8"); ler(8); geral.push({"UF": estados[i].Sigla, "TOTAL": cont8}) }
            else if(estados[i].ID == 9){ fs.writeFile(nomeArquivo, "[" + arr9  +"]","utf-8"); ler(9); geral.push({"UF": estados[i].Sigla, "TOTAL": cont9}) }
            else if(estados[i].ID == 10){ fs.writeFile(nomeArquivo, "[" + arr10  +"]","utf-8"); ler(10); geral.push({"UF": estados[i].Sigla, "TOTAL": cont10}) }
            else if(estados[i].ID == 11){ fs.writeFile(nomeArquivo, "[" + arr11  +"]","utf-8"); ler(11); geral.push({"UF": estados[i].Sigla, "TOTAL": cont11}) }
            else if(estados[i].ID == 12){ fs.writeFile(nomeArquivo, "[" + arr12  +"]","utf-8"); ler(12); geral.push({"UF": estados[i].Sigla, "TOTAL": cont12}) }
            else if(estados[i].ID == 13){ fs.writeFile(nomeArquivo, "[" + arr13  +"]","utf-8"); ler(13); geral.push({"UF": estados[i].Sigla, "TOTAL": cont13}) }
            else if(estados[i].ID == 14){ fs.writeFile(nomeArquivo, "[" + arr14  +"]","utf-8"); ler(14); geral.push({"UF": estados[i].Sigla, "TOTAL": cont14}) }
            else if(estados[i].ID == 15){ fs.writeFile(nomeArquivo, "[" + arr15  +"]","utf-8"); ler(15); geral.push({"UF": estados[i].Sigla, "TOTAL": cont15}) }
            else if(estados[i].ID == 16){ fs.writeFile(nomeArquivo, "[" + arr16  +"]","utf-8"); ler(16); geral.push({"UF": estados[i].Sigla, "TOTAL": cont16}) }
            else if(estados[i].ID == 17){ fs.writeFile(nomeArquivo, "[" + arr17  +"]","utf-8"); ler(17); geral.push({"UF": estados[i].Sigla, "TOTAL": cont17}) }
            else if(estados[i].ID == 18){ fs.writeFile(nomeArquivo, "[" + arr18  +"]","utf-8"); ler(18); geral.push({"UF": estados[i].Sigla, "TOTAL": cont18}) }
            else if(estados[i].ID == 19){ fs.writeFile(nomeArquivo, "[" + arr19  +"]","utf-8"); ler(19); geral.push({"UF": estados[i].Sigla, "TOTAL": cont19}) }
            else if(estados[i].ID == 20){ fs.writeFile(nomeArquivo, "[" + arr20  +"]","utf-8"); ler(20); geral.push({"UF": estados[i].Sigla, "TOTAL": cont20}) }
            else if(estados[i].ID == 21){ fs.writeFile(nomeArquivo, "[" + arr21  +"]","utf-8"); ler(21); geral.push({"UF": estados[i].Sigla, "TOTAL": cont21}) }
            else if(estados[i].ID == 22){ fs.writeFile(nomeArquivo, "[" + arr22  +"]","utf-8"); ler(22); geral.push({"UF": estados[i].Sigla, "TOTAL": cont22}) }
            else if(estados[i].ID == 23){ fs.writeFile(nomeArquivo, "[" + arr23  +"]","utf-8"); ler(23); geral.push({"UF": estados[i].Sigla, "TOTAL": cont23}) }
            else if(estados[i].ID == 24){ fs.writeFile(nomeArquivo, "[" + arr24  +"]","utf-8"); ler(24); geral.push({"UF": estados[i].Sigla, "TOTAL": cont24}) }
            else if(estados[i].ID == 25){ fs.writeFile(nomeArquivo, "[" + arr25  +"]","utf-8"); ler(25); geral.push({"UF": estados[i].Sigla, "TOTAL": cont25}) }
            else if(estados[i].ID == 26){ fs.writeFile(nomeArquivo, "[" + arr26  +"]","utf-8"); ler(26); geral.push({"UF": estados[i].Sigla, "TOTAL": cont26}) }
            else if(estados[i].ID == 27){ fs.writeFile(nomeArquivo, "[" + arr27  +"]","utf-8"); ler(27); geral.push({"UF": estados[i].Sigla, "TOTAL": cont27}) }


        }catch(error){
            console.log(error)
        }
    }
}

function ler(index){
    switch (index) {
        case 1:
            console.log("ACRE - " + cont1)
        break;
        case 2:
            console.log("ALAGOAS - " + cont2)
        break;
        case 3:
            console.log("AMAZONAS - " + cont3)
        break;
        case 4:
            console.log("AMAPA - " + cont4)
        break;
        case 5:
            console.log("BAHIA - " + cont5)
        break;
        case 6:
            console.log("CEARA - " + cont6)
        break;
        case 7:
            console.log("DISTRITO FEDERAL - " + cont7)
        break;
        case 8:
            console.log("ESPIRITO SANTO - " + cont8)
        break;
        case 9:
            console.log("GOIAS - " + cont9)
        break;
        case 10:
            console.log("MARANHAO - " + cont10)
        break;
        case 11:
            console.log("MINAS GERAIS - " + cont11)
        break;
        case 12:
            console.log("MATO GROSSO DO SUL - " + cont12)
        break;
        case 13:
            console.log("MATO GROSSO - " + cont13)
        break;
        case 14:
            console.log("PARA - " + cont14)
        break;
        case 15:
            console.log("PARAIBA - " + cont15)
        break;
        case 16:
            console.log("PERNAMBUCO - " + cont16)
        break;
        case 17:
            console.log("PIAUI - " + cont17)
        break;
        case 18:
            console.log("PARANA - " + cont18)
        break;
        case 19:
            console.log("RIO DE JANEIRO - " + cont19)
        break;
        case 20:
            console.log("RIO GRANDE DO NORTE - " + cont20)
        break;
        case 21:
            console.log("RONDONIA - " + cont21)
        break;
        case 22:
            console.log("RORAIMA - " + cont22)
        break;
        case 23:
            console.log("RIO GRANDE DO SUL - " + cont23)
        break;
        case 24:
            console.log("SANTA CATARINA - " + cont24)
        break;
        case 25:
            console.log("SERGIPE - " + cont25)
        break;
        case 26:
            console.log("SAO PAULO - " + cont26)
        break;
        case 27:
            console.log("TOCANTINS - " + cont27)
        break;
    }
}


function ordenar(a,b){
    return b.TOTAL - a.TOTAL;
}

function mensagem(geral){
    var texto = "-----ESTADOS COM MAIS CIDADES-----"
    var contador = 0;
    while(contador < 5){
        texto += "\n " + (contador + 1) + ": " + geral[contador].UF + " - " + geral[contador].TOTAL
        contador++;
    }
    console.log(texto)
}