import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

// Export Volume
const dataExportVolume = [600136.611101, 700005, 549465.5, 508827.2, 511728.1, 545846.6, 608907.5, 654474.4].map(n => n * 1000);

const optionsExportVolume = {
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
            text: `Volume Export Indonesia 2012-2019 (Ton)`,
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
            suggestedMin: 450000000,
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

// Export Nilai
const dataExportNilai = [190020.3, 182551.8, 175980, 150366.3, 145134, 168828.2, 180012.7, 167683];

const optionsExportNilai = {
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
            text: `Nilai Ekspor Indonesia 2012-2019 (Juta US$)`,
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
            suggestedMin: 140000,
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

const ChartEkspor = () => {
    const [chart, setChart] = useState(null);
    const [isNilai, setIsNilai] = useState(true);
    const [chartRender, setChartRender] = useState(false);

    useEffect(() => {
        if (!chartRender) {
            setChart(new Chart(document.getElementById('chartExport').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                    datasets: [{
                        data: dataExportNilai,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }],
                },
                options: optionsExportNilai
            }));
            setChartRender(true);
        } else {
            if (isNilai) {
                chart.data.datasets[0].data = dataExportNilai;
                chart.options = optionsExportNilai
            } else {
                chart.data.datasets[0].data = dataExportVolume;
                chart.options = optionsExportVolume
            }
            chart.update();
        }
    }, [isNilai]);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-10">
            <div>
                <div>
                    <canvas id="chartExport" height="200"></canvas>
                </div>
                <div className="mt-5 text-center button-export">
                    <div className={`hover:bg-green-300 ${isNilai ? 'bg-green-300' : ''} inline-block  py-1 px-3 text-md mx-2 transition duration-200 rounded-md border border-green-600 text-gray-700 cursor-pointer`} onClick={() => setIsNilai(true)}>Nilai Ekspor</div>
                    <div className={`hover:bg-green-300 ${isNilai ? '' : 'bg-green-300'} inline-block  py-1 px-3 text-md mx-2 transition duration-200 rounded-md border border-green-600 text-gray-700 cursor-pointer`} onClick={() => setIsNilai(false)}>Volume Ekspor</div>
                </div>
            </div>

            <div>
                <h5 className="font-medium text-xl mb-3">Ekspor Indonesia 2012-2019</h5>
                <p data-aos="fade-up">
                    Perkembangan ekspor Indonesia dari tahun 2012 hingga 2019 secara keseluruhan mengalami
                    fluktuatif. Pada grafik nilai dapat dilihat bahwa pada tahun 2012 hingga 2016 terus mengalami
                    penurunan, ini terjadi diduga akibat dari pelemahan ekonomi global. Negara-negara tujuan utama
                    ekspor Indonesia secara tradisional seperti China, Jepang, AS, dan negara-negara Eropa tengah
                    mengalami perlambatan ekonomi. Namun pada grafik volume pada tahun 2013 ternyata terjadi
                    peningkatan, ini terjadi karena saat itu nilai rupiah terdepresiasi dikarenakan rencana The Fed
                    untuk mencetak uang dan membeli aset-aset finansial dari bank-bank di Amerika Serikat. Hal ini
                    menyebabkan terjadinya peningkatan arus investasi keluar Indonesia, karena investor melihat
                    bahwa lebih menguntungkan untuk berinvestasi di Amerika dibanding di Indonesia.
                </p>
            </div>

        </div>
    );
}

export default ChartEkspor;