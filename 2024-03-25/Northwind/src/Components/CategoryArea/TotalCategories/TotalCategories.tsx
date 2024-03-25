import { useEffect, useState } from "react";
import { categoryService } from "../../../Services/CategoryService";
import { notify } from "../../../Utils/Notify";
import "./TotalCategories.css";

export function TotalCategories(): JSX.Element {

    const [count, setCount] = useState<number>();

    useEffect(() => {
        categoryService.getTotalCategories()
            .then(dbCount => setCount(dbCount))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="TotalCategories">
			<span>Total Categories: {count}</span>
        </div>
    );
}
