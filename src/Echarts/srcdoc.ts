export const compoutedSrcDoc = (version: string, codes: string): string => {
    let cdn = `https://registry.npmmirror.com/echarts/${version}/files/dist/echarts.min.js`;
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            *, *::before, *::after {
              box-sizing: border-box;
            }
            * {
              margin: 0;
            }
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            body {
              line-height: 1.5;
              -webkit-font-smoothing: antialiased;
            }
            img, picture, video, canvas, svg {
              display: block;
              max-width: 100%;
            }
            input, button, textarea, select {
              font: inherit;
            }
            p, h1, h2, h3, h4, h5, h6 {
              overflow-wrap: break-word;
            }
            .container {
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
          </style>
        </head>
        <body>
          <div class="container"></div>
        </body>
        <script id="echartsjs" src="${cdn}"><\/script>
        <script id="codes">
          let container = document.querySelector('.container');
          myChart = echarts.init(container);
          myChart.clear();
          ${codes}
          myChart.setOption(option);
          myChart.resize();
          window.onresize = () => {
            myChart.resize();
          };
        <\/script>
    <\/html>`;
};
