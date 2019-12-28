//Setting for canvas
var canvas = new fabric.Canvas('c', { 
  selection: false
});
canvas_width = canvas.get("width");
canvas_height = canvas.get("height");
canvas.hoverCursor = 'auto';

//global settings 
var small_circle = 6;
var big_circle = 12;
var amount_groups = 0;
var state = 0;

//DOM refs
var deviceLayer = document.getElementById("device");
var dataLayer = document.getElementById("data");
var contextLayer = document.getElementById("context");
var teamLayer = document.getElementById("team");
var partiesLayer = document.getElementById("parties");

var dom_layer =[deviceLayer, dataLayer, contextLayer, teamLayer, partiesLayer];

var overlays = ['<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 511 160" xmlns="http://www.w3.org/2000/svg"><title>Group</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(-99 -29)"><g transform="translate(99.22 29.049)"><path d="m289.14 113.23 76.089 23.108-76.089 23.108-38.045-11.555-22.827 6.933-38.044-11.554 22.826-6.932 33.03 10.03-33.029-10.03 76.089-23.108zm175.01-6.9325 45.654 13.865-121.74 36.973-45.654-13.865 45.654-13.865 30.435-9.2429-38.044-11.553-53.263 16.175-38.045-11.554 98.916-30.041 76.09 23.108zm-281.53-11.554 53.261 16.175 0.0013 1e-3 30.436 9.243-106.52 32.351-30.436-9.243 30.434-9.244-38.043-11.553 22.827-6.933-15.217-4.6211 53.262-16.176zm-38.045-11.554 38.044 11.554-76.089 23.108-38.044-11.554 76.089-23.108zm30.436-64.702 91.307 27.729-7.6102 2.3101-53.263 16.176 2e-3 4e-4 -152.18 46.215-53.262-16.175 60.872-18.486-45.654-13.864 30.436-9.243 60.871 18.486 45.654-13.865-53.263-16.174 76.09-23.108zm152.18-18.487 45.654 13.865-22.827 6.932 53.262 16.176-30.436 9.2428 68.479 20.798 30.438-9.2434 38.045 11.554-47.329 14.372 21.306 6.4708-36.371 11.046-21.305-6.4708-2e-4 6e-4 -106.52-32.351 45.653-13.865-45.654 13.866-53.262-16.176 45.653-13.865-1e-3 -1e-3 -45.652 13.866-76.089-23.108 45.653-13.865 38.045 11.553-7.609-2.31 60.872-18.486z" fill="#04B0C2"/><line x1="509.88" x2="145.28" y1="119.35" y2="8.4509" stroke="#fff" stroke-width=".5"/><line x1="23.178" x2="388.28" y1="119.24" y2="8.4509" stroke="#000" stroke-width=".5"/><line x1="145.07" x2="510.28" y1="156.25" y2="45.451" stroke="#000" stroke-width=".5"/><line x1="388.13" x2="22.28" y1="156.32" y2="45.451" stroke="#fff" stroke-width=".5"/></g></g></g></svg>',
'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 720 219" xmlns="http://www.w3.org/2000/svg"><title>Green_tiles_AI</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(-3 -4)"><g transform="translate(3 4)"><polygon points="9e-4 110.82 15.148 115.42 195.25 60.718 180.1 56.118" fill="#16B382"/><polygon points="378.21 5.1404 204.62 57.859 189.47 53.259 363.06 0.5404" fill="#16B382"/><polygon points="401.39 11.903 341.1 30.212 325.95 25.612 386.24 7.3026" fill="#16B382"/><polygon points="333.07 32.649 144.18 90.014 129.03 85.414 317.92 28.049" fill="#16B382"/><polygon points="136.3 92.406 37.994 122.26 22.848 117.66 121.16 87.806" fill="#16B382"/><polygon points="226.86 78.874 60.845 129.29 45.699 124.69 211.72 74.274" fill="#16B382"/><polygon points="424.25 18.94 242.64 74.096 227.49 69.497 409.11 14.34" fill="#16B382"/><polygon points="318.33 64.883 183.06 105.96 167.92 101.36 303.18 60.283" fill="#16B382"/><polygon points="173.86 108.78 83.584 136.2 68.437 131.6 158.72 104.18" fill="#16B382"/><polygon points="447.13 25.793 325.94 62.595 310.8 57.995 431.98 21.193" fill="#16B382"/><polygon points="159.26 126.98 106.24 143.08 91.093 138.48 144.11 122.38" fill="#16B382"/><polygon points="280.35 90.15 166.74 124.65 151.6 120.05 265.2 85.55" fill="#16B382"/><polygon points="469.69 32.647 287.92 87.85 272.78 83.25 454.55 28.047" fill="#16B382"/><polygon points="204.61 126.95 128.87 149.95 113.72 145.35 189.46 122.35" fill="#16B382"/><polygon points="250.05 113.15 212.18 124.65 197.04 120.05 234.91 108.55" fill="#16B382"/><polygon points="189.5 145.36 151.63 156.86 136.49 152.27 174.36 140.76" fill="#16B382"/><polygon points="272.77 120.05 197.03 143.05 181.89 138.45 257.62 115.45" fill="#16B382"/><polygon points="295.51 126.96 174.33 163.76 159.18 159.16 280.37 122.36" fill="#16B382"/><polygon points="318.21 133.85 197.03 170.65 181.88 166.05 303.06 129.25" fill="#16B382"/><polygon points="340.91 140.74 219.73 177.54 204.58 172.94 325.76 136.14" fill="#16B382"/><polygon points="363.6 147.64 242.42 184.44 227.28 179.84 348.46 143.04" fill="#16B382"/><polygon points="431.89 57.968 371.3 76.369 356.15 71.769 416.74 53.368" fill="#16B382"/><polygon points="492.41 39.547 439.4 55.648 424.25 51.048 477.27 34.947" fill="#16B382"/><polygon points="363.54 74.013 242.36 110.82 234.9 108.55 356.08 71.748" fill="#16B382"/><polygon points="515.18 46.46 393.99 83.261 378.85 78.662 500.03 41.86" fill="#16B382"/><polygon points="537.87 53.352 416.69 90.154 401.55 85.554 522.73 48.752" fill="#16B382"/><polygon points="560.57 60.245 484.83 83.246 469.69 78.646 545.42 55.645" fill="#16B382"/><polygon points="477.26 85.547 439.39 97.047 424.24 92.448 462.11 80.947" fill="#16B382"/><polygon points="583.27 67.138 462.09 103.94 446.94 99.34 568.12 62.538" fill="#16B382"/><polygon points="605.96 74.032 484.78 110.83 469.64 106.23 590.82 69.432" fill="#16B382"/><polygon points="348.43 166.03 265.12 191.33 249.97 186.73 333.29 161.43" fill="#16B382"/><polygon points="567.99 99.3 355.92 163.7 340.77 159.1 552.84 94.7" fill="#16B382"/><polygon points="628.58 80.899 575.56 97 560.41 92.4 613.43 76.299" fill="#16B382"/><polygon points="469.59 143.02 287.82 198.22 272.67 193.62 454.44 138.42" fill="#16B382"/><polygon points="651.3 87.798 477.1 140.7 461.95 136.1 636.15 83.198" fill="#16B382"/><polygon points="674.06 94.711 552.88 131.51 537.73 126.91 658.91 90.111" fill="#16B382"/><polygon points="545.26 133.8 439.23 166 424.08 161.4 530.11 129.2" fill="#16B382"/><polygon points="431.65 168.3 310.47 205.1 295.33 200.5 416.51 163.7" fill="#16B382"/><polygon points="696.75 101.6 530.13 152.21 514.98 147.61 681.61 97.004" fill="#16B382"/><polygon points="522.54 154.5 333.19 212 318.05 207.4 507.39 149.9" fill="#16B382"/><polygon points="446.79 191.3 355.91 218.9 340.76 214.3 431.65 186.7" fill="#16B382"/><polygon points="643.72 131.5 454.37 189 439.22 184.4 628.57 126.9" fill="#16B382"/><polygon points="719.45 108.5 651.29 129.2 636.14 124.6 704.31 103.9" fill="#16B382"/><line x1="607.26" x2="242.66" y1="148" y2="37.104" stroke="#fff" stroke-width=".5"/><line x1="120.56" x2="485.66" y1="147.89" y2="37.104" stroke="#000" stroke-width=".5"/><line x1="242.46" x2="607.66" y1="184.91" y2="74.104" stroke="#000" stroke-width=".5"/><line x1="485.52" x2="119.66" y1="184.98" y2="74.104" stroke="#fff" stroke-width=".5"/></g></g></g></svg>'
,'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 583 175" xmlns="http://www.w3.org/2000/svg"><title>Group</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(-74 -25)"><g transform="translate(74 25)"><polygon points="365.79 14.351 389.59 7.2126 413.37 14.347 389.57 21.485" fill="#FAA71B"/><polygon points="389.57 21.485 413.37 14.347 437.15 21.481 413.35 28.619" fill="#FAA71B"/><polygon points="460.93 28.615 437.13 35.753 413.35 28.619 437.15 21.481" fill="#FAB034"/><polygon points="437.13 35.752 413.34 42.89 389.56 35.756 413.35 28.618" fill="#FAB034"/><polygon points="413.35 28.619 389.56 35.757 365.78 28.623 389.57 21.485" fill="#FAB034"/><polygon points="389.57 21.485 365.78 28.623 342 21.489 365.79 14.351" fill="#FAB034"/><polygon points="365.79 14.351 342 21.489 318.22 14.355 342.01 7.2166" fill="#FAB034"/><polygon points="389.59 7.2124 365.79 14.35 342.01 7.2164 365.81 0.0784" fill="#FAB034"/><polygon points="487.24 50.785 511.04 43.647 534.82 50.781 511.02 57.919" fill="#FAA71B"/><polygon points="511.02 57.92 534.82 50.782 558.6 57.916 534.8 65.054" fill="#FAA71B"/><polygon points="582.38 65.049 558.58 72.187 534.8 65.053 558.6 57.915" fill="#FAB034"/><polygon points="558.58 72.188 534.79 79.326 511.01 72.192 534.8 65.054" fill="#FAB034"/><polygon points="534.8 65.053 511.01 72.191 487.23 65.057 511.02 57.919" fill="#FAB034"/><polygon points="511.02 57.92 487.23 65.058 463.45 57.924 487.24 50.786" fill="#FAB034"/><polygon points="487.24 50.785 463.45 57.923 439.67 50.789 463.46 43.651" fill="#FAB034"/><polygon points="511.04 43.648 487.24 50.786 463.46 43.652 487.26 36.514" fill="#FAB034"/><polygon points="314.44 44.043 291.59 37.19 314.41 30.344 337.26 37.197" fill="#FAB034"/><polygon points="268.46 57.837 245.61 50.984 268.43 44.138 291.28 50.991" fill="#FAA71B"/><polygon points="245.97 64.582 223.13 57.729 245.95 50.883 268.79 57.736" fill="#FAB034"/><polygon points="223.13 57.728 200.29 50.876 223.11 44.03 245.95 50.882" fill="#FAB034"/><polygon points="245.95 50.882 223.11 44.029 245.93 37.183 268.77 44.036" fill="#FAB034"/><polygon points="268.77 44.036 245.93 37.183 268.75 30.337 291.59 37.19" fill="#FAB034"/><polygon points="291.59 37.19 268.75 30.337 291.57 23.491 314.41 30.344" fill="#FAB034"/><polygon points="337.28 50.896 314.44 44.043 337.26 37.197 360.1 44.05" fill="#FAB034"/><polygon points="360.12 57.749 337.28 50.896 360.1 44.05 382.94 50.903" fill="#FAB034"/><polygon points="337.3 64.595 314.46 57.742 337.28 50.896 360.12 57.749" fill="#FAB034"/><polygon points="291.28 50.991 268.43 44.138 291.25 37.292 314.1 44.145" fill="#FAA71B"/><polygon points="314.12 57.844 291.28 50.991 314.1 44.145 336.94 50.998" fill="#FAA71B"/><polygon points="367.26 73.544 390.33 66.624 413.38 73.54 390.31 80.46" fill="#FAB034"/><polygon points="390.33 66.623 413.4 59.703 436.45 66.619 413.38 73.54" fill="#FAB034"/><polygon points="413.38 73.54 436.45 66.619 459.51 73.536 436.44 80.457" fill="#FAB034"/><polygon points="436.44 80.456 459.51 73.535 482.56 80.452 459.49 87.372" fill="#FAB034"/><polygon points="459.49 87.372 482.56 80.452 505.62 87.368 482.55 94.289" fill="#FAB034"/><polygon points="436.42 94.293 459.49 87.372 482.55 94.289 459.48 101.21" fill="#FAB034"/><polygon points="413.36 101.21 436.42 94.293 459.48 101.21 436.41 108.13" fill="#FAB034"/><polygon points="390.29 108.13 413.36 101.21 436.41 108.13 413.34 115.05" fill="#FAB034"/><polygon points="367.23 101.22 390.3 94.297 413.36 101.21 390.29 108.13" fill="#FAB034"/><polygon points="390.08 80.529 413.15 73.609 436.21 80.525 413.14 87.446" fill="#FAA71B"/><polygon points="413.14 87.445 436.21 80.525 459.26 87.441 436.19 94.362" fill="#FAA71B"/><polygon points="390.07 94.366 413.14 87.446 436.19 94.362 413.13 101.28" fill="#FAA71B"/><polygon points="192.26 80.697 169.41 73.844 146.59 80.69 169.44 87.543" fill="#FAA71B"/><polygon points="214.74 73.953 191.89 67.1 169.07 73.946 191.92 80.799" fill="#FAB034"/><polygon points="191.89 67.1 169.05 60.247 146.23 67.093 169.07 73.946" fill="#FAB034"/><polygon points="169.07 73.946 146.23 67.093 123.41 73.939 146.25 80.792" fill="#FAB034"/><polygon points="146.25 80.792 123.41 73.939 100.59 80.785 123.43 87.638" fill="#FAB034"/><polygon points="123.43 87.638 100.59 80.785 77.77 87.631 100.61 94.484" fill="#FAB034"/><polygon points="146.19 94.371 123.35 87.518 100.53 94.364 123.37 101.22" fill="#FAB034"/><polygon points="169.01 101.12 146.17 94.271 123.35 101.12 146.19 107.97" fill="#FAB034"/><polygon points="191.96 108.2 169.12 101.34 146.3 108.19 169.14 115.04" fill="#FAB034"/><polygon points="214.78 101.35 191.94 94.498 169.12 101.34 191.96 108.2" fill="#FAB034"/><polygon points="169.44 87.544 146.59 80.69 123.77 87.536 146.62 94.39" fill="#FAA71B"/><polygon points="192.28 94.396 169.43 87.544 146.61 94.39 169.46 101.24" fill="#FAA71B"/><polygon points="244.61 110.34 221.54 117.26 244.6 124.17 267.67 117.25" fill="#FAB034"/><polygon points="221.54 117.26 198.47 124.18 221.53 131.1 244.6 124.18" fill="#FAB034"/><polygon points="244.6 124.17 221.53 131.09 244.58 138.01 267.65 131.09" fill="#FAB034"/><polygon points="267.65 131.09 244.58 138.01 267.64 144.93 290.71 138.01" fill="#FAB034"/><polygon points="290.71 138.01 267.64 144.93 290.69 151.84 313.76 144.92" fill="#FAB034"/><polygon points="313.78 131.09 290.71 138.01 313.76 144.92 336.83 138" fill="#FAB034"/><polygon points="336.84 124.17 313.78 131.09 336.83 138 359.9 131.08" fill="#FAB034"/><polygon points="359.91 117.25 336.84 124.17 359.9 131.08 382.97 124.16" fill="#FAB034"/><polygon points="336.86 110.33 313.79 117.25 336.84 124.17 359.91 117.25" fill="#FAB034"/><polygon points="267.9 117.19 244.83 124.11 267.88 131.02 290.95 124.1" fill="#FAA71B"/><polygon points="290.95 124.1 267.88 131.02 290.94 137.94 314.01 131.02" fill="#FAA71B"/><polygon points="314.02 117.18 290.95 124.1 314.01 131.02 337.07 124.1" fill="#FAA71B"/><polygon points="216.69 160.4 192.9 167.53 169.12 160.4 192.91 153.26" fill="#FAA71B"/><polygon points="192.91 153.26 169.12 160.4 145.34 153.27 169.13 146.13" fill="#FAA71B"/><polygon points="121.56 146.13 145.35 138.99 169.13 146.13 145.34 153.27" fill="#FAB034"/><polygon points="145.35 138.99 169.14 131.86 192.93 138.99 169.13 146.13" fill="#FAB034"/><polygon points="169.13 146.13 192.93 138.99 216.71 146.12 192.91 153.26" fill="#FAB034"/><polygon points="192.91 153.26 216.7 146.12 240.48 153.26 216.69 160.4" fill="#FAB034"/><polygon points="216.69 160.4 240.48 153.26 264.27 160.39 240.47 167.53" fill="#FAB034"/><polygon points="192.9 167.53 216.69 160.4 240.47 167.53 216.68 174.67" fill="#FAB034"/><polygon points="95.242 123.96 71.449 131.1 47.669 123.96 71.462 116.83" fill="#FAA71B"/><polygon points="71.462 116.83 47.67 123.96 23.888 116.83 47.682 109.69" fill="#FAA71B"/><polygon points="0.1089 109.7 23.902 102.56 47.683 109.69 23.889 116.83" fill="#FAB034"/><polygon points="23.902 102.56 47.696 95.421 71.476 102.55 47.682 109.69" fill="#FAB034"/><polygon points="47.683 109.69 71.476 102.55 95.256 109.69 71.463 116.83" fill="#FAB034"/><polygon points="71.462 116.83 95.256 109.69 119.04 116.82 95.242 123.96" fill="#FAB034"/><polygon points="95.242 123.96 119.04 116.82 142.82 123.96 119.02 131.09" fill="#FAB034"/><polygon points="71.449 131.1 95.242 123.96 119.02 131.09 95.229 138.23" fill="#FAB034"/><polygon points="47.573 65.004 23.793 57.87 47.587 50.732 71.367 57.866" fill="#FAA71B"/><polygon points="71.367 57.866 47.587 50.732 71.38 43.594 95.16 50.728" fill="#FAA71B"/><polygon points="95.174 36.456 118.95 43.59 95.16 50.728 71.38 43.594" fill="#FAB034"/><polygon points="118.95 43.59 142.73 50.724 118.94 57.862 95.161 50.728" fill="#FAB034"/><polygon points="95.16 50.728 118.94 57.862 95.146 65 71.367 57.866" fill="#FAB034"/><polygon points="71.367 57.866 95.147 65 71.353 72.138 47.573 65.004" fill="#FAB034"/><polygon points="47.573 65.004 71.353 72.138 47.559 79.276 23.78 72.142" fill="#FAB034"/><polygon points="23.793 57.87 47.573 65.004 23.779 72.142 -1.4211e-14 65.008" fill="#FAB034"/><polygon points="169.09 28.548 145.31 21.414 169.11 14.276 192.89 21.41" fill="#FAA71B"/><polygon points="192.89 21.41 169.11 14.276 192.9 7.1382 216.68 14.272" fill="#FAA71B"/><polygon points="216.69 8.8818e-16 240.47 7.134 216.68 14.272 192.9 7.138" fill="#FAB034"/><polygon points="240.47 7.1338 264.25 14.268 240.46 21.406 216.68 14.272" fill="#FAB034"/><polygon points="216.68 14.272 240.46 21.406 216.66 28.544 192.89 21.41" fill="#FAB034"/><polygon points="192.89 21.41 216.67 28.544 192.87 35.682 169.09 28.548" fill="#FAB034"/><polygon points="169.09 28.548 192.87 35.682 169.08 42.82 145.3 35.686" fill="#FAB034"/><polygon points="145.31 21.414 169.09 28.548 145.3 35.686 121.52 28.552" fill="#FAB034"/><polygon points="535.06 109.79 558.84 116.92 535.05 124.06 511.27 116.93" fill="#FAA71B"/><polygon points="511.27 116.93 535.05 124.06 511.26 131.2 487.48 124.06" fill="#FAA71B"/><polygon points="487.46 138.34 463.68 131.2 487.48 124.06 511.26 131.2" fill="#FAB034"/><polygon points="463.68 131.2 439.9 124.07 463.7 116.93 487.48 124.06" fill="#FAB034"/><polygon points="487.48 124.06 463.7 116.93 487.49 109.79 511.27 116.93" fill="#FAB034"/><polygon points="511.27 116.93 487.49 109.79 511.28 102.65 535.06 109.79" fill="#FAB034"/><polygon points="535.06 109.79 511.28 102.65 535.08 95.516 558.86 102.65" fill="#FAB034"/><polygon points="558.84 116.92 535.06 109.79 558.86 102.65 582.64 109.78" fill="#FAB034"/><polygon points="413.55 146.24 437.33 153.38 413.53 160.52 389.75 153.38" fill="#FAA71B"/><polygon points="389.75 153.38 413.53 160.52 389.74 167.65 365.96 160.52" fill="#FAA71B"/><polygon points="365.94 174.79 342.16 167.66 365.96 160.52 389.74 167.65" fill="#FAB034"/><polygon points="342.16 167.66 318.38 160.52 342.18 153.39 365.96 160.52" fill="#FAB034"/><polygon points="365.96 160.52 342.18 153.39 365.97 146.25 389.75 153.38" fill="#FAB034"/><polygon points="389.75 153.38 365.97 146.25 389.77 139.11 413.55 146.24" fill="#FAB034"/><polygon points="413.55 146.24 389.77 139.11 413.56 131.97 437.34 139.11" fill="#FAB034"/><polygon points="437.33 153.38 413.55 146.24 437.34 139.11 461.12 146.24" fill="#FAB034"/><line x1="533.01" x2="168.41" y1="124.33" y2="13.432" stroke="#fff" stroke-width=".5"/><line x1="46.312" x2="411.41" y1="124.22" y2="13.432" stroke="#000" stroke-width=".5"/><line x1="168.21" x2="533.41" y1="161.24" y2="50.432" stroke="#000" stroke-width=".5"/><line x1="411.27" x2="45.414" y1="161.3" y2="50.432" stroke="#fff" stroke-width=".5"/></g></g></g></svg>'
,'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 668 201" xmlns="http://www.w3.org/2000/svg"><title>Group</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(-33 -10)"><polygon points="518.29 110.45 366.83 155.89 215.34 110.45 366.8 65.008" stroke="#FA8857" stroke-width=".316"/><polygon points="548.8 110.45 366.83 165.05 184.83 110.45 366.8 55.856" stroke="#FA8857" stroke-width=".38"/><polygon points="578.86 110.46 366.83 174.06 154.77 110.45 366.8 46.837" stroke="#FA8857" stroke-width=".443"/><polygon points="609.21 110.46 366.84 183.17 124.43 110.45 366.8 37.734" stroke="#FA8857" stroke-width=".506"/><polygon points="639.47 110.46 366.84 192.25 94.164 110.44 366.8 28.654" stroke="#FA8857" stroke-width=".569"/><polygon points="669.77 110.46 366.84 201.34 63.867 110.44 366.79 19.565" stroke="#FA8857" stroke-width=".633"/><polygon points="700.08 110.46 366.84 210.43 33.555 110.44 366.79 10.472" stroke="#FA8857" stroke-width=".696"/><line x1="609.26" x2="244.66" y1="148" y2="37.104" stroke="#fff" stroke-width=".5"/><line x1="122.56" x2="487.66" y1="147.89" y2="37.104" stroke="#000" stroke-width=".5"/><line x1="244.46" x2="609.66" y1="184.91" y2="74.104" stroke="#000" stroke-width=".5"/><line x1="487.52" x2="121.66" y1="184.98" y2="74.104" stroke="#fff" stroke-width=".5"/><rect width="733" height="228"/></g></g></svg>'
,'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 728 219" xmlns="http://www.w3.org/2000/svg"><title>Purple_tiles_AI</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(-3 -5)"><g transform="translate(3 5)"><polygon points="121.65 145.93 86.816 120.03 0.4171 109.64" fill="#E063FF"/><polyline points="121.65 145.93 208.05 156.32 242.89 182.21" fill="#E063FF"/><polyline points="363.52 73.191 449.92 83.58 484.76 109.48" fill="#E063FF"/><polygon points="364.12 218.49 329.29 192.6 242.89 182.21" fill="#E063FF"/><polygon points="640.79 98.924 727.19 109.31 605.96 73.029" fill="#E063FF"/><polyline points="484.72 36.746 398.32 26.356 363.48 0.4615" fill="#E063FF"/><polyline points="605.96 73.029 519.56 62.64 484.72 36.745" fill="#E063FF"/><polyline points="363.63 145.9 277.23 135.51 242.39 109.62" fill="#E063FF"/><polyline points="242.44 36.943 207.65 62.881 121.28 73.379" fill="#E063FF"/><polyline points="484.76 109.47 449.97 135.4 363.6 145.9" fill="#E063FF"/><polyline points="363.6 0.5072 328.82 26.445 242.44 36.943" fill="#E063FF"/><polygon points="0.1134 109.81 86.491 99.317 121.28 73.379" fill="#E063FF"/><polygon points="398.64 192.74 363.85 218.68 485.02 182.24" fill="#E063FF"/><polyline points="485.02 182.24 519.8 156.3 606.18 145.8" fill="#E063FF"/><polyline points="242.39 109.63 277.18 83.689 363.56 73.191" fill="#E063FF"/><polygon points="640.97 119.87 606.18 145.8 727.34 109.37" fill="#E063FF"/><line x1="608.26" x2="243.66" y1="146" y2="35.104" stroke="#fff" stroke-width=".5"/><line x1="121.56" x2="486.66" y1="145.89" y2="35.104" stroke="#000" stroke-width=".5"/><line x1="243.46" x2="608.66" y1="182.91" y2="72.104" stroke="#000" stroke-width=".5"/><line x1="486.52" x2="120.66" y1="182.98" y2="72.104" stroke="#fff" stroke-width=".5"/></g></g></g></svg>']

//Setting for green tile
var tile_green = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#17BC89" fill="#17BC89"></path><polygon></polygon></g></g></svg>');

var green_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#17BC89',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var green_group = new fabric.Group();

//Setting for acqua tile
var tile_acqua = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#04BBCE" fill="#04BBCE"></path><polygon></polygon></g></g></svg>');

var acqua_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#04BBCE',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var acqua_group = new fabric.Group();

//Setting for yellow tile
var tile_yellow = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#FAB644" fill="#FAB644"></path><polygon></polygon></g></g></svg>');

var yellow_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#FAB644',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var yellow_group = new fabric.Group();

//Setting for orange tile
var tile_orange = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#FA7A44" fill="#FA7A44"></path><polygon></polygon></g></g></svg>')

var orange_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#FA7A44',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var orange_group = new fabric.Group();

//Setting for purple tile
var tile_purple = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#D544FA" fill="#D544FA"></path><polygon></polygon></g></g></svg>')

var purple_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#D544FA',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var purple_group = new fabric.Group();

//Setting for white tile
var tile_white = new String('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="244px" height="80px" viewBox="0 0 244 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tile_white"><path d="M1.72280073,37 L122,73.4775113 L242.277199,37 L122,0.522488747 L1.72280073,37 Z" id="Rectangle-Copy-9" stroke="#D0BAEC" fill="#D0BAEC"></path><polygon></polygon></g></g></svg>')

var white_Circle = new fabric.Circle({
  radius: small_circle,
  fill: '#D0BAEC',
  strokeWidth: 2,
  stroke: '#412E5A',
});

var white_group = new fabric.Group();
var white_obj;

//Pop-up stuff
var pop_up_group = new fabric.Group();
var pop_up = new String('<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 312 153" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="50%" x2="50%" y2="100%"><stop stop-color="#2D9DD7" offset="0"/><stop stop-color="#1E8AC3" offset="1"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="m156.5 151.75 6.3963-7.2519h134.1c8.0081 0 14.5-6.4919 14.5-14.5v-115c0-8.0081-6.4919-14.5-14.5-14.5h-282c-8.0081 0-14.5 6.4919-14.5 14.5v115c0 8.0081 6.4919 14.5 14.5 14.5h135.1l6.3963 7.2519z" fill="#fff" opacity=".95375" stroke="#E6E6E6"/><rect x="100.02" y="101.87" width="107.76" height="32.258" rx="8" fill="url(#a)"/><rect x="100.02" y="101.87" width="107.76" height="32.258" rx="8" fill="url(#a)"/><path d="m139.01 123.19c4.512 0 6.176-1.904 6.176-6.016 0-3.856-1.632-5.728-6.144-5.728h-2.48v11.744h2.448zm0.304-1.696h-0.672v-8.368h0.72c2.672 0 3.68 1.168 3.68 4.128 0 3.168-1.152 4.24-3.728 4.24zm11.04 1.888c2.48 0 4-1.52 4-4.448 0-2.688-1.44-4.144-3.808-4.144-2.256 0-4.064 1.488-4.064 4.304 0 2.736 1.312 4.288 3.872 4.288zm0.08-1.44c-1.392 0-1.888-1.136-1.888-2.864 0-1.696 0.608-2.816 1.92-2.816s1.84 1.072 1.84 2.768c0 1.728-0.544 2.912-1.872 2.912zm7.456 1.248v-4.576c0-1.216 0.384-2.304 1.808-2.304 0.976 0 1.456 0.56 1.456 2.048v4.832h2v-4.992c0-2.384-1.056-3.408-2.816-3.408-1.472 0-2.176 0.768-2.512 1.392h-0.032l-0.08-1.2h-1.824v8.208h2zm10.576 0.192c1.408 0 3.088-0.496 3.456-2.8l-1.68-0.176c-0.176 1.088-0.8 1.504-1.712 1.504-1.392 0-1.856-1.008-1.872-2.416h5.312c0.032-0.304 0.048-0.64 0.048-0.912 0-2.4-1.168-3.792-3.392-3.792-2.528 0-4.016 1.68-4.016 4.384 0 2.416 1.088 4.208 3.856 4.208zm1.616-5.232h-3.408c0.048-1.072 0.592-2.016 1.808-2.016 1.12 0 1.648 0.736 1.6 2.016z" fill="#fff" fill-rule="nonzero"/><rect x="10" y="45" width="291" height="46" rx="4" fill="#F4F4F4" opacity=".72991"/></g></svg>')

var input;
var active_group;
var stack = [];
var old_highlight_group;


//ethic values
var values = ["Privacy","Participation","Accountability","Autonomy","Responsibility","Dignity","Transparency","Non-Discrimination","Inclusion & Diversity","Ineteroperability","Data Protection","Safety & Security","Wellbeing"]

var problem_values = ["Dignity","Non-discrimination","Autonomy","Responsibility","Accountability","Sustainability","Safety & Security","Openness","Wellbeing","Transparency","Participation","Inclusion & Equality"]

var selected_values = [];

var valuesGroup = new fabric.Group();

/**************************************/
/*                                    */
/*           init the stack           */
/*                                    */
/**************************************/

generate_tile(tile_acqua, acqua_Circle, acqua_group, "Device", "Device",true);
generate_tile(tile_green, green_Circle, green_group, "Data", "Data",false);
generate_tile(tile_yellow, yellow_Circle, yellow_group, "Context", "Context",false); 
generate_tile(tile_orange, orange_Circle, orange_group, "Team", "Team",false);
generate_tile(tile_purple, purple_Circle, purple_group, "3rd Parties", "3rd Parties",false);

function generate_tile(tile, circle, group, id, text, isActive) {

  stack.push(group)

	//generate  tiles with circles
  fabric.loadSVGFromString(tile, function(objects, options) {
  	var tile_obj = fabric.util.groupSVGElements(objects, options);
  	height = tile_obj.get("height");
    height = height - 6;
  	width = tile_obj.get("width");
  	tile_obj.selectable = false;

    	for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          tile_obj.clone(function(i, j) {
            return function(clone) {
            	if (i == 1 && j == 1) {
            		clone.set({
                   originX: 'center',
                   originY: 'center',
                   top: (((height/2) * i)+height/2) + (height/2 * j),
                   left: (((width/2) * i) + width/2) - (width/2*j)
                });
                clone._objects[0].set({
                  opacity: 0
                })

          	} else {
  	            clone.set({
  	               originX: 'center',
  	  				     originY: 'center',
  	               top: (((height/2) * i)+height/2) + (height/2 * j),
  	  				     left: (((width/2) * i) + width/2) - (width/2*j)
  	            });
              }
            group.addWithUpdate(clone);
            };
          }(i, j));
        }
      }

      var overlay = new String(overlays[amount_groups]);
      
      fabric.loadSVGFromString(overlay,function(objects, options) {
        var overlay_obj = fabric.util.groupSVGElements(objects, options);
        overlay_obj.set({
            originX: 'center',
            originY: 'center',
            id:'overlay'
          })
        
        if (amount_groups == 0) {
          overlay_obj.set({
            left:-12,
            top:-6
          })
        }

        if (amount_groups == 1) {
          overlay_obj.set({
            left:-3,
            top:-4
          })
        }

        if (amount_groups == 2) {
          overlay_obj.set({
            left:0,
            top:-3
          })
        }

        if (amount_groups == 3) {
          overlay_obj.set({
            left:0,
            top:-3
          })
        }

        if (amount_groups == 4) {
          overlay_obj.set({
            left:0,
            top:-3
          })
        }

        group.add(overlay_obj)
      
      });

      

      let circle_number = 0;
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 4; j++) {
            circle.clone(function(i, j) {
              return function(clone) {
                if (circle_number != 0 && circle_number != 3 && circle_number != 12 && circle_number != 15) {
                    clone.set({
                    originX: 'center',
                    originY: 'center',
                    top: (((height-2)/2) * i) + ((height-2)/2 * j),
                    left: (((width/2) * i) + width/2) - (width/2*j),
                    id: id + "_circle_" + circle_number,
                    fill: '#FFF',
                    isFilled:false,
                    isValue:false,
                    opacity: 0,
                    layer:id
                  });

                  if (isActive) {
                  	clone.set({
                    	opacity: 1
                    });
                  }
                  
                  var elements = new fabric.Textbox("", {
                    originX: 'center',
                    originY: 'center',
                    left: clone.left,
                    top: clone.top-20,
                    fontSize: 16,
                    fontFamily: "input-sans, sans-serif",
                    fontWeight: 400,
                    textAlign: "center",
                    fill:"#000",
                    id:id + "_circle_" + circle_number
                  });

                  group.addWithUpdate(elements);
                  group.addWithUpdate(clone);
                }
                circle_number++
              };
            }(i, j));
          }
        }

      if (isActive) {
        active_group = group
        active_group.isActive = true;
      }

    var textbox = new fabric.Textbox(text, {
      originX: 'center',
      originY: 'center',
      left: 120,
      top: 185,
      width: 200,
      fontSize: 18,
      fontFamily: "tablet-gothic, sans-serif",
      fontWeight: 700,
      textAlign: "center",
      fill:"#fff",
      id:"title"
    });
    
    group.addWithUpdate(textbox)

  	group.set({
  		selectable:false,
  		originX: 'center',
  		originY: 'center',
  		top: (group.height*1.15) + ((height*0.85) * amount_groups),
  		left: (canvas_width/2),
  		subTargetCheck:true,
  		perPixelTargetFind:true,
  		id:id,
      opacity:"1",
      isActive: isActive,
      pos: amount_groups,
      textboxTop:textbox.top,
      textboxLeft:textbox.left,
      hasText: false
  	})

    group.set({
      org_top: group.top,
      org_left: group.left
    })

    //console.log("rgb("+convertHex(circle.fill)+") 2px 2px");
    group.setShadow("0px 0px 0px rgb("+convertHex(circle.fill)+")");
    
  	canvas.add(group);
  	
    canvas.sendToBack(group);
  	amount_groups++
  });
}

for (var i = 0; i < stack.length; i++) {
  if (stack[i].isActive){
    highligt_the_stack(stack[i])
    for (var e = active_group.getObjects().length - 1; e >= 0; e--) {
      if (active_group.getObjects()[e].id == "title") {
        active_group.getObjects()[e].set({
          top: -140,
          fontSize: 28,
          fill: active_group._objects[0]._objects[0].fill,
          opacity: 0
        })
      }
    }
  }
}

function load_pop_up(top, left) {

  if (pop_up_group.getObjects().length != 0) {
    for (var i = pop_up_group.getObjects().length - 1; i >= 0; i--) {
      pop_up_group.remove(pop_up_group.getObjects()[i])
    }
  }

  canvas.remove(pop_up_group)
  canvas.renderAll();

  fabric.loadSVGFromString(pop_up, function(objects, options) {
    var pop_obj = fabric.util.groupSVGElements(objects, options);
    pop_obj.set({
      selectable:true,
      originX: 'center',
      originY: 'center',
      top: top,
      left: left,
      id:"pop_up"
    })

    var header = new fabric.Textbox(active_group.id + " – New Element", {
      originX: 'center',
      originY: 'center',
      left: left,
      top: top - 52,
      width: 291,
      fontSize: 14,
      fontFamily: "input-sans, sans-serif",
      fontWeight: 400,
      textAlign: "center",
      fill:"#8F8F8F",
      charSpacing:0,
      id:"header"
    });

    var footer = new fabric.Textbox("Click here\nwhen you are done", {
      originX: 'center',
      originY: 'center',
      left: left,
      top: top+40,
      width: 291,
      fontSize: 16,
      fontFamily: "input-sans, sans-serif",
      fontWeight: 400,
      textAlign: "center",
      fill:"#D0BAEC",
      charSpacing:0,
      id:"footer"
    });

    
    input = new fabric.Textbox('Tap and Type', {
      originX: 'center',
      originY: 'center',
      left: left,
      top: top-6,
      width: 291,
      fontSize: 18,
      fontFamily: "input-sans, sans-serif",
      fontWeight: 400,
      textAlign: "center",
      fill:"#4D4D4D",
      objecttype: 'text',
      id:"input",
      hasControls:false,
      hasRotatingPoint:false,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
    });


    pop_up_group.set({
      selectable:false,
      subTargetCheck:true
    });

    pop_up_group.addWithUpdate(pop_obj)
    pop_up_group.addWithUpdate(header)
    //pop_up_group.addWithUpdate(footer)
    pop_up_group.addWithUpdate(input)

    canvas.add(pop_up_group);
    canvas.renderAll();
  })

  input.on('editing:exited', function () {
    for (var i = 0; i < items.length; i++) {
      canvas.remove(items[i]);
      if (items[i].id == "input") {
         addTextNode(items[i].text, items[i].top, items[i].left);
      }
    }
  });
  canvas.renderAll();
}

var last_group;
var old_group;
var current_group;
var current_circle
var stack_circle

function ungroup(group) {
  items = group.getObjects();
  group._restoreObjectsState();
  canvas.remove(group);
  canvas.renderAll();
  
  for (var i = 0; i < items.length; i++) {
        if (items[i].id == "header") {
          items[i].set({
            selectable:false,
            editable: false,
            width: 291,
            fontSize: 14,
            fontFamily: "input-sans, sans-serif",
            fontWeight: 400,
            textAlign: "center",
            fill:"#8F8F8F",
          })
        }

        if (items[i].id == "footer") {
          items[i].set({
            selectable:false,
            editable: false,
            width: 291,
            fontSize: 16,
            fontFamily: "input-sans, sans-serif",
            fontWeight: 400,
            textAlign: "center",
            fill:"#D0BAEC",
            charSpacing:0,
            id:"footer"
          })
        }

        if (items[i].id == "pop_up") {
          items[i].set({
            selectable:false
          })
        }

        if (items[i].id == "input") {
          items[i].set({
            text:"",
            width: 291,
            fontSize: 18,
            fontFamily: "input-sans, sans-serif",
            fontWeight: 400,
            textAlign: "center",
            fill:"#4D4D4D",
            objecttype: 'text',
            id:"input"
          })
        }
        
        canvas.add(items[i]);
  }

  canvas.setActiveObject(input);
  input.enterEditing();
  input.selectAll();
  
  // if you have disabled render on addition
  canvas.renderAll();
}

function addTextNode(text, top, left) {

  for (var i = 0; i < active_group.getObjects().length; i++) {
    if (active_group.getObjects()[i].id == current_circle.id && active_group.getObjects()[i].type == "textbox" ) {
      active_group.getObjects()[i].set({
        text:text,
        backgroundColor:'rgb(242,242,242,0.4)'
      })
    }
  }

  current_circle.set({
    fill:active_group._objects[0]._objects[0].fill,
    isClisked:false,
    isFilled:true,
    text:text
  })

  active_group.set({
    hasText:true
  });

  current_circle.animate({radius:small_circle},{
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });

  var hasTextCounter = 0;
  for (var i = 0; i < stack.length; i++) {
    if (stack[i].hasText) {
      hasTextCounter++
    }

    if (hasTextCounter == 5) {
      goToNextStep();
    }
  }

  canvas.renderAll();
}

function move_the_stack(new_group) {
  if (state == 0) {
    if (new_group.isActive != true) {

      for (var i = 0; i < stack.length; i++) {
        dom_layer[i].classList.add("hidden");
        stack[i].sendToBack();  
        stack[i].set({top:stack[i].org_top})
        stack[i].isActive = false
        
        stack[i].animate('opacity', '1', {
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });

        stack[i].animate('shadow.blur', '0', {
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });

        for (var e = 0; e < stack[i].getObjects().length; e++) {
          if (stack[i].getObjects()[e].id == "title") {
            stack[i].getObjects()[e].set({
              top: stack[i].textboxTop,
              fontSize: 18,
              fontWeight: 700,
              fill:"#fff",
              opacity: 1
            })
          }

          if (stack[i].getObjects()[e].type == "textbox" && stack[i].getObjects()[e].id != "title") {
            stack[i].getObjects()[e].animate('opacity', '0', {
              duration: 250,
              onChange: canvas.renderAll.bind(canvas),
              onComplete: function() {
                //callback code goes here
              }
            });
          }

          if (stack[i].getObjects()[e].type == "circle") {
          	if (!stack[i].getObjects()[e].isFilled) {
          		stack[i].getObjects()[e].animate('opacity', '0', {
	              duration: 250,
	              onChange: canvas.renderAll.bind(canvas),
	              onComplete: function() {
	                //callback code goes here
	              }
	            });
          	}
          }

        }
      }
      

      for (var i = 0; i < new_group.pos; i++) {

        if (i == new_group.pos-1) {
          stack[i].animate({top:stack[i].org_top-145}, {
            duration: 250,
            onChange: canvas.renderAll.bind(canvas),
            onComplete: function() {
              //callback code goes here
            }
          });
        } else {
          stack[i].set({top:stack[i].org_top-145})
        }

      }

      active_group = new_group
      active_group.isActive = true
      active_group.animate('opacity', '1', {
        duration: 250,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          //callback code goes here
        }
      });
      for (var e = 0; e < stack[i].getObjects().length; e++) {
        if (stack[i].getObjects()[e].type == "textbox" && stack[i].getObjects()[e].id != "title") {
            stack[i].getObjects()[e].animate('opacity', '1', {
              duration: 250,
              onChange: canvas.renderAll.bind(canvas),
              onComplete: function() {
                //callback code goes here
              }
            });
          }
        }


      for (var i = active_group.getObjects().length - 1; i >= 0; i--) {
        if (active_group.getObjects()[i].id == "title") {
          if (active_group.getObjects()[i].text == "Device") {
            active_group.getObjects()[i].set({
              top: 100,
              fontSize: 18,
              fontWeight: 700,
              fill:"#fff",
              opacity: 1
            })
          } else {
            active_group.getObjects()[i].set({
              top: 70,
              fontSize: 18,
              fontWeight: 700,
              fill:"#fff",
              opacity: 1
            })
          }
        }

        if (active_group.getObjects()[i].type == "circle") {
            active_group.getObjects()[i].animate('opacity', '1', {
              duration: 250,
              onChange: canvas.renderAll.bind(canvas),
              onComplete: function() {
                //callback code goes here
              }
            });
          }
      }

      active_group = new_group
      active_group.isActive = true
      
      for (var i = active_group.getObjects().length - 1; i >= 0; i--) {
        if (active_group.getObjects()[i].id == "title") {
          active_group.getObjects()[i].set({
            top: -140,
            fontSize: 28,
            fill: "#000",
            opacity: 0
          })
        }
      }
    }
  	dom_layer[active_group.pos].classList.remove("hidden");
  }
  canvas.renderAll();
}

function highligt_the_stack(the_group) {
  if (state == 0) {
    if (the_group != old_highlight_group) {
    	//the_group.shadow.blur = 10;
      
      the_group.animate('shadow.blur', '10', {
        duration: 250,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          //callback code goes here
        }
      });
      
      if (old_highlight_group != undefined && !old_highlight_group.isActive) {
      	//the_group.shadow.blur = 0;
        
        old_highlight_group.animate('shadow.blur', '0', {
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });
        
      }

      canvas.renderAll();
      old_highlight_group = the_group;
    }
  }
}

var nodes = 0;
var connections = 0;
function spread_the_stack() {

  for (var i = 0; i < dom_layer.length; i++) {
    dom_layer[i].classList.add("hidden");
  }

  state++;
  document.getElementById('the-description').innerHTML = "Draw lines between the values that inform your product and the elements in your stack."
  document.getElementById('modal-text').innerHTML = "Materials: What is connected to what? What depends on what? Demonstrate the dependencies in your product. Even small decisions in hardware and software can have cascading impacts because of a) how dependent everything is within new connected technology and therefore b) if one thing goes down or is ill-designed, everything goes down. Furthermore, the connections within a product demonstrate the push and pull around difficult decisions - which is useful to demonstrate within team decisions. <br><br> Values: Even if everything in the product “works”, it is still important to ask what it is working towards. What are the ethical values that you hold dear, that ground your product? Put another way: would you quit your job or feel as though you’ve failed your mission if any of these ethical values were compromised? If any are important for you, show where you are putting them into action by connecting them to those material elements. More guidance.<br><br>The ethical values we present here integrate values that have been identified by VIRT-EU consortium partners at Politecnico di Torino in data protection regulator decisions across the European Union with values identified in ethnographic research by the teams from LSE and ITU."
  $('#modal').modal('show')
  document.getElementById("map").classList.remove("pulse");
  document.getElementById("create").classList.add("disabled");
  document.getElementById("map").removeEventListener("click", spread_the_stack)

  for (var i = stack.length - 1; i >= 0; i--) {

  	stack[i].animate('shadow.blur', '0', {
			duration: 250,
			onChange: canvas.renderAll.bind(canvas),
			onComplete: function() {
			//callback code goes here
		}
    });

    for (var e = 0; e < stack[i].getObjects().length; e++) {
    	
    	if (stack[i].getObjects()[e].type == "circle") {
	        stack[i].getObjects()[e].set({
	          opacity:1
	        })
	    }

      if (stack[i].getObjects()[e].id == "title") {
        stack[i].getObjects()[e].set({
          top: -140,
          fontSize: 28,
          fill: stack[i]._objects[0]._objects[0].fill,
        })
      }
    }

    for (var f = 0; f < stack[i].getObjects().length; f++) {
      if (stack[i].getObjects()[f].type == "textbox") {
        if (stack[i].getObjects()[f].text && stack[i].getObjects()[f].id != "title") {
          nodes++
          stack[i].getObjects()[f].animate('opacity', '1', {
            duration: 250,
            onChange: canvas.renderAll.bind(canvas),
            onComplete: function() {
              //callback code goes here
            }
          });
        } else stack[i].remove(stack[i].getObjects()[f]);
      }
    }

    for (var o = 0; o < 9; o++) {
      stack[i]._objects[o].set({opacity:0.75})
    }
    var filled_circle = 9;
    var _length = stack[i].getObjects().length;
    for (var c = 9; c < _length; c++) {
      if (!stack[i]._objects[filled_circle].isFilled && stack[i]._objects[filled_circle].type != "textbox" && stack[i]._objects[filled_circle].id != "overlay") {
        stack[i].remove(stack[i]._objects[filled_circle]);
      } else filled_circle++;
    }
  }

  stack[0].animate({
      opacity:1,
      scaleX: 0.75,
      scaleY: 0.75,
      top:canvas.height/2,
      left:canvas.width/2
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });

  stack[1].animate({
      opacity:1,
      scaleX: 0.75,
      scaleY: 0.75,
      top:canvas.height/2-116,
      left:canvas.width/2+380
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });

  stack[2].animate({
      opacity:1,
      scaleX: 0.75,
      scaleY: 0.75,
      top:canvas.height/2-116,
      left:canvas.width/2-380
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });

  stack[3].animate({
      opacity:1,
      scaleX: 0.75,
      scaleY: 0.75,
      top:canvas.height/2+116,
      left:canvas.width/2-380
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });

  stack[4].animate({
      opacity:1,
      scaleX: 0.75,
      scaleY: 0.75,
      top:canvas.height/2+116,
      left:canvas.width/2+380
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });
  addValues();
  canvas.renderAll();
}

function addValues() {
  for (var i = 0; i < values.length; i++) {
    var circle = new fabric.Circle({
      originX: 'center',
      originY: 'center',
      left: width*i,
      id: values[i],
      fill: '#4D4D4D',
      stroke: '#4D4D4D',
      strokeWidth: 0,
      radius: 4,
      subTargetCheck:true,
      isValue: true,
      text:values[i]
    });

    var text = new fabric.Textbox(values[i], {
      originX: 'center',
      originY: 'center',
      left: width*i,
      top: 25,
      width: 200,
      fontSize: 14,
      fontFamily: "tablet-gothic, sans-serif",
      fontWeight: 400,
      textAlign: "center",
      fill:"#000",
      id:values[i]
    });

    if (i < 0 && i > 4) {
      circle.set({
        top: 0+(small_circle)
      })
    }

    if (i > 3 && i < 9) {
      text.set({
        top: height/2+25,
        left: (width*(i-4))-(width/2)
      })

      circle.set({
        top: height/2+small_circle,
        left: (width*(i-4))-(width/2)
      })
    }

    if (i > 8 && i < 16) {
      text.set({
        top: (height)+25,
        left: (width*(i-9))
      })

      circle.set({
        top: (height)+small_circle,
        left: (width*(i-9))
      })
    }

    valuesGroup.addWithUpdate(text);
    valuesGroup.addWithUpdate(circle);
  };

  valuesGroup.set({
    selectable: false,
    originX: 'center',
    originY: 'center',
    left: canvas.width/2,
    top: canvas.height - valuesGroup.height/2,
    scaleX: 0.75,
    scaleY: 0.75,
    opacity: 0,
    subTargetCheck:true
  })

  canvas.add(valuesGroup);

  valuesGroup.animate({
      opacity:1
    }, {
    duration: 250,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function() {
      //callback code goes here
    }
  });
};

var theProduct = {}
function expose_the_stack(){

  document.getElementById("map").classList.add("disabled");
  document.getElementById("expose").classList.remove("pulse");
  document.getElementById("expose").removeEventListener("click", expose_the_stack)

  document.getElementById('the-description').innerHTML = "Answer questions by clicking on the blue highlighted values." 

  document.getElementById('modal-text').innerHTML = "Based on your description of your system, we can identify a few possible questions for you to consider. Consider each question and expand it to see why the issue it presents might be problematic.<br><br>The original PESIA was developed by POLITO. You can see the full version of it here.<br><br>Based on the VIRT-EU research, we can help identify the answers that have the most risk from an ethical and social point of view. Risk can be in terms of possible harm to your users, to your own values and therefore your company's foundation and team, or to your overall public reputation and relations.<br><br>These are not grades. They are indications of where you can align better with your values and tools that we hope will help you.<br><br>These areas do not cover all of the possible issues you may have. If you want to go through all of the issues, you can use PESIA for a full-blown privacy, ethical and social impact assessment questionnaire."
  $('#modal').modal('show')

  state++;

  for (var i = 0; i < canvas.getObjects().length; i++) {
    if (canvas.getObjects()[i].type == "line") {
      if (theProduct[canvas.getObjects()[i].to]) {
        theProduct[canvas.getObjects()[i].to].push(canvas.getObjects()[i].from)
      } else {
        theProduct[canvas.getObjects()[i].to] = [canvas.getObjects()[i].from]
      }
    }
  }

  for (var i = 0; i < stack.length; i++) {
    for (var e = 0; e < stack[i].getObjects().length; e++) {
      if (stack[i].getObjects()[e].type == "group") {
        stack[i].getObjects()[e].animate({
          opacity: 0.5
        },{
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });
      }
    }
  }

  for (var i = 0; i < canvas.getObjects()[5].getObjects().length; i++) {
  	if (selected_values.indexOf(canvas.getObjects()[5].getObjects()[i].id) != -1) {
  		console.log(canvas.getObjects()[5].getObjects()[i].id +" : " + canvas.getObjects()[5].getObjects()[i].type);
  		if (canvas.getObjects()[5].getObjects()[i].type == "textbox") {
  			canvas.getObjects()[5].getObjects()[i].set({
  				fill:"#2D9DD7",
  				selected:true
  			});
  		}

  		if (canvas.getObjects()[5].getObjects()[i].type == "circle") {
  			canvas.getObjects()[5].getObjects()[i].set({
  				fill:"#2D9DD7",
  				radius:small_circle,
  				selected:true
  			});
  		}
  	}
  }

  for (var i = 0; i < canvas.getObjects()[5].getObjects().length; i++) {
  	try{
  		if (!canvas.getObjects()[5].getObjects()[i].selected) {
  			canvas.getObjects()[5].getObjects()[i].set({
  				opacity:0.65
  			})
  		}
  	} catch {}
  }


  state++;
}

function goToNextStep() {
  if (state == 0) {
  	document.getElementById("number1").innerHTML = "✓";
    document.getElementById("map").classList.remove("disabled");
    document.getElementById("map").classList.add("pulse");
    document.getElementById("map").addEventListener("click", spread_the_stack)
  }

  if (state == 1) {
  	document.getElementById("number2").innerHTML = "✓";
    document.getElementById("expose").classList.remove("disabled");
    document.getElementById("expose").classList.add("pulse");
    document.getElementById("expose").addEventListener("click", expose_the_stack)
  }
}
  

/**************************************/
/*                                    */
/*   detecting things on the canvas   */
/*                                    */
/**************************************/

canvas.on('mouse:move', function(options) {
	if (state == 3 && current_circle) {
		current_circle.animate('radius', small_circle, {
	        duration: 100,
	        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          //callback code goes here
        }
      });
	}

	if (options.subTargets != 0) {

    if (options.subTargets[0].type == "circle") {
      current_circle = options.subTargets[0];
      current_circle.animate('radius', big_circle, {
        duration: 100,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          //callback code goes here
        }
      });
    }
    if (options.subTargets[0].type == "group" && current_circle && !current_circle.isClisked) {
      current_circle.animate('radius', small_circle, {
        duration: 100,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function() {
          //callback code goes here
        }
      });
    }
  }

  if (isDown){
    var pointer = canvas.getPointer(options.e);
    line.set({ x2: pointer.x, y2: pointer.y });
  }

  canvas.renderAll();
});

var line, isDown;

canvas.on('mouse:down', function(options) {
  if (options.subTargets != 0) {
    
    if (options.subTargets[0].type == "circle" && !options.subTargets[0].isValue) {
        current_circle = options.subTargets[0];
        current_circle.set({
        isClisked:true
      });
      
      if (state == 0) {
        load_pop_up(options.pointer.y-100, options.pointer.x)
      }
    }

    if (options.subTargets[0].type == "circle" && options.subTargets[0].fill == "#2D9DD7") {
        if (state == 3) {
        	var pointer = canvas.getPointer(event.e);
			var posX = pointer.x;
			var posY = pointer.y;
			popUpQuestions(posX,posY);
      	}
    }

    if (options.subTargets[0].type == "circle" && options.subTargets[0].isValue && !isDown) {
        current_circle = options.subTargets[0];
        current_circle.set({
        isClisked:true
      });

      if (state == 1) {
        isDown = true;
        stack_circle = options.subTargets[0]

        var pointer = canvas.getPointer(options.e);
        var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
        line = new fabric.Line(points, {
          strokeWidth: 2,
          fill: current_circle.fill,
          stroke: current_circle.fill,
          //strokeDashArray: [5, 5],
          originX: 'center',
          originY: 'center',
          selectable: true,
          hoverCursor: 'help'
        });
        canvas.add(line);

      }
    }

    if (options.subTargets[0].type == "group" && current_circle) {
      current_circle.set({
        isClisked:false
      });
    }
  }
  canvas.renderAll();
});

canvas.on('mouse:up', function(options){
  if (state == 1) {
    try {
      if (options.subTargets[0].isValue != true) {
        isDown = false;
        
        current_circle.animate({radius:small_circle,isClisked:false},{
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });

        stack_circle.animate({radius:small_circle,isClisked:false},{
          duration: 250,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: function() {
            //callback code goes here
          }
        });

        stack_circle.set({
          stroke:"#FFF"
        })

        line.set({
          from:stack_circle.text,
          to:current_circle.layer,
          stroke:current_circle.fill
        });

        if (problem_values.indexOf(line.from) != -1) {
        	selected_values.push(line.from)
        	console.log(line.from + " was added");
        }

        connections++
      }

    } catch(error) {

    }
    if (connections >= nodes) {
      goToNextStep();
    }
  }
});

pop_up_group.on('mousedown', function(options) { 
    ungroup(pop_up_group);
});

//Group click
acqua_group.on('mousedown', function(options) { 
    move_the_stack(acqua_group);
});

green_group.on('mousedown', function(options) { 
    move_the_stack(green_group);
});

yellow_group.on('mousedown', function(options) { 
    move_the_stack(yellow_group);
});

orange_group.on('mousedown', function(options) { 
    move_the_stack(orange_group);
});

purple_group.on('mousedown', function(options) { 
    move_the_stack(purple_group);
});

//Group hover
acqua_group.on('mouseover', function(options) {
  
  highligt_the_stack(acqua_group);
});

green_group.on('mouseover', function(options) {
  
  highligt_the_stack(green_group); 
});

yellow_group.on('mouseover', function(options) {
  
  highligt_the_stack(yellow_group); 
});

orange_group.on('mouseover', function(options) {
  
  highligt_the_stack(orange_group); 
});

purple_group.on('mouseover', function(options) {
  
  highligt_the_stack(purple_group); 
});

function convertHex(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = r+','+g+','+b;
    return result;
}

function popUpQuestions(posX,posY) {
	var pop_up = document.getElementById("pop-up")
	pop_up.style.top = (posY-10)+"px";
	pop_up.style.left = (posX+30)+"px";
	pop_up.style.display = "inline-block";
}

function isReady() {
	var overlay = document.getElementById("product-name");
	var input = document.getElementById("product-form").value;

	if (input != "") {
		document.getElementById("the-product").innerHTML = input
		$("#overlay").fadeOut( "slow", function() {
			$('#modal').modal('show')
		});
	}
}

