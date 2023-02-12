/** loading */

const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
    loading.classList.add( 'hide' );
}, false );

/** loading End */



/**スマホ・タブレット画面高さ取得 アドレスバー対処 */

function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setHeight();

window.addEventListener('resize', setHeight);
/**スマホ・タブレット画面高さ取得 アドレスバー対処 End */



/** スクロールするとフェードイン */

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.scrollY || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
            fadeInTarget[i].classList.add('scroll-in');
        }

        /** nav　現在表示コンテンツに　boder-top */
        const remainder = scroll / windowHeight;
        if(0.5 > remainder){
            document.getElementById('navtop').classList.add('through');
        }else{
            document.getElementById('navtop').classList.remove('through');
        };
        if(1.5 > remainder && 0.5 <= remainder){
            document.getElementById('navabout').classList.add('through');
        }else{
            document.getElementById('navabout').classList.remove('through');
        };
        if(2.5 > remainder && 1.5 <= remainder){
            document.getElementById('navskill').classList.add('through');
        }else{
            document.getElementById('navskill').classList.remove('through');
        };
        if(3.5 > remainder && 2.5 <= remainder){
            document.getElementById('navwork').classList.add('through');
        }else{
            document.getElementById('navwork').classList.remove('through');
        };
        if(3.5 <= remainder){
            document.getElementById('navcontact').classList.add('through');
        }else{
            document.getElementById('navcontact').classList.remove('through');
        };
    }
    /** nav　現在表示コンテンツに　boder-top End */
});
/** スクロールするとフェードイン End */








/**upボタン　スクロールしたらフェードインフェードアウト */
if(document.URL.match(/index/)){
    let upButton = document.getElementById('up-button');
    window.addEventListener("scroll",()=>{
        
        const currentY = window.scrollY;//スクロール高さ取得
        if(currentY > 300){
            setTimeout(function(){
                upButton.style.opacity = 1;
            },1);
            upButton.classList.remove('up-button-hide');
        } else {
            setTimeout(function(){
                upButton.style.opacity = 0;
            },1);
            upButton.classList.add('up-button-hide');
        }
    })

    upButton.addEventListener("click", scroll_top);
    // ページ上部へスムーズに移動
    function scroll_top() {
        window.scroll({ top: 0, behavior: "smooth" });
    }
}


/**topボタン　スクロールしたらフェードインフェードアウト */



/**ページ内リンクスクロール */
window.addEventListener('DOMContentLoaded', () => {
    //ページ内リンクをプロパティを配列に
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    anchorLinksArr.forEach(link => {
        //通常のページ内リンククリック動作キャンセル
        link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        //getBoundingClientRect().topで要素（ページ内リンク）のtopのビューポートからの相対位置を取得
        const targetOffsetTop = window.scrollY + targetElement.getBoundingClientRect().top;
            window.scrollTo({
                top: targetOffsetTop,behavior: "smooth"
            });
        });
    });
});
/**ページ内リンクスクロール End*/



/**index.htmlでwork.htmlの選択したサイトを表示*/
if(document.URL.match(/work/)){
    window.addEventListener('load',(Event)=>{
        const hash = location.hash; //#work〇取得
        //#work〇から#以外を切り出す
        const hashName = hash.substring(1,6);
        document.getElementById(hashName).classList.remove('work_hidden');

    })
}


/**index.htmlでwork.htmlの選択したサイトを表示 End*/