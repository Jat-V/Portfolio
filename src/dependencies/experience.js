import './experience.css';
import aatspct from '../img/aatspct_home.png';
import snmp from '../img/snmp_results.png';
import av_qr from '../img/avanti_qr.png';

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
                        Teachers of Spanish and Portuguese Connecticut chapter. Made use of the
                        Google cloud service as a backend in conjunction with <b>PHP.</b></em></p>
                </div>
                <div className="portfolio-thumb">
                    <a className="image-popup-no-margins" href={av_qr}>{<img src={av_qr} alt="Avanti shipment slip" />}</a>
                    <p className="description"><u>Avanti QR</u> - <em>Implemented code to <b>dynamically generate</b> a QR
                        code that encrypts Job Details. When scanned, directs user to YPPS Delivery system website
                        specific to job. </em></p>
                </div>
                <div className="portfolio-thumb">
                    <p className="description"><u>Upgrade tool</u> - <em>Improved efficiency by <b>85%</b> by automating the
                        process of updating software on company computers, from <b>15 minutes manually to 2 minutes.</b></em></p>
                </div>
            </div>
        </div>
    );
}