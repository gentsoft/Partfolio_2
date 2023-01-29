function Main() {

    let main_style_position ={
        left: 'auto'
    }

    let main_style_grad ={
        transform: 'auto'
    }

  return (
    `<main class="main">

        <div class="main__partF">
            <div class="main__partF__contImg">
                <div class="main__partF__contImg__part1" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
                <div class="main__partF__contImg__part2" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
                <div class="main__partF__contImg__part3" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
                <div class="main__partF__contImg__part4" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
                <div class="main__partF__contImg__part5" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
                <div class="main__partF__contImg__part6" style=${main_style_position}>
                    <img src="./public/img/img_1.jpg" alt="rfr"/>
                </div>
            </div>

            <div class="main__partF__info">
                <div class="main__partF__info__con1" style=${main_style_position}>
                    <span>education: </span>
                    <span>secondary + courses</span>
                </div>
                <div class="main__partF__info__con2" style=${main_style_position}>
                    <span>rang: </span>
                    <span>Junior</span>
                </div>
                <div class="main__partF__info__con3" style=${main_style_position}>
                    <span>ready to move through: </span>
                    <span className="main__partF__info__con3_date"></span>
                </div>
                <div class="main__partF__info__con4" style=${main_style_position}>
                    <span>speciality: </span>
                    <span>front-end web development from scrath</span>
                </div>
                <div class="main__partF__info__con5" style=${main_style_position}>
                    <span>knowledge of English:</span>
                    <span>A2</span>
                </div>
                <div class="main__partF__info__con6" style=${main_style_position}>
                    <span>place of residence: </span>
                    <span>Belarus, Minsk</span>
                </div>
            </div>
        </div>

        <div class="main__partS">
            <div class="main__partS_mySkils">my skills</div>
            <div class="main__partS__skills">
                
                <div class="main__partS__rad" style={main_style_grad}>
                    <div class="main__partS__rad_part main__partS__rad_1" style=${main_style_grad}>HTML</div>
                    <div class="main__partS__rad_part main__partS__rad_2" style=${main_style_grad}>CSS</div>
                    <div class="main__partS__rad_part main__partS__rad_3" style=${main_style_grad}>JS</div>
                    <div class="main__partS__rad_part main__partS__rad_4" style=${main_style_grad}>Nodejs</div>
                    <div class="main__partS__rad_part main__partS__rad_5" style=${main_style_grad}>Xampp</div>
                    <div class="main__partS__rad_part main__partS__rad_6" style=${main_style_grad}>React</div>
                    <div class="main__partS__rad_part main__partS__rad_7" style=${main_style_grad}>Git</div>
                    <div class="main__partS__rad_part main__partS__rad_8" style=${main_style_grad}>GitHub</div>
                    <div class="main__partS__rad_part main__partS__rad_9" style=${main_style_grad}>sass</div>
                    <div class="main__partS__rad_part main__partS__rad_10" style=${main_style_grad}>Bootstrap</div>
                    <div class="main__partS__rad_part main__partS__rad_11" style=${main_style_grad}>PHP</div>
                    <div class="main__partS__rad_part main__partS__rad_12" style=${main_style_grad}>WordPress</div>
                    <div class="main__partS__rad_part main__partS__rad_13" style=${main_style_grad}>Webpack</div>
                    <div class="main__partS__rad_part main__partS__rad_14" style=${main_style_grad}>Redux</div>
                    <div class="main__partS__rad_part main__partS__rad_15" style=${main_style_grad}>Figma</div>
                    <div class="main__partS__rad_part main__partS__rad_16" style=${main_style_grad}>Photoshop</div>
                </div>
            </div>

            <div class="main__partS__work">
                <div>
                    <div class="main__partS__work__page">
                        <span><a href="https://gentsoft.github.io/Final_project/">show page1</a></span>
                        <span><a href="https://gentsoft.github.io/Corculator/">show page2</a></span>
                        <span><a href="https://gentsoft.github.io/dz_filter/">show page3</a></span>
                        <span><a href="https://gentsoft.github.io/htmCss_1/">show page4</a></span>
                        <span><a href="https://gentsoft.github.io/htmCss2/">show page5</a></span>
                        <span><a href="https://gentsoft.github.io/htmlCss3/">show page6</a></span>
                    </div>
                </div>

                <div class="main__partS__work_but">
                    <div>my works</div>
                </div>

                <div>
                    <div class="main__partS__work__code">
                        <span><a href="https://github.com/gentsoft/Final_project">show code1</a></span>
                        <span><a href="https://github.com/gentsoft/Corculator">show code2</a></span>
                        <span><a href="https://github.com/gentsoft/dz_filter">show code3</a></span>
                        <span><a href="https://github.com/gentsoft/htmCss_1">show code4</a></span>
                        <span><a href="https://github.com/gentsoft/htmCss2">show code5</a></span>
                        <span><a href="https://github.com/gentsoft/htmlCss3">show code6</a></span>
                    </div>
                </div>
            </div>

        </div>

    </main>`
  );
}

export default Main;
