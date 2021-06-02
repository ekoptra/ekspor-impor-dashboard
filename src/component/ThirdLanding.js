import ChartEkspor from './ChartEkspor';
import ChartImpor from './ChartImpor';

const ThirdLanding = () => {
    return (
        <div id="data-sekilas">
            <div className="container-third lg:px-16 md:px-8 px-5 bg-gray-100 py-12">
                <ChartEkspor />
                <ChartImpor />
            </div>
        </div>
    );
}

export default ThirdLanding;