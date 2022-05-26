import './about.scss';

import aboutImage from '../../assets/aboutimage.jpg';

const About = () => {

    return (
        <div className="about">
            <div className="about-title"><span className="about-title-text">About <span className="about-title-text-green">Us</span></span></div>
            <div className="about-description">
                <div className="about-description-text">
                    <p>Hydrogen atoms inconspicuous motes of rock and gas shores of the cosmic ocean star stuff harvesting star
                        light colonies the only home we've ever known? Kindling the energy hidden in matter cosmic ocean Tunguska event
                        encyclopaedia galactica take root and flourish another world. Network of wormholes dispassionate extraterrestrial
                        observer how far away brain is the seed of intelligence extraplanetary paroxysm of global death? Paroxysm of
                        global death Euclid paroxysm of global death from which we spring vanquish the impossible extraplanetary?</p>

                    <p>Light years paroxysm of global death emerged into consciousness as a patch of light finite but unbounded of brilliant
                        syntheses? A still more glorious dawn awaits hundreds of thousands brain is the seed of intelligence
                        dispassionate extraterrestrial observer at the edge of forever kindling the energy hidden in matter. Made
                        in the interiors of collapsing stars two ghostly white figures in coveralls and helmets are softly
                        dancing something incredible is waiting to be known the only home we've ever known dispassionate
                        extraterrestrial observer concept of the number one.</p>

                    <p>Birth encyclopaedia galactica Vangelis finite but unbounded hydrogen atoms Sea of Tranquility.
                        Invent the universe gathered by gravity Tunguska event extraplanetary the only home we've ever known
                        prime number. Not a sunrise but a galaxyrise vanquish the impossible take root and flourish a very
                        small stage in a vast cosmic arena made in the interiors of collapsing stars Cambrian explosion. Are
                        creatures of the cosmos vanquish the impossible not a sunrise but a galaxyrise vanquish the impossible
                        dream of the mind's eye the sky calls to us.</p>
                </div>
            </div>
            <img className="about-image" src={aboutImage} alt="Buck Lake, Mt Hood National Forest, USA" />
        </div>
    );
}

export default About;