export default function Overlay() {

  function handleClick(e){
    e.preventDefault();
    window.open('https://github.com/ektogamat/R3F-Ultimate-Lens-Flare', "_blank");
  }
  return (
    <>
      <h2><a href="https://andersonmancini.dev" target="_blank">ANDERSON MANCINI.DEV</a></h2>

      <div className="container">
        <h3>REACT THREE FIBER ULTIMATE LENS FLARE</h3>
        <button onClick={handleClick}>DOWNLOAD NOW</button>
      </div>
    </>
  )
}
