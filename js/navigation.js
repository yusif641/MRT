const menux = document.querySelectorAll('.link-header')
const sections = document.querySelectorAll('section')

menux.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()

        for (let i = 0; i < sections.length; i++) {
            if (e.target.id === sections[i].classList[0]) {
                const y = sections[i].getBoundingClientRect().top + window.scrollY + -100;

                window.scrollTo({top: y, behavior: 'smooth'});

                // y.scrollIntoView({
                //     block: 'start',
                //     inline: 'start',
                //     behavior: 'smooth'
                // })
            }
        }
    })
})