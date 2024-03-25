import "./Staff.css";

export function Staff(): JSX.Element {

    const now = new Date();
    const day = now.getDay() + 1;

    // First way:
    // if(day !== 1)
    //     return <></>; // Fragment

    return (
        <div className="Staff">

            {/* Second way: */}
			{ day === 1 && <p>Now, on Sunday - Helpdesk Support</p>}
			{ day !== 1 && <p>We don't have Helpdesk Support today</p>}

        </div>
    );
}
