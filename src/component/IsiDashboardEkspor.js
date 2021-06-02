import { useEffect, useRef } from 'react';
const { tableau } = window;

const IsiDashboardEkspor = () => {
    const ref = useRef(null);
    document.title = "Dashboard Ekspor";

    useEffect(() => {

        let layout = "desktop";
        if (window.innerWidth <= 768)
            layout = "phone";
        const options = {
            device: layout,
            hideTabs: true,
            hideToolbar: true,
        };

        new tableau.Viz(ref.current, "https://public.tableau.com/shared/TQ2JM7R52", options);
    }, [null]);


    return (
        <div>
            <div id="benua" ref={ref}></div>
        </div>
    );
}

export default IsiDashboardEkspor;