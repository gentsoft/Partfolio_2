function Header() {

    let header_style_span ={
        top: 'auto'
    }

    return (
        `<header class="header">
          <div class="header__partF">
            <span class="header__partF_spanA" style=${header_style_span}>M</span>
            <span class="header__partF_spanB" style=${header_style_span}>a</span>
            <span class="header__partF_spanA" style=${header_style_span}>t</span>
            <span class="header__partF_spanB" style=${header_style_span}>s</span>
            <span class="header__partF_spanA" style=${header_style_span}>k</span>
            <span class="header__partF_spanB" style=${header_style_span}>e</span>
            <span class="header__partF_spanA" style=${header_style_span}>v</span>
            <span class="header__partF_spanB" style=${header_style_span}>i</span>
            <span class="header__partF_spanA" style=${header_style_span}>c</span>
            <span class="header__partF_spanB" style=${header_style_span}>h</span>
        </div>
        <div class="header__partN">
            <span class="header__partN_spanA" style=${header_style_span}>A</span>
            <span class="header__partN_spanB" style=${header_style_span}>l</span>
            <span class="header__partN_spanA" style=${header_style_span}>i</span>
            <span class="header__partN_spanB" style=${header_style_span}>a</span>
            <span class="header__partN_spanA" style=${header_style_span}>k</span>
            <span class="header__partN_spanB" style=${header_style_span}>s</span>
            <span class="header__partN_spanA" style=${header_style_span}>e</span>
            <span class="header__partN_spanB" style=${header_style_span}>i</span>
        </div>
  
        </header>`
    );
  }
  
  export default Header;