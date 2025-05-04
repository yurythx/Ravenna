import './App.css';

function App() {
  const readingList = [
    { src: "https://i.imgur.com/HWxOtcQ.jpeg", caption: "Frieren: Beyond Journey’s End", color: "#b0b6a9" },
    { src: "https://i.imgur.com/wRoptbT.png", caption: "Shinozaki-kun no Mente Jijou", color: "#afa294" },
    { src: "https://i.imgur.com/MwRrRSd.jpeg", caption: "Bibliomania", color: "#3c3c3d" },
    { src: "https://i.imgur.com/7FQ6L5j.jpeg", caption: "Dandadan", color: "#b47460" },
    { src: "https://i.imgur.com/IQSq88g.jpeg", caption: "The Summer Hikaru Died", color: "#60a6ce" },
    { src: "https://i.imgur.com/QfF46xU.jpeg", caption: "The Color of the End: Mission in the Apocalypse", color: "#46666f" },
    { src: "https://i.imgur.com/jcgbHCO.jpeg", caption: "Smoking Behind the Supermarket with You", color: "#8e898f" },
    { src: "https://i.imgur.com/lIPenqN.jpeg", caption: "Another", color: "#8d516e" },
  ];

  const completedList = [
    { src: "https://i.imgur.com/OS0VRhm.png", caption: "My Broken Mariko", color: "#6e695e" },
    { src: "https://i.imgur.com/uqktm8j.jpeg", caption: "Adabana", color: "#b16e79" },
    { src: "https://i.imgur.com/QKXIJlH.jpeg", caption: "Yiska", color: "#bdbdbd" },
  ];

  const planningList = [
    { src: "https://i.imgur.com/yCBmW1b.png", caption: "BLAME!", color: "#7b4d35" },
    { src: "https://i.imgur.com/ZGvNhE7.jpeg", caption: "I Have a Crush at Work", color: "#ceb5a8" },
    { src: "https://i.imgur.com/kTmZvmd.jpeg", caption: "Carnelian: the Sille Dragon Odyssey", color: "#6d413f" },
    { src: "https://i.imgur.com/jXc2WJf.jpeg", caption: "Ougon no Keikenchi", color: "#666060" },
    { src: "https://i.imgur.com/fHFUOYg.jpeg", caption: "Cigarette & Cherry", color: "#827d88" },
  ];

  const renderSection = (title, list) => (
    <section>
      <header><h2>{title}</h2></header>
      {list.map(({ src, caption, color }, index) => (
        <article
          key={index}
          style={{ "--avarage-color": color }}
        >
          <figure>
            <img src={src} alt={caption} />
            <figcaption>{caption}</figcaption>
          </figure>
        </article>
      ))}
    </section>
  );

  return (
    <div>
      <h1>Bem-vindo</h1>
      <h2>Leitor de Manga 1.0</h2>
      <main>
        {renderSection("Em andamento", readingList)}
        {renderSection("Completos", completedList)}
        {renderSection("em Breve", planningList)}
      </main>
    </div>
  );
}

export default App;