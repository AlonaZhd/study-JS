//
//========  FUNCTION  ==========
//

// function calcSpace(amout, unit = "px") {
//     return `${amout * 4}${unit}`;
// }

// console.log(calcSpace(5));

//======================================

function playTrackById(trackId) {
    // Отримати файл пісні та запустити її
}

function stopTrackById(trackId) {
    /// отримати файл пісні і її поставити на паузy
    console.log(`отримати файл пісні з ID ${trackId} і її поставити на паузy`);
}

function play(trackName, trackId) {
    console.log(`Запускаємо ${trackName}`);

    playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
    console.log(`Завершуємо грати ${oldTrackName}`);
    console.log(`Завершуємо грати ${newTrackName}`);
}

function pausePlay(currentTrackName) {
    console.log(`Трек ${currentTrackName} на паузі`);

    reloadDataTrack();

    play();
}

// function reloadDataTrack(amout) {
//     if (amout <= 0) {
//         console.log("Дані оновлені вказану кількість разів");
//     } else {
//         console.log("Повторне оновлення");
//         reloadDataTrack(amout - 1);
//     }
// }

// reloadDataTrack(5);

function pauseStopByTrack(trackName, trackId) {
    let isPause = null;

    return () => {
        if (isPause == true) {
            return;
        }

        stopTrackById(trackId);
        console.log(`Трек ${trackName} на паузі`);
        isPause = true;
    };
}

// const pauseStop123 = function pauseStop(originTrackId, originTrackName) {
//     // stopTrackById(originTrackId);
//     console.log(`Трек ${originTrackName} на паузі`);
// };
// pauseStop123();

const pauseStop456 = pauseStopByTrack("IT - Console log", 10);
pauseStop456();
pauseStop456();
pauseStop456();

//======================================

const memoCalcSpace = (oldAmout = null, oldUnit = null, oldResult = null) => {
    return (amout, unit = "px") => {
        if (oldAmout === amout && unit === oldUnit) {
            console.log("Memo");
            return oldResult;
        }

        oldResult = `${amout * 4}${unit}`;
        oldAmout = amout;
        oldUnit = unit;

        return oldResult;
    };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

//=====================================
