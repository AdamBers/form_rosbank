function handleStar(event) {
    const label1 = document.getElementById('star1label')
    const label2 = document.getElementById('star2label')
    const label3 = document.getElementById('star3label')
    const label4 = document.getElementById('star4label')
    const label5 = document.getElementById('star5label')
    const question1 = document.getElementById('question1')
    const question2 = document.getElementById('question2')
    const question3 = document.getElementById('question3')

    label1.style.color = '#E5E7EA'
    label2.style.color = '#E5E7EA'
    label3.style.color = '#E5E7EA'
    label4.style.color = '#E5E7EA'
    label5.style.color = '#E5E7EA'

    if (event.target.id === 'star5') {
        label5.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star4') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star3') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star2') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        label2.style.color = '#E40038'
        question1.classList.add('hidden')
        question3.classList.add('hidden')
        question2.classList.remove('hidden')
    }

    if (event.target.id === 'star1') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        label2.style.color = '#E40038'
        label1.style.color = '#E40038'
        question1.classList.add('hidden')
        question2.classList.add('hidden')
        question3.classList.remove('hidden')
    }
}