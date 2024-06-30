import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Pie = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: "pie",
            data: {
                labels: ["Completed", "Rejected", "Pending"],
                datasets: [{
                    data: [500, 12, 110],
                    backgroundColor: [
                        '#71AAFE',
                        '#D8848C',
                        '#F8D522'
                    ]
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 15
                            }
                        }
                    }
                }
            }
        });

        const handleMediaQuery = () => {
            if (window.matchMedia("(max-width: 420px)").matches) {
                chartInstance.current.options.plugins.legend.labels.font.size = 8;
            } else {
                chartInstance.current.options.plugins.legend.labels.font.size = 15;
            }
            chartInstance.current.update();
        };

        handleMediaQuery();
        window.addEventListener("resize", handleMediaQuery);

        return () => {
            window.removeEventListener("resize", handleMediaQuery);
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <canvas ref={chartRef} style={{ width: "200px", height: "200px" }} className='mx-auto my-5' />
        </>
    );
}

export default Pie;
