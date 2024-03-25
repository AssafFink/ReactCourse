import { Home } from "../../HomeArea/Home/Home";
import { Copyrights } from "../Copyrights/Copyrights";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import { SiteHeader } from "../SiteHeader/SiteHeader";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <SiteHeader />
            </header>
            <aside>
                <Menu />
            </aside>
            <main>
                <Routing />
            </main>
            <footer>
                <Copyrights />
            </footer>
        </div>
    );
}
