import FullNameLogo from "./assets/svg/name.svg"
import JJLogo from "./assets/images/jj.png"
import Pattern from "./assets/svg/pattern.svg"
import Titles from './components/Titles';
import "./App.css"


function App() {
  return (
    <div className="bg-fixed" style={{ 
      backgroundImage: `url("${Pattern}")` 
    }}>
      <img src={JJLogo} className="fixed top-0 left-0" alt="jj" />
      <div className="flex flex-col justify-items-center">
        <div className="flex justify-center">
          <img src={FullNameLogo} alt="name" className="h-1/4" />
        </div>
        <div className="container-sm mx-auto px-20">
          <div className="grid grid-cols-3 gap-4">
          <Titles/>
          </div>

        </div>
      </div>
      {/* <Parallax bgImage={name} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax> */}
      {/* <h2>| | |</h2>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
            }}
          />
        </Background>
        <div>
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
        </div>
      </Parallax>
      <div style={{ height: 500 }} />
      <h2>{"\u2728"}</h2>
      <Parallax
        bgImage={name}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax> */}
    </div>
  )
}

export default App
