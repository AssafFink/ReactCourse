import "./Tune.css";
import audioSource from "../../../Assets/Audio/fade-into-you.mp3";
import { RefObject, useRef } from "react";

export function Tune(): JSX.Element {

    const audioRef: RefObject<HTMLAudioElement> = useRef();

    function play() {
        audioRef.current.play();
    }

    function pause() {
        audioRef.current.pause();
    }

    function stop() {
        audioRef.current.load();
    }

    return (
        <div className="Tune">

			<audio src={audioSource} ref={audioRef} />

            <button onClick={play}>▶</button>
            <button onClick={pause}>⏸</button>
            <button onClick={stop}>⏹</button>

        </div>
    );
}
