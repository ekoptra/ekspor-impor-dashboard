import { useEffect, useRef } from 'react';
const { tableau } = window;

const IsiDashboardUtama = () => {
    const ref = useRef(null);
    document.title = "Dashboard Utama";

    useEffect(() => {
        let layout = "desktop";
        if (window.innerWidth <= 768)
            layout = "phone";
        const options = {
            device: layout,
            hideTabs: true,
            hideToolbar: true,
        };
        new tableau.Viz(ref.current, "https://public.tableau.com/views/Dashboard_16210059831350/Dashboard", options);
    }, [null]);


    return (
        <div>
            <div id="benua" ref={ref}></div>
        </div>
    );
}

export default IsiDashboardUtama;