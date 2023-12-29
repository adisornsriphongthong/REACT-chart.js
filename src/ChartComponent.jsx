import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

export const ChartComponent = () => {
    const labels = ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8'];
    const [count, setCount] = useState(0)

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: '#78FF00',
            borderWidth: 1,
            data: [10, 5, count, 40, 50, 0, 5, 9],
        }]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        // Destroy existing chart instance before rendering a new one
        if (chartRef.current) {
            chartRef.current.destroy();
        }



        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * 50)

            setCount(random)
        }, 1000)

        // Create a new chart instance
        chartRef.current = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data,
            options: {
                scales: {
                    x: {
                        border: {
                            color: 'purple'
                        }
                    }
                },
                animation: {
                    duration: 0, // Set animation duration to 0 to disable animations
                },
            }
        })

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div style={{ width: '100%', height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#fff', filter: 'invert(1)' }}>
            <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '25%'}}>
                <div style={{ width: '500px', height: '320px', backgroundColor: '#fff', }}>
                    <div style={{ width: '600px', height: '300px', backgroundColor: 'trasparent' }}>
                        <canvas id="myChart" />
                    </div>
                </div>
            </div>
        </div>
    )
}
