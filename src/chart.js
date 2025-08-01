// Lightweight Charts™ Example: Floating Tooltip
// https://tradingview.github.io/lightweight-charts/tutorials/how_to/tooltips

import {AreaSeries, createChart} from "lightweight-charts";

const chartOptions = {
    layout: {
        textColor: 'white',
        background: { type: 'solid', color: '#000' },
    },
};
/** @type {import('lightweight-charts').IChartApi} */
const chart = createChart(document.getElementById('container'), chartOptions);

chart.applyOptions({
    crosshair: {
        // hide the horizontal crosshair line
        horzLine: {
            visible: false,
            labelVisible: false,
        },
        // hide the vertical crosshair label
        vertLine: {
            labelVisible: false,
        },
    },
    // hide the grid lines
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
});
const series = chart.addSeries(AreaSeries, {
    topColor: '#2962FF',
    bottomColor: 'rgba(41, 98, 255, 0.28)',
    lineColor: '#2962FF',
    lineWidth: 2,
    crossHairMarkerVisible: false,
});
series.priceScale().applyOptions({
    scaleMargins: {
        top: 0.3, // leave some space for the legend
        bottom: 0.25,
    },
});

series.setData([
    { time: '2018-10-19', value: 25.19 },
    { time: '2018-10-22', value: 25.87 },
    { time: '2018-10-23', value: 25.83 },
    { time: '2018-10-24', value: 25.78 },
    { time: '2018-10-25', value: 25.82 },
    { time: '2018-10-26', value: 25.81 },
    { time: '2018-10-29', value: 25.82 },
    { time: '2018-10-30', value: 25.71 },
    { time: '2018-10-31', value: 25.82 },
    { time: '2018-11-01', value: 25.72 },
    { time: '2018-11-02', value: 25.74 },
    { time: '2018-11-05', value: 25.81 },
    { time: '2018-11-06', value: 25.75 },
    { time: '2018-11-07', value: 25.73 },
    { time: '2018-11-08', value: 25.75 },
    { time: '2018-11-09', value: 25.75 },
    { time: '2018-11-12', value: 25.76 },
    { time: '2018-11-13', value: 25.8 },
    { time: '2018-11-14', value: 25.77 },
    { time: '2018-11-15', value: 25.75 },
    { time: '2018-11-16', value: 25.75 },
    { time: '2018-11-19', value: 25.75 },
    { time: '2018-11-20', value: 25.72 },
    { time: '2018-11-21', value: 25.78 },
    { time: '2018-11-23', value: 25.72 },
    { time: '2018-11-26', value: 25.78 },
    { time: '2018-11-27', value: 25.85 },
    { time: '2018-11-28', value: 25.85 },
    { time: '2018-11-29', value: 25.55 },
    { time: '2018-11-30', value: 25.41 },
    { time: '2018-12-03', value: 25.41 },
    { time: '2018-12-04', value: 25.42 },
    { time: '2018-12-06', value: 25.33 },
    { time: '2018-12-07', value: 25.39 },
    { time: '2018-12-10', value: 25.32 },
    { time: '2018-12-11', value: 25.48 },
    { time: '2018-12-12', value: 25.39 },
    { time: '2018-12-13', value: 25.45 },
    { time: '2018-12-14', value: 25.52 },
    { time: '2018-12-17', value: 25.38 },
    { time: '2018-12-18', value: 25.36 },
    { time: '2018-12-19', value: 25.65 },
    { time: '2018-12-20', value: 25.7 },
    { time: '2018-12-21', value: 25.66 },
    { time: '2018-12-24', value: 25.66 },
    { time: '2018-12-26', value: 25.65 },
    { time: '2018-12-27', value: 25.66 },
    { time: '2018-12-28', value: 25.68 },
    { time: '2018-12-31', value: 25.77 },
    { time: '2019-01-02', value: 25.72 },
    { time: '2019-01-03', value: 25.69 },
    { time: '2019-01-04', value: 25.71 },
    { time: '2019-01-07', value: 25.72 },
    { time: '2019-01-08', value: 25.72 },
    { time: '2019-01-09', value: 25.66 },
    { time: '2019-01-10', value: 25.85 },
    { time: '2019-01-11', value: 25.92 },
    { time: '2019-01-14', value: 25.94 },
    { time: '2019-01-15', value: 25.95 },
    { time: '2019-01-16', value: 26.0 },
    { time: '2019-01-17', value: 25.99 },
    { time: '2019-01-18', value: 25.6 },
    { time: '2019-01-22', value: 25.81 },
    { time: '2019-01-23', value: 25.7 },
    { time: '2019-01-24', value: 25.74 },
    { time: '2019-01-25', value: 25.8 },
    { time: '2019-01-28', value: 25.83 },
    { time: '2019-01-29', value: 25.7 },
    { time: '2019-01-30', value: 25.78 },
    { time: '2019-01-31', value: 25.35 },
    { time: '2019-02-01', value: 25.6 },
    { time: '2019-02-04', value: 25.65 },
    { time: '2019-02-05', value: 25.73 },
    { time: '2019-02-06', value: 25.71 },
    { time: '2019-02-07', value: 25.71 },
    { time: '2019-02-08', value: 25.72 },
    { time: '2019-02-11', value: 25.76 },
    { time: '2019-02-12', value: 25.84 },
    { time: '2019-02-13', value: 25.85 },
    { time: '2019-02-14', value: 25.87 },
    { time: '2019-02-15', value: 25.89 },
    { time: '2019-02-19', value: 25.9 },
    { time: '2019-02-20', value: 25.92 },
    { time: '2019-02-21', value: 25.96 },
    { time: '2019-02-22', value: 26.0 },
    { time: '2019-02-25', value: 25.93 },
    { time: '2019-02-26', value: 25.92 },
    { time: '2019-02-27', value: 25.67 },
    { time: '2019-02-28', value: 25.79 },
    { time: '2019-03-01', value: 25.86 },
    { time: '2019-03-04', value: 25.94 },
    { time: '2019-03-05', value: 26.02 },
    { time: '2019-03-06', value: 25.95 },
    { time: '2019-03-07', value: 25.89 },
    { time: '2019-03-08', value: 25.94 },
    { time: '2019-03-11', value: 25.91 },
    { time: '2019-03-12', value: 25.92 },
    { time: '2019-03-13', value: 26.0 },
    { time: '2019-03-14', value: 26.05 },
    { time: '2019-03-15', value: 26.11 },
    { time: '2019-03-18', value: 26.1 },
    { time: '2019-03-19', value: 25.98 },
    { time: '2019-03-20', value: 26.11 },
    { time: '2019-03-21', value: 26.12 },
    { time: '2019-03-22', value: 25.88 },
    { time: '2019-03-25', value: 25.85 },
    { time: '2019-03-26', value: 25.72 },
    { time: '2019-03-27', value: 25.73 },
    { time: '2019-03-28', value: 25.8 },
    { time: '2019-03-29', value: 25.77 },
    { time: '2019-04-01', value: 26.06 },
    { time: '2019-04-02', value: 25.93 },
    { time: '2019-04-03', value: 25.95 },
    { time: '2019-04-04', value: 26.06 },
    { time: '2019-04-05', value: 26.16 },
    { time: '2019-04-08', value: 26.12 },
    { time: '2019-04-09', value: 26.07 },
    { time: '2019-04-10', value: 26.13 },
    { time: '2019-04-11', value: 26.04 },
    { time: '2019-04-12', value: 26.04 },
    { time: '2019-04-15', value: 26.05 },
    { time: '2019-04-16', value: 26.01 },
    { time: '2019-04-17', value: 26.09 },
    { time: '2019-04-18', value: 26.0 },
    { time: '2019-04-22', value: 26.0 },
    { time: '2019-04-23', value: 26.06 },
    { time: '2019-04-24', value: 26.0 },
    { time: '2019-04-25', value: 25.81 },
    { time: '2019-04-26', value: 25.88 },
    { time: '2019-04-29', value: 25.91 },
    { time: '2019-04-30', value: 25.9 },
    { time: '2019-05-01', value: 26.02 },
    { time: '2019-05-02', value: 25.97 },
    { time: '2019-05-03', value: 26.02 },
    { time: '2019-05-06', value: 26.03 },
    { time: '2019-05-07', value: 26.04 },
    { time: '2019-05-08', value: 26.05 },
    { time: '2019-05-09', value: 26.05 },
    { time: '2019-05-10', value: 26.08 },
    { time: '2019-05-13', value: 26.05 },
    { time: '2019-05-14', value: 26.01 },
    { time: '2019-05-15', value: 26.03 },
    { time: '2019-05-16', value: 26.14 },
    { time: '2019-05-17', value: 26.09 },
    { time: '2019-05-20', value: 26.01 },
    { time: '2019-05-21', value: 26.12 },
    { time: '2019-05-22', value: 26.15 },
    { time: '2019-05-23', value: 26.18 },
    { time: '2019-05-24', value: 26.16 },
    { time: '2019-05-28', value: 26.23 },
]);

const container = document.getElementById('container');

const toolTipWidth = 80;
const toolTipHeight = 80;
const toolTipMargin = 15;

// Create and style the tooltip html element
const toolTip = document.createElement('div');
toolTip.style = `width: 96px; height: 100px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
toolTip.style.background = 'white';
toolTip.style.color = 'black';
toolTip.style.borderColor = '#2962FF';
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(param => {
    if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y < 0 ||
        param.point.y > container.clientHeight
    ) {
        toolTip.style.display = 'none';
    } else {
        // time will be in the same format that we supplied to setData.
        // thus it will be YYYY-MM-DD
        const dateStr = param.time;
        toolTip.style.display = 'block';
        const data = param.seriesData.get(series);
        const price = data.value !== undefined ? data.value : data.close;
        toolTip.innerHTML = `<div style="color: ${'#2962FF'}">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
            ${Math.round(100 * price) / 100}
            </div><div style="color: ${'black'}">
            ${dateStr}
            </div>`;

        const coordinate = series.priceToCoordinate(price);
        let shiftedCoordinate = param.point.x - 50;
        if (coordinate === null) {
            return;
        }
        shiftedCoordinate = Math.max(
            0,
            Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate)
        );
        const coordinateY =
            coordinate - toolTipHeight - toolTipMargin > 0
                ? coordinate - toolTipHeight - toolTipMargin
                : Math.max(
                    0,
                    Math.min(
                        container.clientHeight - toolTipHeight - toolTipMargin,
                        coordinate + toolTipMargin
                    )
                );
        toolTip.style.left = shiftedCoordinate + 'px';
        toolTip.style.top = coordinateY + 'px';
    }
});

chart.timeScale().fitContent();
