import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

function App() {
  return (
    `<div class="conteinerAp">
      <div class="conteiner">
        ${Header()}
        ${Main()}
        ${Footer()}
      </div>
    </div>`
  );
}

export default App;
        // ${Header()}
        // ${Main()}
        // ${Footer()}
