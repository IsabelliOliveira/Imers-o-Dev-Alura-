var listaFilmes = ['https://www.sonypictures.com.br/sites/brazil/files/2022-07/ulbld_cartaz.regular_1080x1350px-BREVE.jpg', 'https://jpimg.com.br/uploads/2017/06/1457191292-guardioes-da-galaxia-vol-2-ganha-cartaz-oitentista-para-imax-702x1024.jpg', 'https://br.web.img3.acsta.net/pictures/20/06/23/20/57/4275033.jpg', 'https://viureview.com.br/images/filmes2/Pantera-Negra.jpg', 'https://br.web.img3.acsta.net/pictures/17/08/25/00/41/571970.jpg', 'https://br.web.img3.acsta.net/pictures/17/01/31/21/04/546636.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4f/Frozen_2_poster.jpg/250px-Frozen_2_poster.jpg', 'https://br.web.img3.acsta.net/pictures/19/10/10/22/10/0397933.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg','https://s3.amazonaws.com/nightjarprod/content/uploads/sites/3/2022/08/12161209/dont-worry-darling-poster.jpg'];

//desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://s2.glbimg.com/ABif2Vd6K2Jb7nGBthZVPn9DtX0=/e.glbimg.com/og/ed/f/original/2019/12/10/20171212-star-wars-5-papo-de-cinema-cartaz.jpg', 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/11/25/unnamed-1ib3894cp3hwm.jpg');

var nomeFilmes = ['Um lugar bem longe daqui', 'Guardiões da Galaxia vol.2', 'Mulher Maravilha 1984', 'Pantera Negra', 'Onde está segunda', 'A Cabana', 'Frozen 2', 'O tempo com você', 'Divertidamente', 'Não se preucupe querida', 'Star Wars: O imperio contra ataca','Harry Potter e camara secreta'];

document.write('<div class="container_todosFilmes">')
//desafio 1 - transformar for em while
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')
