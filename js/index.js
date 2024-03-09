import axios from "axios"

const btn = document.querySelector('.advice__new--btn')
const advice__msg = document.querySelector('.advice__content--msj')
const advice__id = document.querySelector('.advice__number--id')


function start () {
  const getAdvice = async() => {
    const loading = 'Loading...'
    btn.disabled = true
    advice__msg.textContent = `${loading}`
    const res = await axios('https://api.adviceslip.com/advice')
    const { id, advice } = res.data.slip
    advice__id.textContent = `Advice # ${id}`
    advice__msg.textContent = `"${advice}"`
    btn.disabled = false
    console.log(id, advice)
  }
  getAdvice()
}


start()
btn.addEventListener('click', start)


