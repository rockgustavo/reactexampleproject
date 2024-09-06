import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import { Nav } from "../nav";
import { Aside } from "../aside";

export function Layout() {
  return (
    <div className="layout">
      <Header title="Project Example" />
      <Nav />
      <div className="content">
        <Aside />
        <section className="section-content">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
}
