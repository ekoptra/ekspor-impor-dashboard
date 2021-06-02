import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

const dataImportVolume = [136684.5, 141516, 148185.5, 147457.8, 152646.3, 161143.4, 172176.8, 163393.8].map(n => n * 1000);

const optionsImportVolume = {
    responsive: true,
    interaction: {
        intersect: false,
        axis: 'x'
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `Volume Import Indonesia 2012-2019 (Ton)`,
            font: {
                size: 18
            },
            padding: {
                bottom: 30
            }
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    var label = context.dataset.label || '';
                    label += `${context.formattedValue} Ton`;
                    return label;
                }
            },
        }
    },
    scales: {
        y: {
            suggestedMin: 130000000,
            ticks: {
                callback: function (value, index, values) {
                    if (value === 0)
                        return ''
                    return (value / 1000000) + 'M';
                }
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    elements: {
        point: {
            radius: 5,
            hoverRadius: 8
        }
    }
}

// Import Nilai
const dataImportNilai = [192496, 187354, 178846.6, 143318.7, 136403.4, 157752.2, 189542.8, 171742.7];

const optionsImportNilai = {
    responsive: true,
    interaction: {
        intersect: false,
        axis: 'x'
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `Nilai Impor Indonesia 2012-2019 (Juta US$)`,
            font: {
                size: 18
            },
            padding: {
                bottom: 30
            }
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    var label = context.dataset.label || '';
                    label += `$${context.formattedValue} Juta`;
                    return label;
                }
            },
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            suggestedMin: 130000,
            ticks: {
                callback: function (value, index, values) {
                    if (value === 0)
                        return ''
                    return '$' + (value / 1000) + 'K';
                }
            }
        }
    },
    elements: {
        point: {
            radius: 5,
            hoverRadius: 8
        }
    }
};

const ChartImpor = () => {
    const [chart, setChart] = useState(null);
    const [isNilai, setIsNilai] = useState(true);
    const [chartRender, setChartRender] = useState(false);

    useEffect(() => {
        if (!chartRender) {
            setChart(new Chart(document.getElementById('chartImport').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                    datasets: [{
                        data: dataImportNilai,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }],
                },
                options: optionsImportNilai
            }));
            setChartRender(true);
        } else {
            if (isNilai) {
                chart.data.datasets[0].data = dataImportNilai;
                chart.options = optionsImportNilai;
            } else {
                chart.data.datasets[0].data = dataImportVolume;
                chart.options = optionsImportVolume;
            }
            chart.update();
        }
    }, [isNilai]);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-2">
            <div className="md:order-2 order-1">
                <div>
                    <canvas id="chartImport" height="200"></canvas>
                </div>
                <div className="mt-5 text-center button-import">
                    <div className={`hover:bg-green-300 ${isNilai ? 'bg-green-300' : ''} inline-block  py-1 px-3 text-md mx-2 transition duration-200 rounded-md border border-green-600 text-gray-700 cursor-pointer`} onClick={() => setIsNilai(true)}>Nilai Impor</div>
                    <div className={`hover:bg-green-300 ${isNilai ? '' : 'bg-green-300'} inline-block  py-1 px-3 text-md mx-2 transition duration-200 rounded-md border border-green-600 text-gray-700 cursor-pointer`} onClick={() => setIsNilai(false)}>Volume Impor</div>
                </div>
            </div>

            <div className="md:order-1 order-2">
                <h5 className="font-medium text-xl mb-3">Impor Indonesia 2012-2019</h5>
                <p data-aos="fade-up">
                    Perkembangan impor Indonesia dari tahun 2012 hingga 2019 secara keseluruhan fluktuatif dalam hal
                    nilai dan cenderung mengalami peningkatan dalam hal volume. Pada grafik nilai dapat dilihat
                    bahwa pada tahun 2012 hingga 2016 nilai impor terus mengalami penurunan akibat dari pelemahan
                    ekonomi global. Penurunan nilai impor tertinggi pada periode tersebut terjadi pada tahun 2015
                    yang didorong turunnya nilai impor komoditas migas dan non migas dan titik terendah impor
                    terjadi tahun 2016 terutama dikarenakan kondisi pasar internasional yang tidak membaik pasca
                    keputusan pemotongan produksi oleh OPEC. Peningkatan nilai impor mulai terjadi sejak tahun 2017
                    dan dapat dikatakan sebagai pertanda semakin cepatnya laju perekonomian nasional dilihat dari
                    sebagian besar komoditas impor adalah barang-barang kebutuhan industri dalam negeri. Pada tahun
                    2019 kembai terjadi penurunan impor dari segi nilai ataupun volume karena penurunan impor untuk
                    hampir semua komoditas. Disisi lain keadaan nilai impor yang turun sering tidak sejalan dengan
                    volume impor cenderung naik, ini menandakan bahwa sebenarnya terjadi daya beli meningkat.
                        </p>
            </div>
        </div>
    );
}

export default ChartImpor;