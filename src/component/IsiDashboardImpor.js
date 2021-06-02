import { useEffect, useRef } from 'react';
const { tableau } = window;

const IsiDashboardImpor = () => {
    const ref = useRef(null);
    document.title = "Dashboard Impor";

    useEffect(() => {
        let layout = "desktop";
        if (window.innerWidth <= 768)
            layout = "phone";
        const options = {
            device: layout,
            hideTabs: true,
            hideToolbar: true,
        };
        new tableau.Viz(ref.current, "https://public.tableau.com/views/DashboardImporkeIndonesia_16222543990780/Dashboard", options);
    }, [null]);


    return (
        <div>
            <div id="benua" ref={ref}></div>
        </div>
    );
}

export default IsiDashboardImpor;