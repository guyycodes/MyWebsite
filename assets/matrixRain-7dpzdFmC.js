window.startTheMatrix=function(i){const o=`日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789Z"'=:.+<>|_ç`;function e(){const t=document.createElement("div");t.className="rain-drop",t.style.left=`${Math.round(Math.random()*99)}%`;const a=document.querySelector("#code");a&&a.appendChild(t);let n=0;var d=setInterval(()=>{t.innerHTML+=o[Math.round(Math.random()*(o.length-1))],n++,n>60*.9&&t.classList.add("fade-out"),n>60&&(clearInterval(d),t.remove())},100)}function r(){e(),e(),e(),e(),e(),setInterval(()=>{e()},150)}i&&(t=>{document.body.innerHTML=`
        <style>
        html {
          background: black;
          overflow: hidden;
        }
        #code {
          font-family: 'ubuntu mono', monospace;
          background: black;
          height: 150%;
          width: 100vw;
        }
        .rain-drop {
          position: absolute;
          top: 0;
          width: 1rem;
          writing-mode: vertical-lr;
          text-orientation: upright;
          white-space: nowrap;
          background: linear-gradient(transparent 10%, #008F11 50%, #00FF41 96%, white 3rem);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(1px 1px 1px #008F11);
          font-weight: bold;
          opacity: 1;
          transition: 1s ease-out;
        }
        .fade-out {
          opacity: 0;
        }
        </style>
        <div id="code"></div>
        <h1 id="message">${t}</h1>
      `,r()})("")};
