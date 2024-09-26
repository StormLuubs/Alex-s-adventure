function nextStep(choice) {
    const storyElement = document.getElementById('story');

    if (choice === 'explorar') {
        storyElement.innerText = 'Alex decidiu explorar a floresta. Após algumas horas, ele encontrou uma caverna. O que ele deve fazer agora?';
        updateButtons('entrar', 'voltar');
    } else if (choice === 'vila') {
        storyElement.innerText = 'Alex visitou a vila e encontrou um velho sábio que ofereceu conselhos. Ele deve seguir as instruções do sábio ou ignorá-las?';
        updateButtons('seguir', 'ignorar');
    } else if (choice === 'entrar') {
        storyElement.innerText = 'Dentro da caverna, Alex encontrou o tesouro! Ele venceu a aventura! Fim.';
        endAdventure();
    } else if (choice === 'voltar') {
        storyElement.innerText = 'Alex decidiu voltar para a floresta e pensar melhor. Fim.';
        endAdventure();
    } else if (choice === 'seguir') {
        storyElement.innerText = 'O sábio contou a Alex sobre um atalho para o tesouro. Ele seguiu as instruções e chegou ao tesouro! Fim.';
        endAdventure();
    } else if (choice === 'ignorar') {
        storyElement.innerText = 'Alex ignorou o sábio e se perdeu na floresta. Fim.';
        endAdventure();
    } else if (choice === 'novo caminho') {
        storyElement.innerText = 'Alex decidiu seguir um novo caminho e encontrou um rio. O que ele deve fazer agora?';
        updateButtons('nadar', 'seguir pela margem');
    } else if (choice === 'nadar') {
        storyElement.innerText = 'Alex nadou pelo rio e encontrou um barco. Ele navegou e chegou à ilha do tesouro! Fim.';
        endAdventure();
    } else if (choice === 'seguir pela margem') {
        storyElement.innerText = 'Alex seguiu pela margem e encontrou uma tribo amigável que o ajudou a encontrar o tesouro. Fim.';
        endAdventure();
    }
}

function updateButtons(option1, option2) {
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = `
        <button onclick="nextStep('${option1}')">${option1.charAt(0).toUpperCase() + option1.slice(1)}</button>
        <button onclick="nextStep('${option2}')">${option2.charAt(0).toUpperCase() + option2.slice(1)}</button>
    `;
}

function endAdventure() {
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = `<button onclick="location.reload()">Reiniciar Aventura</button>`;
}
