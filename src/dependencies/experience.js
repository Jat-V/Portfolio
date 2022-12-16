import './experience.css';
import aatspct from '../img/aatspct_home.png';
import snmp from '../img/snmp_results.png';

export const Experience = () => {
    return (
        <div id="work">
            <h5>Programming Experience</h5>
            <div className="row">
                <div className="portfolio-thumb">
                    <a className="image-popup-no-margins" href={snmp}>{<img src={snmp} alt="SNMP API result page" />}</a>
                    <p className="description"><u>SNMP API</u> - <em>Utilizing the Django framework library on a
                        <b> Linux Apache server</b>, I have created a module that gathers important information
                        from the printers on the Yale Network.</em></p>
                </div>
                <div className="portfolio-thumb">
                    <a className="image-popup-no-margins" href={aatspct}>{<img src={aatspct} alt="AATSPCT Homepage" />}</a>
                    <p className="description"><u>AATSP CT</u> - <em>Created a website for the American Association of
                        Teachers of Spanish and Portuguese Connecticut chapter. Together with my partner, we used the
                        Google cloud service as a backend in conjunction with PHP.</em></p>
                </div>
                <div className="portfolio-thumb">
                    <p className="description"><u>Avanti QR Code delivery system</u></p>
                </div>
                <div className="portfolio-thumb">
                    <p className="description"><u>Upgrade automation tool</u></p>
                </div>
            </div>
        </div>
    );
}