import DeskSetup from "../../public/interests/desk_setup_interest.jpg";
import Padel from "../../public/interests/padel_interest.jpg";
import Running from "../../public/interests/running_interest.jpg";
import Soccer from "../../public/interests/soccer_interest.jpg";
import Travel from "../../public/interests/travel_interest.jpg";
import VideoGames from "../../public/interests/video_games_interest.png";
import Web3 from "../../public/interests/web3_interest.jpg";
import Coffee from "../../public/interests/coffee_interest.jpg";
import Computer from "../../public/interests/computer_science_interest.jpg";

const interestsImagesPath = [DeskSetup, Padel, Running, Soccer, Travel, VideoGames, Web3, Coffee, Computer]

function Interests() {
    return <>
        <section className="max-w-4xl mx-auto md:flex justify-between gap-16">
            <div className="md:w-2/5">
                <h2 className="border-t-2 pt-4 text-4xl font-normal mb-12">
                    Interests
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 md:w-3/5">
                {
                    interestsImagesPath.map((imagePath, index) => (
                        <div key={index} className="aspect-square">
                            <img src={imagePath} className="rounded-sm w-full h-full object-cover" />
                        </div>

                    ))
                }
            </div>

        </section>
    </>
}

export default Interests;
