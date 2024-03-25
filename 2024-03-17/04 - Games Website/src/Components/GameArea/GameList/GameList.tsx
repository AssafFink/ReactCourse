import "./GameList.css";

export function GameList(): JSX.Element {

    const games = [
        { id: 1, name: "Chess", price: 30 },
        { id: 2, name: "Monopol", price: 40 },
        { id: 3, name: "Children Racing Car", price: 50 },
    ];

    return (
        <div className="GameList">
            <ul>
                {games.map(g => <li key={g.id}>{g.name}, Price: {g.price}</li>)}
            </ul>
        </div>
    );
}
