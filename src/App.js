import FullNameLogo from "./assets/svg/name.svg"
import JJFooter from "./assets/svg/jj_footer.svg"
import Pattern from "./assets/svg/pattern.svg"
import ZeroAnima from "./assets/svg/zero_anima.svg"

import GitHub from "./assets/svg/GitHub.svg"
import Instagram from "./assets/svg/Instagram.svg"
import FB from "./assets/svg/FB.svg"
import LinkedIn from "./assets/svg/LinkedIn.svg"
import Twitter from "./assets/svg/Twitter.svg"

import JJLogo from "./assets/images/jj.png"
import Titles from "./components/Titles"
import "./App.css"

function App() {
  return (
    <>
      <div
        className="bg-fixed bg-repeat min-h-screen"
        style={{
          backgroundImage: `url("${Pattern}")`,
        }}
      >
        <img src={JJLogo} className="absolute top-0 left-0 z-0" alt="jj" />
        <div className="flex flex-col justify-items-center">
          <div className="flex justify-center">
            <img src={FullNameLogo} alt="name" className="h-1/4" />
          </div>
          <Titles />
        </div>
      </div>
      <footer>
        
        <div className="h-1 bg-gradient-to-r from-tertiary via-secondary to-primary"></div>
        <div className="flex flex-col items-center justify-center bg-dark-grey z-50 h-full  pb-16">
          <div className="h-40 w-3/6 bg-secondary-grey shadow-md flex flex-col items-center -mt-24 rounded-md ">

          </div>
          <img src={JJFooter} alt="footer_logo" className="h-36 w-36 mt-20" />
          <div className="flex flex-row items-center justify-center mt-10">
            <img src={GitHub} alt="GitHub_logo" className="px-4" />
            <img src={Instagram} alt="Instagram_logo" className="px-4" />
            <img src={LinkedIn} alt="LinkedIn_logo" className="px-4" />
            <img src={FB} alt="FB_logo" className="px-4" />
            <img src={Twitter} alt="Twitter_logo" className="px-4" />
          </div>
          <img src={ZeroAnima} alt="zeroanima_logo" className="h-36 w-36 pt-10" />
        </div>
      </footer>
    </>
  )
}

export default App
