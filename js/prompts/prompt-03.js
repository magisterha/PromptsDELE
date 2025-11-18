/**
 * -------------------------------------------------------------------------
 * PROMPT 03: LA FAMILIA BÁSICA (A1) / 家庭 (A1)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Enseñar a describir la familia nuclear y la edad.
 * El punto crítico pedagógico es la diferenciación entre 'SER' y 'TENER' 
 * al hablar de la edad, un error fosilizado común en estudiantes sinohablantes.
 * * 🇹🇼 提示詞目的 (Purpose):
 * 教導如何描述核心家庭和年齡。
 * 教學關鍵點在於區分描述年齡時使用的 'SER' 和 'TENER'，
 * 這是華語學生常見的固化錯誤。
 * -------------------------------------------------------------------------
 */

const prompt03Data = {
    id: 'prompt-03',
    level: 'A1',
    recommendedTime: 180, // 3 minutos
    
    vocabulary: {
        familia: [
            { es: "Padre / Papá", cn: "爸爸" },
            { es: "Madre / Mamá", cn: "媽媽" },
            { es: "Hermano mayor", cn: "哥哥" },
            { es: "Hermano menor", cn: "弟弟" },
            { es: "Hermana mayor", cn: "姊姊" },
            { es: "Hermana menor", cn: "妹妹" }
        ],
        numeros: [ // Ayuda rápida para la edad
            { es: "20 - Veinte", cn: "20" },
            { es: "25 - Veinticinco", cn: "25" },
            { es: "30 - Treinta", cn: "30" },
            { es: "40 - Cuarenta", cn: "40" },
            { es: "50 - Cincuenta", cn: "50" }
        ]
    }
};

/**
 * Función: Inyectar vocabulario
 */
function loadPrompt03Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    container.innerHTML = '';

    // 1. Miembros de la Familia
    const h4Fam = document.createElement('h4');
    h4Fam.textContent = "👨‍👩‍👧‍👦 Familia (家庭成員)";
    container.appendChild(h4Fam);

    const ulFam = document.createElement('ul');
    prompt03Data.vocabulary.familia.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulFam.appendChild(li);
    });
    container.appendChild(ulFam);

    // 2. Números (Edad)
    const h4Num = document.createElement('h4');
    h4Num.textContent = "🔢 Edad (年齡)";
    h4Num.style.marginTop = "1.5rem";
    container.appendChild(h4Num);

    const ulNum = document.createElement('ul');
    prompt03Data.vocabulary.numeros.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulNum.appendChild(li);
    });
    container.appendChild(ulNum);
}

/**
 * Función: Timer
 */
function initPrompt03Timer() {
    const btnStart = document.getElementById('btn-start');
    
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt03Data.recommendedTime);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt03Vocabulary();
    initPrompt03Timer();
    console.log('✅ Prompt 03 Logic Loaded / 邏輯已加載');
});
