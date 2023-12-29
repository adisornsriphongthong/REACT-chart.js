import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export const ChartComponent = () => {
    const labels = ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8'];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50, 0, 5, 9],
        }]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        // Destroy existing chart instance before rendering a new one
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create a new chart instance
        chartRef.current = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data,
            options: {
                scales: {
                    x: {
                        border: {
                            color: 'red'
                        }
                    }
                }
            }
        });
    }, [data]);

    return (
        <div style={{ width: '500px', height: '320px', backgroundColor: 'red', overflow: 'auto' }}>
            <div style={{ width: '600px', height: '300px', backgroundColor: 'trasparent' }}>
              <canvas id="myChart" />
            </div>
        </div>
    )
}
