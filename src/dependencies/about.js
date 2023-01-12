import './about.css'

export const About = () => {
    return(
        <div id="about">
            <h4>Hello, world! I am a programmer.</h4>
            <div id="code">🔴 🟡 🟢
                <div id="console">
                    <b>Jat.origin = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; location: "New Haven, CT"<br></br></p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.education = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; college: "Southern Connecticut State University"<br></br></p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.major = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; degree: "Computer Science BS"<br></br></p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.graduation = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; year: "May 2021"<br></br></p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.interests = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; passions: ["Code", "Coffee", "Outdoors"]<br></br></p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.workExperience.latest = {'{'}</b>
                    <div className="css-typing">
                        <p>&ensp; company: "YPPS"<br></br>
                            &ensp; role: "Programmer"<br></br>
                            &ensp; startDate: "Nov 2021"<br></br>
                            &ensp; endDate: "N/A"<br></br>
                        </p>
                        <b>{'}'};</b>
                    </div>
                    <br></br>
                    <b>Jat.resume = {'{'}</b>
                    <div className="css-typing">
                        <p><span className="answer">&ensp; PDF:<a href="notes.txt">JV_Resume_link.pdf</a></span><br></br></p>
                        <b>{'}'};</b>
                    </div>
                </div>
            </div>
        </div>
    );
}