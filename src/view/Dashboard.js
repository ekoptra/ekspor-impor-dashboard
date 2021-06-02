import HeaderDashboard from '../component/HeaderDashboard';
import SidebarDashboard from '../component/SidebarDashboard';
import IsiDashboardUtama from '../component/IsiDashboardUtama';
import IsiDashboardEkspor from '../component/IsiDashboardEkspor';
import IsiDashboardImpor from '../component/IsiDashboardImpor';
import { bukaSidebar, tutupSidebar, closeSidebar, openSidebar } from '../utils/sidebar';
import { useEffect } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import '../css/layout-ds.css';

const Dashboard = ({ menu, setMenu }) => {
    document.body.style.backgroundColor = '#F8F8FB';
    document.body.style.backgroundImage = ``;

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const closeBtn = document.querySelector('.close');
        const nav = document.querySelector('nav .nav-container');
        const ul = nav.querySelector('ul');
        const topnav = nav.querySelector('.topnav');

        if (window.innerWidth <= 639)
            bukaSidebar(nav, ul, topnav);

        window.addEventListener("resize", () => {
            if (window.innerWidth <= 639) {
                bukaSidebar(nav, ul, topnav);
            } else {
                closeSidebar(hamburger, closeBtn);
                tutupSidebar(nav, ul, topnav);
            }
        });

        nav.addEventListener('mouseenter', () => {
            if (window.innerWidth > 639)
                bukaSidebar(nav, ul, topnav)
        });

        nav.addEventListener('mouseleave', () => {
            if (window.innerWidth > 639)
                tutupSidebar(nav, ul, topnav);
        });

        hamburger.addEventListener('click', () => openSidebar(hamburger, closeBtn));
        closeBtn.addEventListener('click', () => closeSidebar(hamburger, closeBtn));
    }, [null]);

    return (
        <div id="container">
            <HeaderDashboard menu={menu} />
            <SidebarDashboard menu={menu} setMenu={setMenu} />

            <main className="sm:px-8 py-5 p-3">
                <Switch>
                    <Route exact path="/dashboard">
                        <IsiDashboardUtama />
                    </Route>
                    <Route exact path={`/dashboard/ekspor`}>
                        <IsiDashboardEkspor />
                    </Route>
                    <Route exact path={`/dashboard/impor`}>
                        <IsiDashboardImpor />
                    </Route>
                </Switch>
            </main>

            <footer className="text-center py-2 bg-white text-gray-500">
                <small className="text-xs sm:text-sm">Copyright © 2021. Kelompok 4 - 3SD1 - Angkatan 60</small>
            </footer>
        </div>
    );
}

export default Dashboard;