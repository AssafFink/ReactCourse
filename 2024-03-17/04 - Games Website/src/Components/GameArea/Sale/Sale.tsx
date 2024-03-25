import css from "./Sale.module.css";

export function Sale(): JSX.Element {
    return (
        <div className={css.container}>
            <p className={css.beautiful}>Sale: free games!</p>
        </div>
    );
}
