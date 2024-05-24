let anmation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false, //반복재생
    autoplay: true, //자동재생
    path: './lottie-data.json', // 파일 경로 넣거나
    animationData: animationData, // 직접 객체정보를 넣거나
})
