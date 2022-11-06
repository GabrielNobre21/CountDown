const secondsContainer = document.querySelector('#seconds') /* selecionar o "id seconds" de h2 */
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

/* Mostra a data atual */
const nextYear =  new Date().getFullYear() + 1 /*.getFullYear(), apresenta o ano atual e o "+ 1" vai somar mais um ano */ 
const newYearTime = new Date(`Janeiro 1 ${nextYear} 00:00:00`) /* Apresenta a data que consta dentro da 'Date()' */ /* ` serve para demonstrar uma templet striming */ /* ${nextYear} o proximo ano sera atualizado automaticamente */ 

nextYearContainer.textContent = nextYear /* irá aparecer o proximo ano de fundo */

/* vai demonstrar o tempo que falta para as 0 horas do ano que vem */
const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime /* Diferença entre 0 horas primeiro dia do ano que vem e a data atual */
    const days  = Math.floor(difference / 1000 / 60 / 60 / 24) /* O math.floor arredonta as ultimas casas decimais para baixo */ /* Quantidades de dias que faltam para para o primeiro dia do ano quem vem */ 

    const hours  = Math.floor(difference / 1000 / 60 / 60) %24
    const minutes  = Math.floor(difference / 1000 / 60) %60
    const seconds  = Math.floor(difference / 1000) %60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds /* será inserido no site o tempo */ /* (< 10 ? '0' + seconds : seconds) vai implementar um 0 nas contagens menores que 10 */

    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
 }
 

setTimeout(() => {
    spinnerLoading.remove() /* adiciona o spinner */
    countdownContainer.style.display = 'flex'  /* adicona a contagem após o spinner sair */
}, 1000 ) /* remove o spinner após 1 segundo */     

setInterval(updateCountdown, 1000) /* excuta a função repetidamente */
