import { useEffect, useState } from "react";
import "./TotalProducts.css";
import { AppState, store } from "../../../Storage/store";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {

    // const [count, setCount] = useState<number>(0);
    // useEffect(() => {
    //     const unsubscribe = store.subscribe(() => {
    //         setCount(store.getState().products?.length);
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

    // Instead of the above:
    // Subscribe + Unsubscribe + useState + useEffect + subscribe only for that slice:
    const count = useSelector<AppState, number>(state => state.products?.length);

    if (!count) return null;

    return (
        <div className="TotalProducts">
            <span>Total Products: {count}</span>
        </div>
    );
}
