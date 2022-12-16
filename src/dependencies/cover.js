import './cover.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from '../img/python.svg';
import bash from '../img/bash.svg';
import powershell from '../img/powershell.svg';
import mysql from '../img/mysql.svg';
import git from '../img/git.svg';
import web_dev from '../img/undraw_programmer_re_owql.svg';
import cloud_host from '../img/undraw_cloud_hosting_7xb1.svg';
import php from '../img/php-svgrepo-com.svg';

export const Cover = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div id="biography">
            <h5>About Me</h5>
            <div id="origin">
                <p>
                    My full name is Jatniel Veliz and I enjoy bringing ideas to life. Automating solutions, solving
                    business problems, and innovating processes are the foundation that motivates me. I am someone who
                    is curious and wants to expand and share on their current knowledge of the field.
                </p>
            </div>
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h5>SKILLS</h5>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <h6>Python</h6>
                                        {<img src={python} alt="Python logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>Bash</h6>
                                        {<img src={bash} alt="Bash logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>Git</h6>
                                        {<img src={git} alt="Git logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>Powershell</h6>
                                        {<img src={powershell} alt="Powershell logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>MySQL</h6>
                                        {<img src={mysql} alt="MySQL logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>Cloud Hosting</h6>
                                        {<img src={cloud_host} alt="Cloud hosting logo" />}
                                    </div>
                                    <div className="item">
                                        <h6>HTML | CSS | JS | JQuery</h6>
                                        {<img src={web_dev} alt="Web development logos" />}
                                    </div>
                                    <div className="item">
                                        <h6>PHP</h6>
                                        {<img src={php} alt="PHP logo" />}
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}